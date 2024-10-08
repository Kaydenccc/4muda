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

export function BlogCard({ properti }) {
  return (
    <Link href={"/system/details/" + properti?.id} className="inline-block">
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
              src={properti?.thumbnail}
              alt={properti?.nama}
              layout="fill"
              style={{
                aspectRatio: 4 / 3,
              }}
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
            {properti?.nama}
          </Typography>
          <Typography
            variant="lead"
            color="blue-gray"
            className="text-base md:text-xl my-4 font-semibold text-center flex gap-1 md:gap-4 justify-center items-center"
          >
            <Map /> {properti?.alamat}
          </Typography>

          <Chip value={`IDR ${properti?.harga}`} className="w-fit" />
        </CardBody>
      </Card>
    </Link>
  );
}
