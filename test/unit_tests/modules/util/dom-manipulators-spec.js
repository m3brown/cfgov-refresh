'use strict';
var chai = require( 'chai' );
var expect = chai.expect;
var sinon = require( 'sinon' );
var jsdom = require( 'mocha-jsdom' );
var BASE_JS_PATH = '../../../../cfgov/unprocessed/js/';
var ERROR_MESSAGES = require( BASE_JS_PATH + 'config/error-messages-config' );
var domManipulators = require( BASE_JS_PATH + 'modules/util/dom-manipulators' );
var heading;
var span;
var div;

describe( 'Dom Manipulators create', function() {
  jsdom();

  before( function() {
    heading = domManipulators.create( 'h1', {
      'textContent': 'Create Heading Text',
      'id':          'create-heading-id',
      'className':   'create-heading-class',
      'data-name':   'create-heading-data'
    } );

    span = domManipulators.create( 'span', {
      'textContent': 'Heading Span',
      'id':          'create-span-id',
      'className':   'create-span-class',
      'data-name':   'create-span-data',
      'inside':      heading
    } );

    document.body.appendChild( heading );

    div = domManipulators.create( 'div', {
      'id':        'create-div-id',
      'className': 'create-div-class',
      'data-name': 'create-div-data',
      'around':    heading
    } );
  } );


  it( 'should create a single elem', function() {
    var query = document.querySelector( 'h1' );

    expect( query.id ).to.equal( 'create-heading-id' );
    expect( query.className ).to.equal( 'create-heading-class' );
    expect( query.getAttribute( 'data-name' ) )
      .to.equal( 'create-heading-data' );
  } );

  it( 'should create an elem inside another', function() {
    var query = document.querySelector( 'span' );

    expect( query.textContent ).to.equal( 'Heading Span' );
    expect( query.id ).to.equal( 'create-span-id' );
    expect( query.className ).to.equal( 'create-span-class' );
    expect( query.getAttribute( 'data-name' ) )
      .to.equal( 'create-span-data' );
  } );

  it( 'should create an elem around another', function() {
    var query = document.querySelector( 'div' );

    expect( query.id ).to.equal( 'create-div-id' );
    expect( query.className ).to.equal( 'create-div-class' );
    expect( query.getAttribute( 'data-name' ) )
      .to.equal( 'create-div-data' );
  } );
} );
