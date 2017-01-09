"use strict"

class House {

  constructor(x) {
    this.address = x['address']
    this.square_feet = x['square_feet']
    this.num_bedrooms = x['num_bedrooms']
    this.baths = x['baths']
    this.cost = x['cost']
    this.down_payment = x['down_payment']
    this.sold = x['sold']
    this.short_sale = x['short_sale']
    this.has_tenants = x['has_tenants']
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
    return console.log(`${this.address} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed,
    ${this.baths} bath. ${this.cost}`)
  }
}

let house = new House({
  address: 'Pondok Indah',
  square_feet: 1200,
  num_bedrooms: 3,
  baths: 2,
  cost: 420000,
  down_payment: 0.20,
  sold: false,
  short_sale: 20000,
  has_tenants: false
});
house.to_s();
