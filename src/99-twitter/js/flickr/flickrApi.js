import jQuery from 'jQuery';

export default class FlickerApi {
  constructor(apiKey) {
    this.apiKey = apiKey;

    this.apiUrl = 'https://api.flickr.com/services/rest/'
      + '?api_key=28cf340a86abd88329d677a9666ddfef'
      + '&format=json'
      + '&nojsoncallback=1';
  }

  getGalleryFromPlace(placeId, howMany = 20) {
    let url = this.apiUrl + '&method=flickr.photos.search'
      + '&place_id=' + placeId
      + '&per_page=' + howMany;

    return this.makeJsonpRequest( url ).then((data) => {
      return data.photos.photo;
    });
  }

  getImageInformation(imageId) {
    let url = this.apiUrl + '&method=flickr.photos.getInfo'
      + '&photo_id=' + imageId;

    return this.makeJsonpRequest( url ).then((data) => {
      return data.photo;
    });
  }

  getUserInformation(userId) {
    let url = this.apiUrl + '&method=flickr.people.getInfo'
      + '&user_id=' + userId;

    return this.makeJsonpRequest( url ).then((data) => {
      return data.person;
    });
  }

  makeJsonpRequest(url) {
    let config = {
      url: url,
      dataType: 'json'
    };

    return jQuery.ajax( config ).then((data, status, response) => {
      if (data.stat !== 'ok') {
        return this.rejectRequest( data, response, url );
      }
      
      return data;
    }).fail( this.reportError );
  }

  rejectRequest(data, response, url) {
    return jQuery.Deferred().reject( data, response, url );
  }

  reportError(data, response, url) {
    console.log('We got some errors: ', data, url);
  }
}