System.register(["jQuery"], function (_export) {
  var jQuery, _createClass, _classCallCheck, FlickerApi;

  return {
    setters: [function (_jQuery) {
      jQuery = _jQuery["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      FlickerApi = (function () {
        function FlickerApi(apiKey) {
          _classCallCheck(this, FlickerApi);

          this.apiKey = apiKey;

          this.apiUrl = "https://api.flickr.com/services/rest/" + "?api_key=28cf340a86abd88329d677a9666ddfef" + "&format=json" + "&nojsoncallback=1";
        }

        _createClass(FlickerApi, {
          getGalleryFromPlace: {
            value: function getGalleryFromPlace(placeId) {
              var howMany = arguments[1] === undefined ? 20 : arguments[1];

              var url = this.apiUrl + "&method=flickr.photos.search" + "&place_id=" + placeId + "&per_page=" + howMany;

              return this.makeJsonpRequest(url).then(function (data) {
                return data.photos.photo;
              });
            }
          },
          getImageInformation: {
            value: function getImageInformation(imageId) {
              var url = this.apiUrl + "&method=flickr.photos.getInfo" + "&photo_id=" + imageId;

              return this.makeJsonpRequest(url).then(function (data) {
                return data.photo;
              });
            }
          },
          getUserInformation: {
            value: function getUserInformation(userId) {
              var url = this.apiUrl + "&method=flickr.people.getInfo" + "&user_id=" + userId;

              return this.makeJsonpRequest(url).then(function (data) {
                return data.person;
              });
            }
          },
          makeJsonpRequest: {
            value: function makeJsonpRequest(url) {
              var _this = this;

              var config = {
                url: url,
                dataType: "json"
              };

              return jQuery.ajax(config).then(function (data, status, response) {
                if (data.stat !== "ok") {
                  return _this.rejectRequest(data, response, url);
                }

                return data;
              }).fail(this.reportError);
            }
          },
          rejectRequest: {
            value: function rejectRequest(data, response, url) {
              return jQuery.Deferred().reject(data, response, url);
            }
          },
          reportError: {
            value: function reportError(data, response, url) {
              console.log("We got some errors: ", data, url);
            }
          }
        });

        return FlickerApi;
      })();

      _export("default", FlickerApi);
    }
  };
});
//# sourceMappingURL=../../../99-twitter/js/flickr/flickrApi.js.map