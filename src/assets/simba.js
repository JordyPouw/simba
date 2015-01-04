/* $ Browser(IE8) console.
================================================== */

// Avoid console errors in browsers(IE8) that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


/* $ Main navigation.
================================================== */

// DoubleTapToGo.js: by Osvaldas Valutis.
(function($, window, document, undefined){
  $.fn.doubleTapToGo = function(params){
    if( !( 'ontouchstart' in window ) &&
        !navigator.msMaxTouchPoints &&
        !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

    this.each( function(){
      var curItem = false;

      $( this ).on( 'click', function(e){
        var item = $( this );
        if( item[0] != curItem[0]){
          e.preventDefault();
          curItem = item;
        }
      });

      $( document ).on( 'click touchstart MSPointerDown', function(e){
        var resetItem = true,
            parents = $( e.target ).parents();

        for(var i = 0; i < parents.length; i++)
          if( parents[i] == curItem[0])
            resetItem = false;

        if( resetItem )
          curItem = false;
      });
    });
    return this;
  };
})( jQuery, window, document );

// Set doubleTapToGo on navigation.
$(document).ready(function(){
  $(':has(.u-nav-subnav)').doubleTapToGo();
});


/* $ Collection filter.
================================================== */

$(document).ready(function(){
  $('.filter__mode--grid').click(function(){
    $('#filter__value__mode').val('grid');
    $('#filter__values').submit();
  });
  
  $('.filter__mode--list').click(function(){
    $('#filter__value__mode').val('list');
    $('#filter__values').submit();
  });
});
