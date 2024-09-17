"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavList() {
  const pathname = usePathname();
  return (
    <ul className="my-2 text-[#151D28] text-[1.5rem] flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="font-['Squada_One'] p-1 font-medium"
      >
        <Link
          href="/"
          className={`flex items-center  py-1 px-4 rounded  hover:text-white transition-colors hover:bg-[#151D28] ${
            pathname === "/" && "bg-[#151D28]  text-white"
          }`}
        >
          Beranda
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="font-['Squada_One'] p-1 font-medium"
      >
        <Link
          href="/system/properties"
          className={`flex items-center  py-1 px-4 rounded  hover:text-white transition-colors hover:bg-[#151D28] ${
            pathname === "/properties" && "bg-[#151D28]  text-white"
          }`}
        >
          Properti
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="font-['Squada_One'] p-1 font-medium"
      >
        <Link
          href="/system/kontak"
          className={`flex items-center  py-1 px-4 rounded  hover:text-white transition-colors hover:bg-[#151D28] ${
            pathname === "/kontak" && "bg-[#151D28]  text-white"
          }`}
        >
          Kontak
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="font-['Squada_One'] p-1 font-medium"
      >
        <Link
          href="/system/tentang-kami"
          className={`flex items-center  py-1 px-4 rounded  hover:text-white transition-colors hover:bg-[#151D28] ${
            pathname === "/tentang-kami" && "bg-[#151D28]  text-white"
          }`}
        >
          Tentang Kami
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="font-['Squada_One'] p-1 font-medium"
      >
        <Link
          href="/admin"
          className={`flex items-center  py-1 px-4 rounded  text-[#151D28]  border-2 border-[#151D28]`}
        >
          Login
        </Link>
      </Typography>
    </ul>
  );
}

export function NavbarSimple({ className }) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className={
        "border-none shadow-none mx-auto max-w-screen-xl  px-4 sm:px-20 py-3 overflow-hidden" +
        className
      }
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="h-20  flex justify-center items-center">
          <Image
            src={"/Logo.png"}
            width={156}
            height={156}
            alt="logo 4 muda property"
            priority
            className="object-cover h-full w-full"
          />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
