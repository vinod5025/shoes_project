import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { OpenCategoryComponent } from './open-category/open-category.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderBillComponent } from './order-bill/order-bill.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"create_account",component:CreateAccountComponent},
    {path:"open_category/:cat_id/:cat_name",component:OpenCategoryComponent},
    {path:"products_details/:product_id",component:ProductsDetailsComponent},
    {path:"cart",component:CartComponent},
    {path:"place_order",component:PlaceOrderComponent},
    {path:"order_bill/:order_id",component:OrderBillComponent},
    {path:"my_orders",component:MyOrdersComponent},
    {path:"profile",component:ProfileComponent}
];