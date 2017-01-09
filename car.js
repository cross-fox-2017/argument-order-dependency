"use strict"

class Car {

  start_car(options) {
    console.log(options);
    console.log(this);
    if (this.hasOwnProperty('headlights')){
      this.headlights = options['headlights']
    } else {
      this.headlights = true
    }

    if (this.hasOwnProperty('gear')){
      this.gear = options['gear']
    } else {
      this.gear = 1
    }
  }
}

var herbie = new Car()

// When we start the car, the headlights should be on by default
herbie.start_car()
console.log(herbie.headlights) // true
console.log(herbie.gear);

// But what happens when we want to start without headlights?

herbie.start_car({headlights : false, gear: 2})
console.log(herbie.headlights) // true ...KOK BISA?!
console.log(herbie.gear);

herbie.start_car({
  gear: 3
})
console.log(herbie.headlights)
console.log(herbie.gear);
