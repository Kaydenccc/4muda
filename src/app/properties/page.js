"use client"
import { Sidebar } from '../components/Sidebar';
import IconProductDes from '../components/IconProductDes';
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';

const page = () => {
  return (
    <section className="px-4 md:px-[2.125rem] flex-1 flex flex-col md:flex-row pb-8">
      <Sidebar />

      <Typography variant="h4" className="block md:hidden font-bold">
        Products
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 w-full pt-8 font-['Squada_One'] text-white">
        <Link href={'/details'} className="bg-[#151D28] w-full">
          <div className="h-[12.184rem]">
            <img src="propertiImage1.jpg" alt="properti 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex h-[calc(100%-12.184rem)] p-4 gap-2 justify-between items-center">
            <div className="flex flex-col h-full w-full justify-between ">
              <p className="text-xs font-sans">28 Desember 2023</p>
              <p>Lorem ipsum dolor sit amet Consectetur adipiscing</p>
              <p>
                <span className="mr-2">IDR</span>1.000.000.000.000
              </p>
            </div>
            <div className="w-32 h-full flex flex-col gap-2">
              <IconProductDes img={'panjang.svg'} meter={'100'} />
              <IconProductDes img={'luas.svg'} meter={'80'} />
              <IconProductDes img={'lantai.svg'} lantai={'1'} />
            </div>
          </div>
        </Link>
        <Link href={'/details'} className="bg-[#151D28] w-full">
          <div className="h-[12.184rem]">
            <img src="propertiImage1.jpg" alt="properti 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex h-[calc(100%-12.184rem)] p-4 gap-2 justify-between items-center">
            <div className="flex flex-col h-full w-full justify-between ">
              <p className="text-xs font-sans">28 Desember 2023</p>
              <p>Lorem ipsum dolor sit amet Consectetur adipiscing</p>
              <p>
                <span className="mr-2">IDR</span>1.000.000.000.000
              </p>
            </div>
            <div className="w-32 h-full flex flex-col gap-2">
              <IconProductDes img={'panjang.svg'} meter={'100'} />
              <IconProductDes img={'luas.svg'} meter={'80'} />
              <IconProductDes img={'lantai.svg'} lantai={'1'} />
            </div>
          </div>
        </Link>
        <Link href={'/details'} className="bg-[#151D28] w-full">
          <div className="h-[12.184rem]">
            <img src="propertiImage1.jpg" alt="properti 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex h-[calc(100%-12.184rem)] p-4 gap-2 justify-between items-center">
            <div className="flex flex-col h-full w-full justify-between ">
              <p className="text-xs font-sans">28 Desember 2023</p>
              <p>Lorem ipsum dolor sit amet Consectetur adipiscing</p>
              <p>
                <span className="mr-2">IDR</span>1.000.000.000.000
              </p>
            </div>
            <div className="w-32 h-full flex flex-col gap-2">
              <IconProductDes img={'panjang.svg'} meter={'100'} />
              <IconProductDes img={'luas.svg'} meter={'80'} />
              <IconProductDes img={'lantai.svg'} lantai={'1'} />
            </div>
          </div>
        </Link>
        <Link href={'/details'} className="bg-[#151D28] w-full">
          <div className="h-[12.184rem]">
            <img src="propertiImage1.jpg" alt="properti 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex h-[calc(100%-12.184rem)] p-4 gap-2 justify-between items-center">
            <div className="flex flex-col h-full w-full justify-between ">
              <p className="text-xs font-sans">28 Desember 2023</p>
              <p>Lorem ipsum dolor sit amet Consectetur adipiscing</p>
              <p>
                <span className="mr-2">IDR</span>1.000.000.000.000
              </p>
            </div>
            <div className="w-32 h-full flex flex-col gap-2">
              <IconProductDes img={'panjang.svg'} meter={'100'} />
              <IconProductDes img={'luas.svg'} meter={'80'} />
              <IconProductDes img={'lantai.svg'} lantai={'1'} />
            </div>
          </div>
        </Link>
        <Link href={'/details'} className="bg-[#151D28] w-full">
          <div className="h-[12.184rem]">
            <img src="propertiImage1.jpg" alt="properti 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex h-[calc(100%-12.184rem)] p-4 gap-2 justify-between items-center">
            <div className="flex flex-col h-full w-full justify-between ">
              <p className="text-xs font-sans">28 Desember 2023</p>
              <p>Lorem ipsum dolor sit amet Consectetur adipiscing</p>
              <p>
                <span className="mr-2">IDR</span>1.000.000.000.000
              </p>
            </div>
            <div className="w-32 h-full flex flex-col gap-2">
              <IconProductDes img={'panjang.svg'} meter={'100'} />
              <IconProductDes img={'luas.svg'} meter={'80'} />
              <IconProductDes img={'lantai.svg'} lantai={'1'} />
            </div>
          </div>
        </Link>
        <Link href={'/details'} className="bg-[#151D28] w-full">
          <div className="h-[12.184rem]">
            <img src="propertiImage1.jpg" alt="properti 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex h-[calc(100%-12.184rem)] p-4 gap-2 justify-between items-center">
            <div className="flex flex-col h-full w-full justify-between ">
              <p className="text-xs font-sans">28 Desember 2023</p>
              <p>Lorem ipsum dolor sit amet Consectetur adipiscing</p>
              <p>
                <span className="mr-2">IDR</span>1.000.000.000.000
              </p>
            </div>
            <div className="w-32 h-full flex flex-col gap-2">
              <IconProductDes img={'panjang.svg'} meter={'100'} />
              <IconProductDes img={'luas.svg'} meter={'80'} />
              <IconProductDes img={'lantai.svg'} lantai={'1'} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
