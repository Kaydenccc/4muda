"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151D28] py-8 px-4 flex justify-center md:items-center w-full gap-4 md:gap-8 flex-col md:flex-row">
      <span className="flex items-center gap-4">
        <div style={{ width: "30px" }}>
          <Image
            src="/ig.svg"
            alt="instagram"
            height={20}
            width={20}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <Typography
          variant="lead"
          className="font-['Squada_One'] text-white bg-[#151D28]"
        >
          jqueenstarproperti
        </Typography>
      </span>
      <span className="flex items-center gap-4">
        <div style={{ width: "30px" }}>
          <Image
            src="/email.svg"
            alt="email"
            height={20}
            width={20}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <Typography
          variant="lead"
          className="font-['Squada_One'] text-white bg-[#151D28]"
        >
          jqueenstarproperti@gmail.com
        </Typography>
      </span>
    </footer>
  );
};

export default Footer;
