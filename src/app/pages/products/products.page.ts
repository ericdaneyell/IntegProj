import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService} from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  
})
export class ProductsPage implements OnInit {
  cart = [];
  products = [];
  cartItemCount!: BehaviorSubject<number>;

 

  constructor(private cartService: CartService, private modalCtrl: ModalController, private router:Router) { }
  

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.cartService.addProduct(product);
   
  }

  async openCart(){
    
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
  
    modal.present();
  }
 
  goToHome(){
    this.router.navigate(['/home'])
  }
  }

  

