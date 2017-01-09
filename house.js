"use strict"

class House {

  constructor(components) {

    this.address = components.address
    this.square_feet = components.square_feet
    this.num_bedrooms = components.num_bedrooms || 3
    this.num_baths = components.num_baths || 2
    this.cost = components.cost || 320000
    this.down_payment = components.down_payment || 0.20
    this.sold = components.old || false
    this.short_sale = components.hort_sale
    this.has_tenants = components.has_tenants || false
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
    return `${this.address} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath, ${this.cost}`
  }
}

var rumah = new House ({address : `Kemanggisan ilir 3`,square_feet : `60`,num_bedrooms:`2`,num_baths:`1`,cost:`2500000`,down_payment:'0.01',sold:false,short_sale: `yes`,has_tenants:true })

console.log(rumah.to_s());
