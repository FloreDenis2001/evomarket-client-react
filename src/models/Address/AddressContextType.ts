import Address from "./Address";

type AddressContextType = {
    billingAddress: Address;
    shippingAddress: Address;
    setBillingCookies: (billingAddress:Address) => void;
    setShippingCookies: (shippingAddress:Address) => void;
};

export default AddressContextType;