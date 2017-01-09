"use strict"

class House {

  constructor(components) {
    this.address = components['address']
    this.square_feet = components['square_feet']
    this.num_bedrooms = components['num_bedrooms'] || 3
    this.num_baths = components['num_baths'] || 2
    this.cost = components['cost'] || 320000
    this.down_payment = components['down_payment'] || 0.20
    this.sold = components['sold'] || false
    this.short_sale = components['short_sale'] || false
    this.has_tenants = components['has_tenants'] || false
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
var input = {
  address : "Pondok Indah",
  square_feet : 1000,
}
var rumah = new House(input);

console.log(rumah);
