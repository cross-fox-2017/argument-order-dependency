"use strict"

class House {

  constructor(arg) {
    // this.address = address
    this.address = arg['address']
    // this.square_feet = square_feet
    this.square_feet = arg['square_feet']
    // this.num_bedrooms = num_bedrooms || 3
    this.num_bedrooms = arg['num_bedrooms']
    // this.num_baths = num_baths || 2
    this.num_baths = arg['num_baths']
    // this.cost = cost || 320000
    this.cost = arg['cost']
    // this.down_payment = down_payment || 0.20
    this.down_payment = arg['down_payment']
    // this.sold = sold || false
    this.sold = arg['sold']
    // this.short_sale = short_sale
    this.short_sale = arg['short_sale']
    // this.has_tenants = has_tenants || false
    this.has_tenants = arg['has_tenants']
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

var h = new House({address: 'jakarta barat asdasdas das dasdas', square_feet: 'asdas', num_bedrooms: 2, num_baths: 2, cost: 23123})


console.log(h.to_s());
