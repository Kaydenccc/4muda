"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import Map from "./Map";
import Link from "next/link";
import Image from "next/image";

export function BlogCard({ src, alt }) {
  return (
    <Link href={"/details"}>
      <Card className="max-w-full md:max-w-[15.313rem] lg:max-w-[20.313rem] 2xl:min-w-[29.313rem] h-auto overflow-hidden shadow-none">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
            className="rounded-xl overflow-hidden !relative"
          >
            <Image
              src={src}
              alt={alt}
              layout="fill"
              className="object-cover !h-full !w-full !relative"
            />
          </div>
        </CardHeader>
        <CardBody className="p-2 md:p-6 flex items-center flex-col">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-xl md:text-2xl text-center font-['Squada_One']"
          >
            TOURISTIC AREA 3 BEDROOM VILLA FOR SALE LEASEHOLD IN BALI SEMINYAK
          </Typography>
          <Typography
            variant="lead"
            color="blue-gray"
            className="text-base md:text-xl my-4 font-semibold text-center flex gap-1 md:gap-4 justify-center items-center"
          >
            <Map /> SEMINYAK - OBEROI - AL121
          </Typography>

          <Chip value="IDR 500.000.000" className="w-fit" />
        </CardBody>
      </Card>
    </Link>
  );
}
