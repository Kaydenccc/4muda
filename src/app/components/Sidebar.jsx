"use client";

import { Card, Button, Typography, Checkbox } from "@material-tailwind/react";
import SelectButtonFilter from "./SelectButtonFilter";
import "../checkbox.css";
import { useEffect, useState } from "react";
import Axios from "@/axios/axios";

export function Sidebar({ filterProperties, properties, setProperties }) {
  const [filter, setFilter] = useState({
    category: [],
    condition: [],
    priceSort: [],
  });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    filterProperties({
      ...filter,
    });
  }, [filter]);
  console.log(filter);

  // Fungsi untuk melakukan pencarian
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("mencari");
    try {
      const response = await Axios.get(`/search/property?cari=${searchTerm}`);
      console.log(response.data);
      setProperties(response.data?.data); // Sesuaikan dengan struktur respons di Laravel
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-[calc(100vh-10rem)] shadow-none w-full max-w-full md:max-w-[18rem] py-4 pr-0 md:pr-8 font-['Squada_One']">
      <form onSubmit={handleSearch} className="mb-2 pt-4 w-full">
        <div className="flex p-2 border-[3px] border-solid border-[#151D28] rounded-lg justify-center items-center">
          <input
            type="text"
            placeholder="Cari Properti"
            onChange={(e) => setSearchTerm(e?.target?.value)}
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
        <Button fullWidth className="mt-2" type="submit">
          {loading ? "Mencari..." : "Cari"}
        </Button>
      </form>
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
          name="category"
          value="Rumah"
          ripple={true}
          onChange={(e) => {
            console.log("VALUE = ", e.target.value);
            setFilter({
              ...filter,
              category: filter?.category.includes(e.target.value)
                ? filter?.category?.filter((el) => el !== e.target.value)
                : [...filter?.category, e.target?.value],
            });
          }}
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Apartemen"
          name="category"
          label="Apartemen"
          value="Apartemen"
          ripple={true}
          onChange={(e) =>
            setFilter({
              ...filter,
              category: filter?.category.includes(e.target.value)
                ? filter?.category?.filter((el) => el !== e.target.value)
                : [...filter?.category, e.target?.value],
            })
          }
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Tanah/Lahan"
          label="Tanah"
          name="category"
          value="Tanah"
          ripple={true}
          onChange={(e) =>
            setFilter({
              ...filter,
              category: filter?.category.includes(e.target.value)
                ? filter?.category?.filter((el) => el !== e.target.value)
                : [...filter?.category, e.target?.value],
            })
          }
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Ruko"
          label="Ruko"
          value="Ruko"
          name="category"
          ripple={true}
          onChange={(e) =>
            setFilter({
              ...filter,
              category: filter?.category.includes(e.target.value)
                ? filter?.category?.filter((el) => el !== e.target.value)
                : [...filter?.category, e.target?.value],
            })
          }
        />
      </div>
    </Card>
  );
}
