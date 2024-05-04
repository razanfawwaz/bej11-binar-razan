class Vehicle {
  constructor(type, year) {
    this.type = type;
    this.year = year;
  }
}

class BusinessVehicle extends Vehicle {
  constructor(type, year, price) {
    super(type, year);
    this.price = price;
    this._capacity = 0;
  }

  set capacity(value) {
    this._capacity = value;
  }

  getDetails() {
    return `Lini Bisnis/Komersial Type: Toyota ${this.type}, Year: ${this.year}, Price: Rp. ${this.price}, Capacity: ${this._capacity} ton`;
  }
}

class PersonalVehicle extends Vehicle {
  constructor(type, year, price) {
    super(type, year);
    this.price = price;
    this._capacity = 0;
  }

  set capacity(value) {
    this._capacity = value;
  }

  getDetails() {
    return `Lini Personal Type: Toyota ${this.type}, Year: ${this.year}, Price: Rp. ${this.price}, Capacity: ${this._capacity} Pax`;
  }
}


let business1 = new BusinessVehicle('Hino', 2020, 1000000000);
business1.capacity = 10;
console.log(business1.getDetails());

let personal1 = new PersonalVehicle('Yaris', 2021, 500000000);
personal1.capacity = 5;
console.log(personal1.getDetails());
