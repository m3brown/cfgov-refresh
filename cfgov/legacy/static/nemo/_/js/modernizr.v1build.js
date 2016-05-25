/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Generated by v1 project
 */

!function(e,t,n){function a(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,c;for(var f in s)if(s.hasOwnProperty(f)){if(e=[],t=s[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],c=i.split("."),1===c.length?l[c[0]]=r:(!l[c[0]]||l[c[0]]instanceof Boolean||(l[c[0]]=new Boolean(l[c[0]])),l[c[0]][c[1]]=r),u.push((r?"":"no-")+c.join("-"))}}function o(e){var t=f.className,n=l._config.classPrefix||"";if(d&&(t=t.baseVal),l._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}l._config.enableClasses&&(t+=" "+n+e.join(" "+n),d?f.className.baseVal=t:f.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):d?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var s=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},l=function(){};l.prototype=c,l=new l;var u=[],f=t.documentElement,d="svg"===f.nodeName.toLowerCase();d||!function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=w.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),w.elements=n+" "+e,l(t)}function o(e){var t=S[e[T]];return t||(t={},N++,e[T]=N,S[N]=t),t}function i(e,n,a){if(n||(n=t),v)return n.createElement(e);a||(a=o(n));var r;return r=a.cache[e]?a.cache[e].cloneNode():b.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!r.canHaveChildren||E.test(e)||r.tagUrn?r:a.frag.appendChild(r)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),i=0,s=a(),c=s.length;c>i;i++)r.createElement(s[i]);return r}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function l(e){e||(e=t);var a=o(e);return!w.shivCSS||h||a.hasCSS||(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||c(e,a),e}function u(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+a().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(f(t)));return i}function f(e){for(var t,n=e.attributes,a=n.length,r=e.ownerDocument.createElement(C+":"+e.nodeName);a--;)t=n[a],t.specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function d(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+a().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+C+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}function m(e){for(var t=e.length;t--;)e[t].removeNode()}function p(e){function t(){clearTimeout(i._removeSheetTimer),a&&a.removeNode(!0),a=null}var a,r,i=o(e),s=e.namespaces,c=e.parentWindow;return!j||e.printShived?e:("undefined"==typeof s[C]&&s.add(C),c.attachEvent("onbeforeprint",function(){t();for(var o,i,s,c=e.styleSheets,l=[],f=c.length,m=Array(f);f--;)m[f]=c[f];for(;s=m.pop();)if(!s.disabled&&x.test(s.media)){try{o=s.imports,i=o.length}catch(p){i=0}for(f=0;i>f;f++)m.push(o[f]);try{l.push(s.cssText)}catch(p){}}l=d(l.reverse().join("")),r=u(e),a=n(e,l)}),c.attachEvent("onafterprint",function(){m(r),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",y=e.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,T="_html5shiv",N=0,S={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var w={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:r};e.html5=w,l(t);var x=/^$|\b(?:all|print)\b/,C="html5shiv",j=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();w.type+=" print",w.shivPrint=p,p(t),"object"==typeof module&&module.exports&&(module.exports=w)}("undefined"!=typeof e?e:this,t),l.addTest("csspointerevents",function(){var e=i("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),l.addTest("classlist","classList"in f),r(),o(u),delete c.addTest,delete c.addAsyncTest;for(var m=0;m<l._q.length;m++)l._q[m]();e.Modernizr=l}(window,document);
