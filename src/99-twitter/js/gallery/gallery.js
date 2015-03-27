import config from '../config';
import FlickrApi from '../flickr/flickrApi';
import FlickrImage from '../flickr/FlickrImage';
import FlickrImageModal from '../flickr/FlickrImageModal';
import jQuery from 'jQuery';

export default class Gallery {
  constructor(galleryId, placeId) {
    this.galleryId = galleryId;
    this.placeId = placeId;

    this.gallery = [];
    this.selectedImage = null;
    this.locked = false;

    this.flickrApi = new FlickrApi( config.TWITTER_API_KEY );
  }

  setup() {
    this.update().then( () => this.render() );
  }

  update() {
    return this.flickrApi
      .getGalleryFromPlace( this.placeId )
      .then((gallery) => {
        gallery.forEach((image, index) => {
          gallery[ index ] = new FlickrImage( image );
        });

        this.gallery = gallery;

        return gallery;
      });
  }

  render() {
    let galleryImages = jQuery( '#' + this.galleryId )
      .find( '.images' );

    this.gallery.forEach((image, index) => {
      let figure = jQuery( image.render( 200, 50 ) );

      figure.addClass( 'col-md-4' );

      figure.on('click', () => this.selectImage( image ));

      figure.hide()
        .appendTo( galleryImages )
        .delay(index * 100)
        .fadeIn();
    });
  }

  selectImage(image) {
    if (this.locked) {
      return;
    }
    
    this.selectedImage = image;
    this.locked = true;

    var imageInfoPromise = this.getImageInformation( image.id );
    var userInfoPromise = this.getUserInformation( image.owner );

    jQuery.when( imageInfoPromise, userInfoPromise )
      .then((imageInfo, userInfo) => {
        let imageModal = new FlickrImageModal( imageInfo, userInfo );

        this.hideGalleryImages();
        this.showImagePopUp( imageModal );
      })
      .always(() => this.locked = false);
  }

  getImageInformation(imageId) {
    return this.flickrApi.getImageInformation( imageId );
  }

  getUserInformation(userId) {
    return this.flickrApi.getUserInformation( userId );
  }

  showGalleryImages() {
    let galleryImages = jQuery( '#' + this.galleryId )
      .find( '.images' );

    return galleryImages.fadeIn( 'slow' );
  }

  hideGalleryImages() {
    let galleryImages = jQuery( '#' + this.galleryId )
      .find( '.images' );

    return galleryImages.fadeOut( 'slow' );
  }

  showImagePopUp(imageModal) {
    var modal = jQuery( imageModal.render() );

    modal.appendTo( 'body' )
      .modal( 'show' )
      .on('hidden.bs.modal', () => {
        this.showGalleryImages()

        modal.remove(); 
      });
  }
}