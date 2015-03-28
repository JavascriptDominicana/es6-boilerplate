var zombieInfection = new WeakMap();

var person1 = { name: 'John' };
var person2 = { name: 'Martha' };
var person3 = { name: 'Paul' };
var person4 = { name: 'Elena' };

zombieInfection.set( person1, 'infected' );
zombieInfection.set( person2, 'not-infected' );
zombieInfection.set( person4, 'not-infected' );

console.log( zombieInfection.has( person1 ) ); //true
console.log( zombieInfection.has( person4 ) ); //false
console.log( zombieInfection.get( person2 ) ); //not-infected
console.log( zombieInfection.delete( person3 ) );
console.log( zombieInfection.get( person3 ) ); //undefined
//console.log( zombieInfection.clear() ); //undefined