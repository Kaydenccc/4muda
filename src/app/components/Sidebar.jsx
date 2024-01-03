'use client';

import { Card, Button, Typography, Checkbox } from '@material-tailwind/react';
import SelectButtonFilter from './SelectButtonFilter';
import '../checkbox.css';

export function Sidebar() {
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 !text-[#151D28]">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>
      <div>
        <Typography variant="h5" className="text-[#151D28] font-['Squada_One']">
          Urutkan
        </Typography>
        <SelectButtonFilter />
      </div>
      <Typography variant="h5" className="text-[#151D28] font-['Squada_One']">
        Filter
      </Typography>
      <div className="bg-[#151D28] rounded-t filter">
        <Typography variant="h6" className="text-white font-['Squada_One'] font-normal p-2">
          Katagori
        </Typography>
        <Checkbox className="!bg-white" labelProps={{ className: 'text-white' }} id="ripple-on" label="Rumah" ripple={true} />
        <Checkbox className="!bg-white" labelProps={{ className: 'text-white' }} id="ripple-off" label="Apartemen" ripple={true} />
        <Checkbox className="!bg-white" labelProps={{ className: 'text-white' }} id="ripple-off" label="Tanah/Lahan" ripple={true} />
        <Checkbox className="!bg-white" labelProps={{ className: 'text-white' }} id="ripple-off" label="Ruko" ripple={true} />
      </div>
      <div className="bg-[#151D28] my-[1px]  filter">
        <Typography variant="h6" className="text-white font-['Squada_One'] font-normal p-2">
          Kondisi
        </Typography>
        <Checkbox className="!bg-white" labelProps={{ className: 'text-white' }} id="ripple-on" label="Baru" ripple={true} />
        <Checkbox className="!bg-white" labelProps={{ className: 'text-white' }} id="ripple-off" label="Bekas" ripple={true} />
      </div>
      <div className="bg-[#151D28] rounded-b pb-2 filter">
        <Typography variant="h6" className="text-white font-['Squada_One'] font-normal p-2">
          Harga
        </Typography>
        <div className=" p-2">
          <div className="h-8 flex m-0 p-0 mb-4  overflow-hidden w-full bg-[#D9D9D9] rounded justify-between items-center">
            <div className="w-9 px-2 h-full bg-white flex justify-center items-center">Rp</div>
            <input
              type="text"
              placeholder="Harga Minimum"
              className="focus:border-none w-full py-[4px] p-2 focus:outline-none placeholder:text-center focus:text-start placeholder:text-[#151D28] text-[#151D28]  placeholder:tracking-wide font-['Squada_One'] placeholder:font-['Squada_One'] bg-transparent"
            />
          </div>
          <div className="h-8 flex m-0 p-0  overflow-hidden w-full bg-[#D9D9D9] rounded justify-between items-center">
            <div className="w-9 px-2 h-full bg-white flex justify-center items-center">Rp</div>
            <input
              type="text"
              placeholder="Harga Maximum"
              className="focus:border-none w-full py-[4px] p-2 focus:outline-none placeholder:text-center focus:text-start placeholder:text-[#151D28] text-[#151D28]  placeholder:tracking-wide font-['Squada_One'] placeholder:font-['Squada_One'] bg-transparent"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
