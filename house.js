"use strict"

class House {

  constructor(argument) {
    // this.address = address
    this.address = argument['address']

    // this.square_feet = square_feet
    this.square_feet = argument['square_feet']

    // this.num_bedrooms = num_bedrooms || 3
    this.num_bedrooms = argument['num_bedrooms']

    // this.num_baths = num_baths || 2
    this.num_baths = argument['num_baths']

    // this.cost = cost || 320000
    this.cost = argument['cost']

    // this.down_payment = down_payment || 0.20
    this.down_payment = argument['down_payment']

    // this.sold = sold || false
    this.sold = argument['sold']

    // this.short_sale = short_sale
    this.short_sale = argument['short_sale']

    // this.has_tenants = has_tenants || false
    this.has_tenants = argument['has_tenants']

  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

var n = new House({address: 'Jakarta', square_feet: '500', num_bedrooms: '3', num_baths: '2',  cost: '320000', down_payment: '20%'/*, sold short_sale: '', has_tenants: ''*/});

console.log(n.to_s());
