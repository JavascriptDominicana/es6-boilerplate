System.register(["../config", "../flickr/flickrApi", "../flickr/FlickrImage", "../flickr/FlickrImageModal", "jQuery"], function (_export) {
  var config, FlickrApi, FlickrImage, FlickrImageModal, jQuery, _createClass, _classCallCheck, Gallery;

  return {
    setters: [function (_config) {
      config = _config["default"];
    }, function (_flickrFlickrApi) {
      FlickrApi = _flickrFlickrApi["default"];
    }, function (_flickrFlickrImage) {
      FlickrImage = _flickrFlickrImage["default"];
    }, function (_flickrFlickrImageModal) {
      FlickrImageModal = _flickrFlickrImageModal["default"];
    }, function (_jQuery) {
      jQuery = _jQuery["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Gallery = (function () {
        function Gallery(galleryId, placeId) {
          _classCallCheck(this, Gallery);

          this.galleryId = galleryId;
          this.placeId = placeId;

          this.gallery = [];
          this.selectedImage = null;
          this.locked = false;

          this.flickrApi = new FlickrApi(config.TWITTER_API_KEY);
        }

        _createClass(Gallery, {
          setup: {
            value: function setup() {
              var _this = this;

              this.update().then(function () {
                return _this.render();
              });
            }
          },
          update: {
            value: function update() {
              var _this = this;

              return this.flickrApi.getGalleryFromPlace(this.placeId).then(function (gallery) {
                gallery.forEach(function (image, index) {
                  gallery[index] = new FlickrImage(image);
                });

                _this.gallery = gallery;

                return gallery;
              });
            }
          },
          render: {
            value: function render() {
              var _this = this;

              var galleryImages = jQuery("#" + this.galleryId).find(".images");

              this.gallery.forEach(function (image, index) {
                var figure = jQuery(image.render(200, 50));

                figure.addClass("col-md-4");

                figure.on("click", function () {
                  return _this.selectImage(image);
                });

                figure.hide().appendTo(galleryImages).delay(index * 100).fadeIn();
              });
            }
          },
          selectImage: {
            value: function selectImage(image) {
              var _this = this;

              if (this.locked) {
                return;
              }

              this.selectedImage = image;
              this.locked = true;

              var imageInfoPromise = this.getImageInformation(image.id);
              var userInfoPromise = this.getUserInformation(image.owner);

              jQuery.when(imageInfoPromise, userInfoPromise).then(function (imageInfo, userInfo) {
                var imageModal = new FlickrImageModal(imageInfo, userInfo);

                _this.hideGalleryImages();
                _this.showImagePopUp(imageModal);
              }).always(function () {
                return _this.locked = false;
              });
            }
          },
          getImageInformation: {
            value: function getImageInformation(imageId) {
              return this.flickrApi.getImageInformation(imageId);
            }
          },
          getUserInformation: {
            value: function getUserInformation(userId) {
              return this.flickrApi.getUserInformation(userId);
            }
          },
          showGalleryImages: {
            value: function showGalleryImages() {
              var galleryImages = jQuery("#" + this.galleryId).find(".images");

              return galleryImages.fadeIn("slow");
            }
          },
          hideGalleryImages: {
            value: function hideGalleryImages() {
              var galleryImages = jQuery("#" + this.galleryId).find(".images");

              return galleryImages.fadeOut("slow");
            }
          },
          showImagePopUp: {
            value: function showImagePopUp(imageModal) {
              var _this = this;

              var modal = jQuery(imageModal.render());

              modal.appendTo("body").modal("show").on("hidden.bs.modal", function () {
                _this.showGalleryImages();

                modal.remove();
              });
            }
          }
        });

        return Gallery;
      })();

      _export("default", Gallery);
    }
  };
});
//# sourceMappingURL=../../../99-twitter/js/gallery/gallery.js.map