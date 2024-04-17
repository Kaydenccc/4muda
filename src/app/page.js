"use client";
import { Checkbox, Typography } from "@material-tailwind/react";
import Search from "./components/Search";
import { useState } from "react";
import { BlogCard } from "./components/Card";
import { CarouselCustomNavigation } from "./components/Crousel";
import Slider from "react-slick";

import ButtonNextArrow from "./components/ButtonNextArrow";
import ButtonPreviousArrow from "./components/ButtonPreviousArrow";
import SelectButton from "./components/SelectButton";
import "./checkbox.css";

export default function Home() {
  const [active, setActive] = useState(0);
  const settings = {
    customPaging: function (i) {
      return (
        <span
          className={`block h-[0.438rem] cursor-pointer rounded-2xl transition-all content-[''] ${
            active === i ? "w-6 bg-black" : "w-6 bg-gray-500"
          }`}
        />
      );
    },
    dots: true,
    className: "center",
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ButtonNextArrow className={"hover:bg-black/50"} />,
    prevArrow: <ButtonPreviousArrow className={"hover:bg-black/50"} />,
    beforeChange: (current, next) => setActive(next),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <section className="h-auto md:h-[35.625rem] w-full px-0 sm:px-24 pt-8 md:pt-10">
        <div className="flex bg-[#151D28] flex-col-reverse sm:flex-row items-end w-full h-full text-white rounded-none md:rounded-3xl">
          <div className="w-full md:w-[55%] h-full p-4 sm:p-20 flex flex-col justify-between">
            <Typography
              variant={"h1"}
              className="text-[2.5rem] sm:text-5xl md:text-6xl leading-[1.3] font-normal font-['Squada_One']"
            >
              Temukan Properti Impianmu Sekarang
            </Typography>
            <Typography
              variant={"paragraph"}
              className="my-3 w-full md:w-[30rem] leading-[2] sm:leading-[2.5] text-base sm:text-lg text-white/70"
            >
              Kami membuka jasa jual beli maupun rental properti dengan harga
              terjangkau.
            </Typography>
            <form className="w-full bg-white rounded-xl flex flex-col  p-2 gap-2 justify-center items-start ">
              <div className="flex flex-row justify-between w-full">
                <div className="bg-[#151D28] filter text-sm w-full rounded-md">
                  <Checkbox
                    className="!bg-white"
                    labelProps={{ className: "text-white pr-4" }}
                    id="ripple-on"
                    label="Rumah"
                    ripple={true}
                  />
                  <Checkbox
                    className="!bg-white"
                    labelProps={{ className: "text-white pr-4" }}
                    id="Apartemen"
                    label="Apartemen"
                    ripple={true}
                  />
                  <Checkbox
                    className="!bg-white"
                    labelProps={{ className: "text-white pr-4" }}
                    id="Tanah/Lahan"
                    label="Tanah/Lahan"
                    ripple={true}
                  />
                  <Checkbox
                    className="!bg-white"
                    labelProps={{ className: "text-white pr-4" }}
                    id="Ruko"
                    label="Ruko"
                    ripple={true}
                  />
                </div>
                <div className="w-fit flex justify-center gap-2 items-center bg-[#151D28] px-4 mx-4 rounded-lg">
                  <button className="!max-w-fit  h-[40px] text-white font-medium md:bg-transparent text-center">
                    CARI
                  </button>
                </div>
              </div>
              <div className="w-full  select-label text-white">
                <SelectButton />
              </div>
            </form>
          </div>
          <div className="w-full md:w-[45%] h-full p-0 md:pb-20 md:pt-14">
            <div className="w-full h-full rounded-none md:rounded-3xl overflow-hidden">
              <CarouselCustomNavigation />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24  w-full">
        <Typography
          variant="h1"
          color="black"
          className="text-[#151D28] font-['Squada_One'] text-center mb-10"
        >
          Properti Unggulan
        </Typography>
        <div className="w-full p-10">
          <Slider {...settings}>
            <BlogCard src={"/marshmallow(athena)/1.jpg"} alt={"rumah 1"} />
            <BlogCard src={"/freesia(aldera)/1f.jpg"} alt={"rumah 2"} />
            <BlogCard src={"/freesia(crystal)/2f.jpg"} alt={"rumah 3"} />
            <BlogCard src={"/citraland1/1g.jpg"} alt={"rumah 4"} />
            <BlogCard src={"/lavish/1l.png"} alt={"rumah 5"} />
          </Slider>
        </div>
      </section>
    </div>
  );
}
