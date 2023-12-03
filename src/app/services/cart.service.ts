import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id:number;
  name:string;
  price:number;
  amount:number;
  type: string;
  rating: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    {id: 0, name: 'Strawberry', price:5.50, amount: 1, type: 'cone', rating: '★★★★★'},
    {id: 1, name: 'Chocolate', price:4.80, amount: 1, type: 'cone', rating: '★★★★★'},
    {id: 2, name: 'Cheese', price:4.00, amount: 1, type: 'cone', rating: '★★★★☆'},
    {id: 3, name: 'Matcha', price:4.00, amount: 1, type: 'cone', rating: '★★★★☆'},
    {id: 4, name: 'Rocky Road', price:3.00, amount: 1, type: 'cup', rating: '★★★★☆'},
    {id: 5, name: 'Coffee', price:3.00, amount: 1, type: 'cup', rating: '★★★☆☆'},
    {id: 6, name: 'Pistachio', price:2.50, amount: 1, type: 'cup', rating: '★★★★☆'},
    {id: 7, name: 'Mango', price:3.00, amount: 1, type: 'candy', rating: '★★★★☆'},
    {id: 8, name: 'Watermelon', price:3.50, amount: 1, type: 'candy', rating: '★★★★★'},
    {id: 9, name: 'Cherry', price:3.00, amount: 1, type: 'candy', rating: '★★★★☆'},
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0){
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value -1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
