import FlickrImage from './FlickrImage';

export default class FlickrImageModal extends FlickrImage {
  constructor(imageValues, userValues) {
    super( imageValues );

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
      realname: userValues.realname ?
        userValues.realname._content
        : userValues.username._content,
      iconserver: userValues.iconserver,
      iconfarm: userValues.iconfarm
    };
  }

  render() {
    let img = this.getImgTag();
    let caption = this.getFigCaption();
    let userInfo = this.getUserInfo();

    return `
      <div class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              ${userInfo}
            </div>
            <div class="modal-body">
              ${img}
            </div>
            <div class="modal-footer">
              ${caption}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  getUserInfo() {
    var userImg = this.getUserImgTag();

    return `<div class="author">
      ${userImg}

      <h4>${this.owner.realname || this.owner.username }</h4>
    </div>`;
  }

  getUserImgTag() {
    var src = this.getUserImage();

    return `<img src="${src}" width="48" height="48" alt="${this.owner.username}" />`;
  }

  getUserImage() {
    if (this.owner.iconfarm > 0) {
      return `http://farm${this.owner.iconfarm}.staticflickr.com/`
        + `${this.owner.iconserver}/buddyicons/${this.owner.nsid}.jpg`;
    } else {
      return 'https://www.flickr.com/images/buddyicon.gif';
    }
  }
}