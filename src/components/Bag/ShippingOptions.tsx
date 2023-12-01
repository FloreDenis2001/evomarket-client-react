// ShippingOptions.tsx
import React from "react";

interface ShippingOptionsProps {
  selectedOption: string;
  handleFlat: () => void;
  onShippingOptionChange: (option: string) => void;
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({
  selectedOption,
  handleFlat,
  onShippingOptionChange,
}) => {
  return (
    <>
      <td>
        <fieldset>
          <div className="bag__shoppingOptions">
            <div className="bag__shoppingOptions__item">
              <label>Flat rate : </label>
              <span> $10.00 </span>
              <input
                type="radio"
                id="flat-rate"
                name="shipping-option"
                value="Flat rate"
                checked={selectedOption === "Flat rate"}
                onChange={() => {
                  onShippingOptionChange("Flat rate");
                  handleFlat();
                }}
              />
            </div>

            <div className="bag__shoppingOptions__item">
              <label>Free shipping : </label>
              <span> $0.00 </span>
              <input
                type="radio"
                id="free-shipping"
                name="shipping-option"
                value="Free shipping"
                checked={selectedOption === "Free shipping"}
                onChange={() => onShippingOptionChange("Free shipping")}
              />
            </div>
          </div>
        </fieldset>
      </td>
    </>
  );
};

export default ShippingOptions;
