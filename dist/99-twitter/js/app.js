System.register(["./config", "./gallery/gallery", "jQuery", "Bootstrap"], function (_export) {
  var config, Gallery, jQuery, Bootstrap, _createClass, _classCallCheck, App;

  return {
    setters: [function (_config) {
      config = _config["default"];
    }, function (_galleryGallery) {
      Gallery = _galleryGallery["default"];
    }, function (_jQuery) {
      jQuery = _jQuery["default"];
    }, function (_Bootstrap) {
      Bootstrap = _Bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, null, {
          start: {
            value: function start() {
              this.gallery = new Gallery(config.GALLERY_ID, config.DEFAULT_PLACE_ID);

              this.gallery.setup();
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=../../99-twitter/js/app.js.map