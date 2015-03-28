System.register([], function (_export) {
  var _createClass, _classCallCheck, Article, art1, art2, art3;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Article = (function () {
        var IDs = new WeakMap();

        function generateId() {
          return Math.round(Math.random() * 10000) + 1;
        }

        return (function () {
          function Article(title) {
            _classCallCheck(this, Article);

            var id = generateId();
            IDs.set(this, id);

            this.title = title;
          }

          _createClass(Article, {
            getId: {
              value: function getId() {
                return IDs.get(this);
              }
            }
          });

          return Article;
        })();
      })();

      art1 = new Article("You can use ES6 NOW!");
      art2 = new Article("ES6 presentation tonight.");
      art3 = new Article("No more Munchkins!");

      console.log(art1.getId());
      console.log(art1.getId());
      console.log(art2.getId());
      console.log(art3.getId());
    }
  };
});
//# sourceMappingURL=../2-weakmap/3-private-members.js.map