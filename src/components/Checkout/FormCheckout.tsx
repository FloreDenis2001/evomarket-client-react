import React, { useContext, useEffect, useState } from "react";
import Address from "../../models/Address/Address";
import { BillingDetailsContext } from "../../context/BillingDetailsProvider";
import AddressContextType from "../../models/Address/AddressContextType";
import { set } from "react-hook-form";
import { faL } from "@fortawesome/free-solid-svg-icons";

const FormCheckout: React.FC = () => {
  const [checkboxShip, setCheckboxShip] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [streetNumber, setStreetNumber] = useState<string>("");
  const [townCity, setTownCity] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [orderNotes, setOrderNotes] = useState<string>("");
  const [countryShip, setCountryShip] = useState<string>("");
  const [streetAddressShip, setStreetAddressShip] = useState<string>("");
  const [streetNumberShip, setStreetNumberShip] = useState<string>("");
  const [townCityShip, setTownCityShip] = useState<string>("");
  const [postcodeShip, setPostcodeShip] = useState<string>("");

  const [billingFields, setBillingFields] = useState<Address>({
    country: "",
    street: "",
    streetNumber: "",
    city: "",
    postalCode: "",
  });

  const [shippingFields, setShippingFields] = useState<Address>({
    country: "",
    street: "",
    streetNumber: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    setBillingFields({
      country,
      street: streetAddress,
      streetNumber,
      city: townCity,
      postalCode: postcode,
    });
  }, [country, streetAddress, streetNumber, townCity, postcode]);

  useEffect(() => {
    setShippingFields({
      country: countryShip,
      street: streetAddressShip,
      streetNumber: streetNumberShip,
      city: townCityShip,
      postalCode: postcodeShip,
    });
  }, [
    countryShip,
    streetAddressShip,
    streetNumberShip,
    townCityShip,
    postcodeShip,
  ]);

  let {
    billingAddress,
    shippingAddress,
    setShippingCookies,
    setBillingCookies,
  } = useContext(BillingDetailsContext) as AddressContextType;

  useEffect(() => {
    setBillingCookies(billingFields);
    if (checkboxShip === false) {
      setShippingCookies(billingFields);
    }
  }, [billingFields]);

  useEffect(() => {
    setShippingCookies(shippingFields);
  }, [shippingFields]);

  const handleCheckbox = () => {
    setCheckboxShip(!checkboxShip);
  };

  return (
    <div className="checkout__billing">
      <div className="checkout__billing__titleBox">
        <h2>Billing Details</h2>
      </div>
      <div className="checkout__billing__fields">
        <div className="checkout__billing__fields__item">
          <label htmlFor="country">
            Country <abbr className="required">*</abbr>{" "}
          </label>
          <input
            type="text"
            id="country"
            placeholder="Country"
            value={country}
            onChange={e => {
              setCountry(e.target.value);
            }}
          />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="street-address">
            Street Address <abbr className="required">*</abbr>{" "}
          </label>
          <input
            type="text"
            id="street-address"
            placeholder="Street Address"
            value={streetAddress}
            onChange={e => {
              setStreetAddress(e.target.value);
            }}
          />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="street-number">
            Number <abbr className="required">*</abbr>{" "}
          </label>
          <input
            type="text"
            id="street-number"
            placeholder="Street Number"
            value={streetNumber}
            onChange={e => {
              setStreetNumber(e.target.value);
            }}
          />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="town-city">
            Town / City <abbr className="required">*</abbr>{" "}
          </label>
          <input
            type="text"
            id="town-city"
            placeholder="City"
            value={townCity}
            onChange={e => {
              setTownCity(e.target.value);
            }}
          />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="postcode">
            Postcode / ZIP <abbr className="required">*</abbr>{" "}
          </label>
          <input
            type="text"
            id="postcode"
            placeholder="Postcode"
            value={postcode}
            onChange={e => {
              setPostcode(e.target.value);
            }}
          />
        </div>

        <div className="checkout__billing__fields__item">
          <div className="checkout__billing__fields__box">
            <input
              type="checkbox"
              id="ship-different-address"
              onChange={() => handleCheckbox()}
            />
            <label htmlFor="ship-different-address">
              Ship to a different address?
            </label>
          </div>

          {checkboxShip && (
            <div className="checkout__billing__fields__shipDifferent">
              <div className="checkout__billing__fields__item">
                <label htmlFor="country">
                  Country <abbr className="required">*</abbr>{" "}
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  value={countryShip}
                  onChange={e => {
                    setCountryShip(e.target.value);
                  }}
                />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="street-address">
                  Street Address <abbr className="required">*</abbr>{" "}
                </label>
                <input
                  type="text"
                  id="street-address"
                  placeholder="Street Address"
                  value={streetAddressShip}
                  onChange={e => {
                    setStreetAddressShip(e.target.value);
                  }}
                />
              </div>
              <div className="checkout__billing__fields__item">
                <label htmlFor="street-number">
                  Number <abbr className="required">*</abbr>{" "}
                </label>
                <input
                  type="text"
                  id="street-number"
                  placeholder="Number"
                  value={streetNumberShip}
                  onChange={e => {
                    setStreetNumberShip(e.target.value);
                  }}
                />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="town-city">
                  Town / City <abbr className="required">*</abbr>{" "}
                </label>
                <input
                  type="text"
                  id="town-city"
                  placeholder="City"
                  value={townCityShip}
                  onChange={e => {
                    setTownCityShip(e.target.value);
                  }}
                />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="postcode">
                  Postcode / ZIP <abbr className="required">*</abbr>{" "}
                </label>
                <input
                  type="text"
                  id="postcode"
                  placeholder="Postcode"
                  value={postcodeShip}
                  onChange={e => {
                    setPostcodeShip(e.target.value);
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="order-notes">Order Notes</label>
          <textarea
            name=""
            placeholder="Notes about your order , e.g. special notes for delivery"
            id="order-notes"
            cols={30}
            rows={10}
            value={orderNotes}
            onChange={e => {
              setOrderNotes(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
