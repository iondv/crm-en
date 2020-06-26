'use strict';

if (!window.jsCommonReady) {
  (function () {
    var map = {};
    window.cooperativeAjax = function (type, url, params, cb) {
      if (map.hasOwnProperty(url)) {
        if (map[url].done) {
          return cb(map[url].data);
        }
        map[url].listeners.push(cb);
      } else {
        map[url] = {
          listeners: [cb],
          xhr: $[type](url, params).done(function (data) {
            map[url].done = true;
            map[url].data = data;
            for (var i = 0; i  < map[url].listeners.length; ++i) {
              map[url].listeners[i](data);
            }
          })
        };
      }
    };
  })();
}

// JS READY

if (!window.jsCommonReady) {
  window.jsCommonReady = true;
  $(document.body).trigger('js:common:ready');
}