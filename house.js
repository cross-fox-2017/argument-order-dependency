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
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

var BB = new House({address: "jl.lada no.5/6", square_feet :"70" ,down_payment : 30});

console.log(BB);


console.log(BB.obscure_address("lada"));
BB.buy(30,20)
console.log(BB.down_payment);
console.log(BB.to_s())



console.log(BB.address);
