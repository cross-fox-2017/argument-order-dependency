"use strict"

var rumah={
  "address" : 'jl hidup baru' ,
  "square_feet" : '4 sf' ,
  "num_bedroomses" : '',
  "num_baths" : 2,
  "cost" : 320000,
  "down_payment" : 0.20 ,
  "sold" : false,
  "short_sale" : '',
  "has_tenants" : false
}

class House {

  constructor(house) {

    this.address = house.address
    this.square_feet = house.square_feet
    this.num_bedrooms = house.num_bedroomses || 3
    this.num_baths = house.num_baths
    this.cost = house.cost
    this.down_payment = house.down_payment
    this.sold = house.sold
    this.short_sale = house.short_sale
    this.has_tenants = house.has_tenants
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

 var baru = new House(rumah)
 console.log(baru.num_bedrooms)
