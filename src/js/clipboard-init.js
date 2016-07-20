/* jshint browser:true */
/* global Clipboard:true */

(function() {
  'use strict';

  var selectors = document.querySelectorAll('pre code[class^="lang-"]');

    Array.prototype.forEach.call(selectors, function(selector){

      var btnHtml = '<div class="clipboard">' +
                      '<span class="btn btn-clipboard" title="Copy to clipboard">Copy</span>' +
                    '</div>';
      selector.insertAdjacentHTML('beforebegin', btnHtml);

      var clipboard = new Clipboard('.btn-clipboard', {
        target: function (trigger) {
          return trigger.parentNode.nextElementSibling;
        }
      });

      clipboard.on('success', function (e) {
        e.clearSelection();
        selector.setAttribute('title', 'Copied!');
        //e.trigger;
      });

      clipboard.on('error', function (/*e*/) {
        var fallbackMsg = /Mac/i.test(navigator.userAgent) ? 'Press \u2318 to copy' : 'Press Ctrl-C to copy';
        selector.setAttribute('title', fallbackMsg);
        //e.trigger;
      });

    });

})();
