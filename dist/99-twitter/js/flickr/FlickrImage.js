System.register([], function (_export) {
  var _createClass, _classCallCheck, FlickrImage;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      FlickrImage = (function () {
        function FlickrImage(values) {
          _classCallCheck(this, FlickrImage);

          this.id = values.id;
          this.title = values.title;
          this.owner = values.owner;
          this.farm = values.farm;
          this.server = values.server;
          this.secret = values.secret;
        }

        _createClass(FlickrImage, {
          render: {
            value: function render() {
              var width = arguments[0] === undefined ? 500 : arguments[0];
              var captionLengthCap = arguments[1] === undefined ? false : arguments[1];

              var img = this.getImgTag(width);
              var caption = this.getFigCaption(captionLengthCap);

              return "<figure>\n      " + img + "\n      " + caption + "\n    </figure>";
            }
          },
          getImgTag: {
            value: function getImgTag() {
              var width = arguments[0] === undefined ? 200 : arguments[0];

              var src = "http://farm" + this.farm + ".static.flickr.com/" + this.server + "/";
              src += "" + this.id + "_" + this.secret + ".jpg";

              return "<img src=\"" + src + "\" width=\"" + width + "\">";
            }
          },
          getFigCaption: {
            value: function getFigCaption(captionLengthCap) {
              var title = captionLengthCap ? this.title.substr(0, captionLengthCap) : this.title;

              if (captionLengthCap && captionLengthCap < this.title.length) {
                title += "...";
              }

              return "<figCaption>" + title + "</figCaption>";
            }
          }
        });

        return FlickrImage;
      })();

      _export("default", FlickrImage);
    }
  };
});
//# sourceMappingURL=../../../99-twitter/js/flickr/FlickrImage.js.map