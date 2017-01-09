"use strict"

class House {

  constructor(components) {
    this.address = components['address'];
    this.square_feet = components["square_feet"]
    this.num_bedrooms = components["num_bedrooms"] || 3
    this.num_baths = components["num_baths"] || 2
    this.cost = components["cost"] || 320000
    this.down_payment = components["down_payment"] || 0.20
    this.sold = components.hasOwnProperty(["sold"]) || false
    this.short_sale = components["short_sale"]
    this.has_tenants = components.hasOwnProperty(["has_tenants"]) || false
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

var BB = new House({address: false, square_feet :"70"});

console.log(BB);

console.log(BB.address);
