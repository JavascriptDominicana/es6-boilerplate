import config from './config';
import Gallery from './gallery/gallery';
import jQuery from 'jQuery';
import Bootstrap from 'Bootstrap';

export class App {
  static start() {
    this.gallery = new Gallery( 
      config.GALLERY_ID,
      config.DEFAULT_PLACE_ID );

    this.gallery.setup();
  }
}