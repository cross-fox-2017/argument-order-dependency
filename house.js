/*"use strict"

class House {

  constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, has_tenants) {
    this.address = address
    this.square_feet = square_feet
    this.num_bedrooms = num_bedrooms || 3
    this.num_baths = num_baths || 2
    this.cost = cost || 320000
    this.down_payment = down_payment || 0.20
    this.sold = sold || false
    this.short_sale = short_sale
    this.has_tenants = has_tenants || false
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
*/

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
    return this.address.replace(/.{5}$/g, '****')

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

var h = new House({address: 'jalan lalalallala', square_feet: 'xoxoxoxo', num_bedrooms: 13, num_baths: 13, cost: 131313})


console.log(h.to_s());
