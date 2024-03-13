import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([1, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <div className="flex gap-4">
        <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
          <input
            type="number"
            className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            placeholder={value[0]}
          />
        </div>
        <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
          <input
            type="number"
            className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            placeholder={value[1]}
          />
        </div>
      </div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max="1000"
      />
    </Box>
  );
}
