"use strict"

class House {

  constructor(input) {
    this.address      = input['address']
    this.square_feet  = input['square_feet']
    this.num_bedrooms = input['num_bedrooms'] || 3
    this.num_baths    = input['num_baths' || 2]
    this.cost         = input['cost' || 320000]
    this.down_payment = input['down_payment'] || 0.20
    this.sold         = input['sold'] || false
    this.short_sale   = input['short_sale']
    this.has_tenants  = input['has_tenants'] || false
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

let newHouse = new House( { square_feet : 30,
                            address     :'jalan raya',
                            num_baths   : 2,
                            cost        : 100000,
                            short_sale  : 2000          } )

    console.log(newHouse);
