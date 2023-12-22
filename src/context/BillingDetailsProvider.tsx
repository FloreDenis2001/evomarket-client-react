import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AddressContextType from "../models/Address/AddressContextType";
import Address from "../models/Address/Address";


type BillingDetailsContextProps = {
  children?: React.ReactNode;
};

export const BillingDetailsContext = React.createContext<AddressContextType | null>(null);

const BillingDetailsProvider: React.FC<BillingDetailsContextProps> = ({ children }) => {
    const [billingAddress, setBillingFields] = useState<Address>({
        country: "",
        street: "",
        streetNumber: "",
        city: "",
        postalCode: "",
      } as Address);
    
      const [shippingAddress, setShippingFields] = useState<Address>({
        country: "",
        street: "",
        streetNumber: "",
        city: "",
        postalCode: "",
      }as Address);

  useEffect(() => {
    const billingCookies = Cookies.get("billingAddress");
    if (billingCookies) {
      setBillingFields(JSON.parse(billingCookies) as Address);
    }

    const shippingCookies = Cookies.get("shippingAddress");
    if (shippingCookies) {
      setShippingFields(JSON.parse(shippingCookies) as Address);
    }
    

  }, []);



  function setBillingCookies(billingAddress: Address) {
    Cookies.set("billingAddress", JSON.stringify(billingAddress), { expires: 1 });
    setBillingFields(billingAddress);
  }

  function setShippingCookies(shippingAddress: Address) {
    Cookies.set("shippingAddress", JSON.stringify(shippingAddress), { expires: 1 });
    setShippingFields(shippingAddress);
  }


  return (
    <BillingDetailsContext.Provider value={{ billingAddress,shippingAddress,setBillingCookies,setShippingCookies }}>
      {children}
    </BillingDetailsContext.Provider>
  );
};

export default BillingDetailsProvider;
