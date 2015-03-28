export default class FlickrImage {
  constructor(values) {
      this.id = values.id;
      this.title = values.title;
      this.owner = values.owner;
      this.farm = values.farm;
      this.server = values.server;
      this.secret = values.secret;
  }

  render(width = 500, captionLengthCap = false) {
    let img = this.getImgTag( width );
    let caption = this.getFigCaption( captionLengthCap );

    return `<figure>
      ${img}
      ${caption}
    </figure>`;
  }

  getImgTag(width = 200) {
    let src = `http://farm${this.farm}.static.flickr.com/${this.server}/`;
    src += `${this.id}_${this.secret}.jpg`;

    return `<img src="${src}" width="${width}">`;
  }

  getFigCaption(captionLengthCap) {
    let title = captionLengthCap ? 
      this.title.substr( 0, captionLengthCap )
      : this.title;

    if (captionLengthCap && captionLengthCap < this.title.length) {
      title += '...';
    }

    return `<figCaption>${title}</figCaption>`;
  }
}