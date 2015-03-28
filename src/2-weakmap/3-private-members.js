var Article = (function() {
  var IDs = new WeakMap();
  
  function generateId() {
    return Math.round( Math.random() * 10000 ) + 1;
  }

  return class Article {
    constructor(title) {
      var id = generateId();
      IDs.set( this, id );

      this.title = title;
    }

    getId() {
      return IDs.get( this );
    }
  }
})();

var art1 = new Article( 'You can use ES6 NOW!' );
var art2 = new Article( 'ES6 presentation tonight.' );
var art3 = new Article( 'No more Munchkins!' );

console.log( art1.getId() );
console.log( art1.getId() );
console.log( art2.getId() );
console.log( art3.getId() );
