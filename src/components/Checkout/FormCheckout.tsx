import React, { useState } from "react";

const FormCheckout: React.FC = () => {
  const [checkboxShip, setCheckboxShip] = useState<boolean>(false);

  const handleCheckbox = () => {
    setCheckboxShip(!checkboxShip);
  };

  return (
    <div className="checkout__billing">
      <div className="checkout__billing__titleBox">
        <h2>Billing Details</h2>
      </div>
      <div className="checkout__billing__fields">
        <div className="checkout__billing__fields__box">
          <div className="checkout__billing__fields__item">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" />
          </div>

          <div className="checkout__billing__fields__item">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" />
          </div>
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" placeholder="Company" />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" placeholder="Country" />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="street-address">Street Address</label>
          <input type="text" id="street-address" placeholder="Street Address" />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="town-city">Town / City</label>
          <input type="text" id="town-city" placeholder="City" />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="state">State / County</label>
          <input type="text" id="state" placeholder="City" />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="postcode">Postcode / ZIP</label>
          <input type="text" id="postcode" placeholder="Postcode" />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Phone" />
        </div>

        <div className="checkout__billing__fields__item">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="Email" />

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
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" placeholder="First Name" />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Last Name" />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" placeholder="Company Name" />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" placeholder="Country" />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="street-address">Street Address</label>
                <input
                  type="text"
                  id="street-address"
                  placeholder="Street Address"
                />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="town-city">Town / City</label>
                <input type="text" id="town-city" placeholder="City" />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="state">State / County</label>
                <input type="text" id="state" placeholder="Country" />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="postcode">Postcode / ZIP</label>
                <input type="text" id="postcode" placeholder="Postcode" />
              </div>

              <div className="checkout__billing__fields__item">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" placeholder="Email" />
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
          ></textarea>
        </div>
      </div>
    </div>

    


  );
};

export default FormCheckout;
