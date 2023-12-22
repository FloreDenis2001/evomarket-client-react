import CreateOrderRequest from "../models/Order/CreateOrderRequest";
import ApiServer from "../util/ApiServer";

class ServiceOrder extends ApiServer {
    createOrder = async (createOrderRequest:CreateOrderRequest): Promise<CreateOrderRequest> => {
        const data = await this.api<CreateOrderRequest, CreateOrderRequest>(
          `/order/add`,
          "POST",
          createOrderRequest,
          ""
        );
        if (data.status === 201) {
          const order = await data.json();
          console.log(order);
          return order;
        } else {
          return Promise.reject([]);
        }
      };

}

export default ServiceOrder;