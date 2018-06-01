export function cashier() {
  // TODO: implement me
  return new Cart();
}

let accumulate = (accumulator, currentValue) => accumulator + currentValue;

class Cart {
  constructor() {
    this._cart = [];
  }
  add({name, qty = 1, price}) {
    this._cart.push({name, qty, price});
    return this;
  }
  get length() {
    return this._cart.map(item => item.qty).reduce(accumulate, 0);
  }
  get total() {
    return this._cart.map(item => item.qty * item.price).reduce(accumulate, 0);
  }
}
