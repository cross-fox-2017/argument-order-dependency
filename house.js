"use strict"

class House {

  constructor(components) {
    this.address      = components['address']
    this.square_feet  = components['square_feet']
    this.num_bedrooms = components['num_bedrooms'] || 3
    this.num_baths    = components['num_baths'] || 2
    this.cost         = components['cost'] || 320000
    this.down_payment = components['down_payment'] || 0.20
    this.sold         = components['sold'] || false
    this.short_sale   = components['short_sale']
    this.has_tenants  = components['has_tenants'] || false
  }

  obscure_address() {
    // mengganti sebagian karakter di this.address, dengan tanda *
    this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    this.cost * this.down_payment
  }

  to_s() {
    return `${obscure_address} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} bath. ${cost}`
  }

  cetak() {
    return `alamat rumah: ${this.address}`
  }
}

// membuat object untuk digunakan sebagai parameter nanti
var data_rumah = {
  address: "di dalam bumi",
  square_feet: 200,
  num_bedrooms: "5 kamar tidur",
  num_baths: "2 kamar mandi",
  cost: 1500000,
  down_payment: 500000,
  sold: true,
  has_tenants: true
}
// buat class di dalam variabel paramount, dengan parameter object
var paramount = new House(data_rumah);

// kita membuat sebuah object yang sudah berisi beberapa property.
// Object tersebut akan dimasukkan ke dalam class -> constructor
// jadi kita hanya masukkan 1 parameter, yaitu nama object data_rumah
// nanti di dalam class, kita bisa pakai nama property dari object data_rumah tersebut, untuk digunakan di dalam method
