"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/legacy/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center flex-col items-center px-4 md:px-0 pb-16">
      <Typography variant="h1" className="font-['Squada_One'] my-8  ">
        Pengen nego atau nanyain sesuatu?
      </Typography>
      <Card className="bg-[#151D28] w-full md:w-[27.5rem] flex justify-center items-center shadow-none p-4 py-8">
        <div
          style={{ width: "100%" }}
          className="!w-48 md:!w-full overflow-hidden flex justify-center"
        >
          <Image
            src="/kontakimage.jpg"
            alt="Image contact"
            height={290}
            width={290}
            style={{ width: "auto", height: "auto" }}
            className="rounded-full"
          />
        </div>
        <CardBody>
          <Typography variant="lead" className="font-['Squada_One'] text-white">
            Kamu bisa langsung hubungin kontak kami di bawah ini
          </Typography>
          <div>
            <span className="flex gap-4 items-center my-4">
              <div style={{ width: "30px" }}>
                <Image
                  src="/whatsapp.svg"
                  alt="Icon whatsapp"
                  height={30}
                  width={30}
                  style={{ width: "auto", height: "auto" }}
                  className="rounded-full"
                />
              </div>
              <Typography
                variant="paragraph"
                className="font-['Squada_One'] text-white"
              >
                0813 1216 4109
              </Typography>
            </span>
            <span className="flex gap-4 items-center ">
              <div style={{ width: "30px" }}>
                <Image
                  src="/amplop.svg"
                  alt="Icon amplop"
                  height={30}
                  width={30}
                  style={{ width: "auto", height: "auto" }}
                  className="rounded-full"
                />
              </div>
              <Typography
                variant="paragraph"
                className="font-['Squada_One'] text-white"
              >
                jqueenstarproperti@gmail.com
              </Typography>
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
