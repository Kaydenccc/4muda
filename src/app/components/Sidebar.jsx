"use client";

import { Card, Button, Typography, Checkbox } from "@material-tailwind/react";
import SelectButtonFilter from "./SelectButtonFilter";
import "../checkbox.css";
import { useEffect, useState } from "react";
import { properties } from "@/json/data";

export function Sidebar({ setDataProperties, propertiesData }) {
  const [filter, setFilter] = useState([]);
  const [filterBekas, setFilterBekas] = useState([]);

  const cekFilter = (parms) => {
    if (filter.includes(parms)) {
      setFilter(filter.filter((element) => element !== parms));
    } else {
      setFilter([...filter, parms]);
    }
  };

  const cekFilterBekas = (parms) => {
    if (filterBekas.includes(parms)) {
      setFilterBekas(filterBekas.filter((element) => element !== parms));
    } else {
      setFilterBekas([...filterBekas, parms]);
    }
  };

  useEffect(() => {
    setDataProperties(
      properties?.filter((value) => filter.includes(value.type))
    );
  }, [filter]);

  function parseHarga(harga) {
    const hargaConvers = Number(harga?.split(",").join(""));
    return hargaConvers;
  }

  // lanjutan nanti untuk filter bekas dan baru
  const hargaTermahal = () => {
    const sortedProperties = properties.sort(
      (a, b) => parseHarga(b.harga) - parseHarga(a.harga)
    );
    setDataProperties([...sortedProperties]);
  };
  const hargaTermurah = () => {
    const sortedProperties = properties.sort(
      (a, b) => parseHarga(a.harga) - parseHarga(b.harga)
    );
    setDataProperties([...sortedProperties]);
  };
  console.log(propertiesData);
  return (
    <Card className="h-[calc(100vh-10rem)] shadow-none w-full max-w-full md:max-w-[18rem] py-4 pr-0 md:pr-8 font-['Squada_One']">
      <div className="mb-2 pt-4 w-full">
        <div className="flex p-2 border-[3px] border-solid border-[#151D28] rounded-lg justify-center items-center">
          <input
            type="text"
            placeholder="Cari Properti"
            className="flex-[1] placeholder:text-center focus:border-none focus:outline-none placeholder:text-[#151D28]/50 text-[#151D28] placeholder:text-lg text-lg placeholder:tracking-wide font-['Squada_One'] placeholder:font-['Squada_One'] bg-transparent"
          />
          <Button className="p-0 w-6 h-6" variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 !text-[#151D28]"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
      {/* <div>
        <Typography variant="h5" className="text-[#151D28] font-['Squada_One']">
          Kompleks
        </Typography>
        <SelectButtonFilter />
      </div> */}
      <Typography variant="h5" className="text-[#151D28] font-['Squada_One']">
        Filter
      </Typography>
      <div className="bg-[#151D28] rounded-t filter">
        <Typography
          variant="h6"
          className="text-white font-['Squada_One'] font-normal p-2"
        >
          Kategori
        </Typography>
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="ripple-on"
          label="Rumah"
          value="Rumah"
          ripple={true}
          onChange={(e) => cekFilter(e.target.value)}
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Apartemen"
          label="Apartemen"
          value="Apartemen"
          ripple={true}
          onChange={(e) => cekFilter(e.target.value)}
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Tanah/Lahan"
          label="Tanah/Lahan"
          value="Tanah/Lahan"
          ripple={true}
          onChange={(e) => cekFilter(e.target.value)}
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Ruko"
          label="Ruko"
          value="Ruko"
          ripple={true}
          onChange={(e) => cekFilter(e.target.value)}
        />
      </div>
      <div className="bg-[#151D28] my-[1px]  filter">
        <Typography
          variant="h6"
          className="text-white font-['Squada_One'] font-normal p-2"
        >
          Kondisi
        </Typography>
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="ripple-on"
          label="Baru"
          value="Baru"
          ripple={true}
          onChange={(e) => cekFilterBekas(e.target.value)}
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Bekas"
          label="Bekas"
          value="Bekas"
          ripple={true}
          onChange={(e) => cekFilterBekas(e.target.value)}
        />
      </div>
      <div className="bg-[#151D28] rounded-b pb-2 filter">
        <Typography
          variant="h6"
          className="text-white font-['Squada_One'] font-normal p-2"
        >
          Harga
        </Typography>
        <div className="p-2">
          <div className="h-8 flex m-0 p-0 mb-2 overflow-hidden w-full bg-[#D9D9D9] rounded justify-between items-center">
            <Button
              onClick={hargaTermahal}
              className="focus:border-none w-full py-[4px] p-2  focus:outline-none placeholder:text-center focus:text-start placeholder:text-[#151D28] text-[#151D28]  placeholder:tracking-wide font-['Squada_One'] placeholder:font-['Squada_One'] bg-transparent"
            >
              Harga Termahal
            </Button>
          </div>
          <div className="h-8 flex m-0 p-0  overflow-hidden w-full bg-[#D9D9D9] rounded justify-between items-center">
            <Button
              onClick={hargaTermurah}
              className="focus:border-none w-full py-[4px] p-2 focus:outline-none placeholder:text-center focus:text-start placeholder:text-[#151D28] text-[#151D28]  placeholder:tracking-wide font-['Squada_One'] placeholder:font-['Squada_One'] bg-transparent"
            >
              Harga Termurah
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
