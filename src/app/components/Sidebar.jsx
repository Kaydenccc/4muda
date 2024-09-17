"use client";

import { Card, Button, Typography, Checkbox } from "@material-tailwind/react";
import SelectButtonFilter from "./SelectButtonFilter";
import "../checkbox.css";
import { useEffect, useState } from "react";

export function Sidebar({ filterProperties, properties }) {
  const [filter, setFilter] = useState({
    category: [],
    condition: [],
    priceSort: [],
  });

  useEffect(() => {
    filterProperties({
      ...filter,
    });
  }, [filter]);
  console.log(filter);

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
          label="Tanah/Lahan"
          name="category"
          value="Tanah/Lahan"
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
          name="condition"
          value={1}
          ripple={true}
          onChange={(e) =>
            setFilter({
              ...filter,
              condition: filter?.condition.includes(e.target.value)
                ? filter?.condition?.filter((el) => el !== e.target.value)
                : [...filter?.condition, e.target?.value],
            })
          }
        />
        <Checkbox
          className="!bg-white"
          labelProps={{ className: "text-white" }}
          id="Bekas"
          label="Bekas"
          name="condition"
          value={0}
          ripple={true}
          onChange={(e) =>
            setFilter({
              ...filter,
              condition: filter?.condition.includes(e.target.value)
                ? filter?.condition?.filter((el) => el !== e.target.value)
                : [...filter?.condition, e.target?.value],
            })
          }
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
              onClick={() => setFilter({ ...filter, priceSort: ["termahal"] })}
              className="focus:border-none w-full py-[4px] p-2  focus:outline-none placeholder:text-center focus:text-start placeholder:text-[#151D28] text-[#151D28]  placeholder:tracking-wide font-['Squada_One'] placeholder:font-['Squada_One'] bg-transparent"
            >
              Harga Termahal
            </Button>
          </div>
          <div className="h-8 flex m-0 p-0  overflow-hidden w-full bg-[#D9D9D9] rounded justify-between items-center">
            <Button
              onClick={() => setFilter({ ...filter, priceSort: ["termurah"] })}
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
