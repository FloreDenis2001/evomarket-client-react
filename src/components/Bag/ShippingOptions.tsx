// ShippingOptions.tsx
import Radio from "@mui/material/Radio";
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
  const [selectedValue, setSelectedValue] = React.useState("c");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <td>
        <fieldset>
          <div className="bag__shoppingOptions">
            <div className="bag__shoppingOptions__item">
              <label>Flat rate : </label>
              <span> $10.00 </span>
              <Radio
                {...controlProps("c")}
                color="success"
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
              <Radio
                {...controlProps("c")}
                color="success"
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
