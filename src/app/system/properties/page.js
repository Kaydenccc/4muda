"use client";

import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Sidebar } from "@/app/components/Sidebar";
import IconProductDes from "@/app/components/IconProductDes";
import Axios from "@/axios/axios";
import useFilterProperties from "@/hook/useFilterProperties";

const PropertiesPage = ({ searchParams }) => {
  console.log(searchParams);
  const { properties, filterProperties, loading, error } =
    useFilterProperties();

  useEffect(() => {
    if (searchParams?.data) {
      const parsedArray = JSON.parse(decodeURIComponent(searchParams?.data));
      filterProperties({
        category: parsedArray,
        // minPrice: null,
        // maxPrice: null,
      });
    } else {
      filterProperties({
        category: null,
        condition: null,
        priceSort: null,
        // minPrice: null,
        // maxPrice: null,
      });
    }
  }, []);

  return (
    <section className="px-4 md:px-[2.125rem] flex-1 flex flex-col md:flex-row pb-8">
      <Sidebar filterProperties={filterProperties} properties={properties} />
      <Typography variant="h4" className="block md:hidden font-bold">
        Products
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 w-full pt-8 font-['Squada_One'] text-white">
        {properties?.map((e) => (
          <Link
            key={e.id}
            href={"/system/details/" + e.id}
            className="bg-[#151D28] w-full"
          >
            <div className="h-[12.184rem]">
              <img
                src={e.thumbnail}
                alt="properti 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex h-[calc(100%-12.184rem)] p-4 gap-2 justify-between items-center">
              <div className="flex flex-col h-full w-full justify-between ">
                <Typography variant="h4" className="font-bold">
                  {e.nama}
                </Typography>
                <p className="text-xs font-sans">{e.created_at}</p>
                <p>{e.deskripsi}</p>
                <p>
                  <span className="mr-2">IDR</span>
                  {e.harga}
                </p>
              </div>
              <div className="w-32 h-full flex flex-col gap-2">
                <IconProductDes img={"../panjang.svg"} meter={e.luas_tanah} />
                <IconProductDes img={"../luas.svg"} meter={e.luas_bangunan} />
                <IconProductDes img={"../lantai.svg"} lantai={e.lantai} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PropertiesPage;
