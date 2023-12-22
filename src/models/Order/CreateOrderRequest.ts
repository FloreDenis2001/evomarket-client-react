import Address from "../Address/Address";
import OrderDetails from "../OrderDetails/OrderDetails";
import ProductBag from "../Product/ProductBag";

export default interface CreateOrderRequest{
   products:ProductBag[];
   userId:number;
   shippingAddress:Address;
   orderAddress:Address;
}