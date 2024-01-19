import React, { useState } from "react";
import Slider from "react-slick";
import "../slides.css";
import ButtonInvisiable from "./ButtonInvisiable";
import Image from "next/image";

export function CarouselCustomNavigation() {
  const [active, setActive] = useState(0);

  const settings = {
    customPaging: function (i) {
      return (
        <span
          className={`block h-[0.438rem] translate-y-[-20px] cursor-pointer rounded-2xl transition-all content-[''] ${
            active === i ? "w-6 bg-white" : "w-6 bg-gray-500"
          }`}
        />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    nextArrow: <ButtonInvisiable />,
    prevArrow: <ButtonInvisiable />,
    beforeChange: (current, next) => setActive(next),
  };
  return (
    <Slider {...settings}>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        className="rounded-none ms:rounded-xl overflow-hidden !relative"
      >
        <Image
          src={"/lavish/1l.png"}
          layout="fill"
          alt="thumbnail"
          className="object-cover !h-full !w-full !relative"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        className="rounded-none ms:rounded-xl overflow-hidden !relative"
      >
        <Image
          src={"/freesia(crystal)/1f.jpg"}
          layout="fill"
          alt="thumbnail"
          className="object-cover !h-full !w-full !relative"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        className="rounded-none ms:rounded-xl overflow-hidden !relative"
      >
        <Image
          src={"/citraland1/1g.jpg"}
          layout="fill"
          alt="thumbnail"
          className="object-cover !h-full !w-full !relative"
        />
      </div>
    </Slider>
  );
}
