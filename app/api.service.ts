import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAllCategory(){
        //https://a2zithub.org/dairy/abi/product_cat_details    
    return this.http.get("https://a2zithub.org/dairy/abi/product_cat_details")
  }
  createAccount(data:any)
  {     
        //https://a2zithub.org/dairy/abi/user_register
    return this.http.post("https://a2zithub.org/dairy/abi/user_register",data)
  }
  loginAccount(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/user_login",data)
  }
  getSlider()
  {
    return this.http.get("https://a2zithub.org/dairy/abi/slider_det")

  }
  getAllProducts()
  {
    return this.http.get("https://a2zithub.org/dairy/abi/product_det");
  }
  getProductByCat(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/products_by_cat",data);
  }
  getProductDetailsById(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/product_by_id",data);
  }
  addProductInCart(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/addtocart",data);

  }
  getCartData(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/cart_list",data);
  }
  dec_cart_qty(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/dec_cart_qty",data);

  }
  inc_cart_qty(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/inc_cart_qty",data);

  }
  del_cart(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/remove_cart_qty",data);

  }
  place_order(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/place_order",data);

  }
  getOrderInfo(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/order_det",data);

  }
  order_list(data:any)
  {
    return this.http.post("https://a2zithub.org/dairy/abi/order_list",data);
    
  }
}

