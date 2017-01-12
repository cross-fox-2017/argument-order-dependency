"use strict"

class House {

  constructor(commponents) {
    this.address      = commponents['address'];
    this.square_feet  = commponents['square_feet'];
    this.num_bedrooms = commponents['num_bedrooms'] || 3;
    this.num_baths    = commponents['num_baths'] || 2;
    this.cost         = commponents['cost'] || 320000;
    this.down_payment = commponents['down_payment'] || 0.20;
    this.sold         = commponents['old'] || false;
    this.short_sale   = commponents['short_sale'];
    this.has_tenants  = commponents['has_tenants'] || false;
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${obscure_address} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} bath. ${cost}`
  }
}

let resultHouse = new House({
  address     : 'Jl.Arteri',
  square_feet : 3,
  num_bedrooms: 7,
  num_baths   : 9,
  cost        : 27000,
  down_payment: 0.3,
  old         : 25 ,
  short_sale   : 25,
  has_tenants : 27
});
console.log(resultHouse)
console.log(resultHouse.cost);
