System.register(["./FlickrImage"], function (_export) {
  var FlickrImage, _createClass, _get, _inherits, _classCallCheck, FlickrImageModal;

  return {
    setters: [function (_FlickrImage2) {
      FlickrImage = _FlickrImage2["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      FlickrImageModal = (function (_FlickrImage) {
        function FlickrImageModal(imageValues, userValues) {
          _classCallCheck(this, FlickrImageModal);

          _get(Object.getPrototypeOf(FlickrImageModal.prototype), "constructor", this).call(this, imageValues);

          this.title = imageValues.title._content;
          this.description = imageValues.description._content;
          this.taken = imageValues.dates.taken;
          this.views = imageValues.views;
          this.location = {
            latitude: imageValues.location.latitude,
            longitude: imageValues.location.longitude,
            neighbourhood: {
              id: imageValues.location.neighbourhood.place_id,
              name: imageValues.location.neighbourhood._content
            }
          };

          this.owner = {
            id: userValues.id,
            nsid: userValues.nsid,
            username: userValues.username._content,
            realname: userValues.realname ? userValues.realname._content : userValues.username._content,
            iconserver: userValues.iconserver,
            iconfarm: userValues.iconfarm
          };
        }

        _inherits(FlickrImageModal, _FlickrImage);

        _createClass(FlickrImageModal, {
          render: {
            value: function render() {
              var img = this.getImgTag();
              var caption = this.getFigCaption();
              var userInfo = this.getUserInfo();

              return "\n      <div class=\"modal fade\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              " + userInfo + "\n            </div>\n            <div class=\"modal-body\">\n              " + img + "\n            </div>\n            <div class=\"modal-footer\">\n              " + caption + "\n            </div>\n          </div>\n        </div>\n      </div>\n    ";
            }
          },
          getUserInfo: {
            value: function getUserInfo() {
              var userImg = this.getUserImgTag();

              return "<div class=\"author\">\n      " + userImg + "\n\n      <h4>" + (this.owner.realname || this.owner.username) + "</h4>\n    </div>";
            }
          },
          getUserImgTag: {
            value: function getUserImgTag() {
              var src = this.getUserImage();

              return "<img src=\"" + src + "\" width=\"48\" height=\"48\" alt=\"" + this.owner.username + "\" />";
            }
          },
          getUserImage: {
            value: function getUserImage() {
              if (this.owner.iconfarm > 0) {
                return "http://farm" + this.owner.iconfarm + ".staticflickr.com/" + ("" + this.owner.iconserver + "/buddyicons/" + this.owner.nsid + ".jpg");
              } else {
                return "https://www.flickr.com/images/buddyicon.gif";
              }
            }
          }
        });

        return FlickrImageModal;
      })(FlickrImage);

      _export("default", FlickrImageModal);
    }
  };
});
//# sourceMappingURL=../../../99-twitter/js/flickr/FlickrImageModal.js.map