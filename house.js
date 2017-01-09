"use strict"

class House {

  constructor(objectHouse) {
    this.address = objectHouse ["address"];
    this.square_feet = objectHouse["square_feet"];
    this.num_bedrooms = objectHouse["num_bedrooms"] || 3;
    this.num_baths = objectHouse["num_baths"] || 2;
    this.cost = objectHouse["cost"] || 320000;
    this.down_payment = objectHouse["down_payment"] || 0.20;
    this.sold = objectHouse["sold"] || false;
    this.short_sale = objectHouse["short_sale"];
    this.has_tenants = objectHouse["has_tenants"] || false;
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

var objectHouse = new House({
  address : "Jl. XXX",
  square_feet : 3,
  num_bedrooms : 10,
  num_baths : 5,
  cost : 1000000000,
  down_payment : 10
});

console.log(objectHouse);
