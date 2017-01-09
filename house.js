"use strict"

class House {

  constructor(rumah) {
    this.address = rumah['address']
    this.square_feet = rumah['square_feet']
    this.num_bedrooms = rumah['num_bedrooms']
    this.num_baths = rumah['num_baths']
    this.cost = rumah['cost']
    this.down_payment = rumah['down_payment']
    this.sold = rumah['sold']
    this.short_sale = rumah['short_sale']
    this.has_tenants = rumah['as_tenants']
  }
  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
  //   this.address = address
  //   this.square_feet = square_feet
  //   this.num_bedrooms = num_bedrooms || 3
  //   this.num_baths = num_baths || 2
  //   this.cost = cost || 320000
  //   this.down_payment = down_payment || 0.20
  //   this.sold = sold || false
  //   this.short_sale = short_sale
  //   this.has_tenants = has_tenants || false
  // }
  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
    // return console.log(this.address);
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

var rumah = new House({address: 'Jl. Haji Nawi No.139C', square_feet: '24.000', num_bedrooms: 3, num_baths: 6, cost: '$20.000.000'});

console.log(rumah.to_s());
