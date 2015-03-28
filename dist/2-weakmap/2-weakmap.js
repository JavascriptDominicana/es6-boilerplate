System.register([], function (_export) {
  var zombieInfection, person1, person2, person3, person4;
  return {
    setters: [],
    execute: function () {
      "use strict";

      zombieInfection = new WeakMap();
      person1 = { name: "John" };
      person2 = { name: "Martha" };
      person3 = { name: "Paul" };
      person4 = { name: "Elena" };

      zombieInfection.set(person1, "infected");
      zombieInfection.set(person2, "not-infected");
      zombieInfection.set(person4, "not-infected");

      console.log(zombieInfection.has(person1)); //true
      console.log(zombieInfection.has(person4)); //false
      console.log(zombieInfection.get(person2)); //not-infected
      console.log(zombieInfection["delete"](person3));
      console.log(zombieInfection.get(person3)); //undefined
      //console.log( zombieInfection.clear() ); //undefined
    }
  };
});
//# sourceMappingURL=../2-weakmap/2-weakmap.js.map