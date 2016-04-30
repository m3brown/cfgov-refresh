from django.contrib.syndication.views import Feed
from wagtail.wagtailcore.url_routing import RouteResult

from datetime import datetime
import pytz

eastern = pytz.timezone('US/Eastern')

class FilterableFeed(Feed):
    def __init__(self, page, context):
        self.page = page
        self.context = context

    def link(self):
        return self.page.full_url

    def title(self):
        return "%s | Consumer Financial Protection Bureau" % self.page.title

    def items(self):
        return self.context['posts']

    def item_link(self, item):
        return item.full_url

    def item_pubdate(self, item):
        # this seems to require a datetime
        item_date = item.date_published
        naive = datetime.combine(item_date, datetime.min.time())
        return eastern.localize(naive)

    def item_description(self, item):
        return item.preview_description


class FilterableFeedPageMixin(object):

    def route(self, request, path_components):
        if len(path_components) == 1 and path_components[0] == 'feed':
            return RouteResult(self, kwargs={'format': 'rss'})

        return super(FilterableFeedPageMixin,
                     self).route(request, path_components)

    def serve(self, request, format='html'):
        if format == 'rss':
            context = self.get_context(request)
            return FilterableFeed(self, context)(request)
        else:
            return super(FilterableFeedPageMixin, self).serve(request)