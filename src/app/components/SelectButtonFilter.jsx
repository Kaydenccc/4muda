"use client";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";
import "../select.css";
const options = [
  { value: "", label: "Tipe Group" },
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
];
const SelectButtonFilter = () => {
  const [animal, setAnimal] = useState(null);

  const handleChange = (value) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <div>
      <Select
        classNames={{
          menuButton: ({ isDisabled }) =>
            `!bg-[#151d28] flex text-white border border-[#151d28] rounded shadow-sm transition-all duration-300 focus:outline-none ${
              isDisabled
                ? "bg-[#151d28]"
                : "bg-white hover:border-[#151d28] focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            }`,
          listItem: ({ isSelected }) =>
            `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded text-[#151d28] hover:bg-[#151d28]/10 hover:text-[#151d28] ${
              isSelected && "bg-[#151d28] !text-white"
            }`,
        }}
        placeholder="Tipe Group"
        value={animal}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default SelectButtonFilter;
