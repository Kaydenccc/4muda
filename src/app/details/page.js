'use client';
import { Button, Card, Chip, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CardProducDetail from '../components/CardProducDetail';
import Map from '../components/Map';

const page = () => {
  return (
    <section className="p-4 md:px-[6.5rem] font-['Squada_One']">
      <div className="mb-2 flex justify-between items-center">
        <Button variant="text" className="flex gap-4 items-center py-2 px-4 sm:py-3 sm:px-6">
          <div style={{ width: '12px' }} className='sm:!w-[12px] !w-[8px]'>
            <Image src="iconKembali.svg" alt="chevron" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
          </div>
          <Link href="/properties" className="font-['Squada_One'] capitalize text-base">
            Kembali Ke Properti
          </Link>
        </Button>
        <span className="flex items-center gap-2">
          <div style={{ width: '12px' }}>
            <Image src="official.svg" alt="official" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
          </div>
          <Typography variant="lead" className="font-['Squada_One'] sm:text-xl text-sm">
            Bangunan bersertifikat HGB
          </Typography>
        </span>
      </div>
      <div className="w-full px-[1.5]">
        <div className="flex flex-col sm:flex-row sm:h-[30.438rem] md:h-[35.438rem] gap-4 md:gap-8 ">
          <div className="flex-1 h-full">
            <Card className="h-full">
              <div style={{ width: 'calc(100%-30.438rem)', height: '100%' }} className="rounded-xl overflow-hidden">
                <Image src={'/propertiImage1.jpg'} layout="fill" alt="thumbnail" className="object-cover !w-full !relative" />
              </div>
            </Card>
          </div>
          <div className="sm:w-[10.438rem] md:w-[18.438rem] overflow-x-auto sm:overflow-y-auto no-scrollbar h-full flex flex-row sm:flex-col gap-4 md:gap-8 pb-2 sm:pr-2">
            <Card className="shadow-md">
              <CardProducDetail src={'/propertiImage1.jpg'} alt={'option 1'} />
            </Card>
            <Card className="shadow-md">
              <CardProducDetail src={'/propertiImage1.jpg'} alt={'option 3'} />
            </Card>
            <Card className="shadow-md">
              <CardProducDetail src={'/propertiImage1.jpg'} alt={'option 2'} />
            </Card>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="flex sm:gap-0 gap-4 justify-between items-center">
          <Typography variant="h2" className="font-['Squada_One'] text-xl md:text-4xl sm:text-3xl">
            TOURISTIC AREA 3 BEDROOM VILLA
          </Typography>
          <Chip value="IDR 5.000.000.000.000" size="lg" className="w-fit text-base sm:text-xl md:text-3xl font-['Squada_One'] font-normal" />
        </div>
        <span className="flex items-center my-4">
          <Map />
          <Typography variant="h4" className="text-roboto ml-2 text-base md:text-2xl sm:text-xl">
            SEMINYAK - OBEROI - AL121
          </Typography>
        </span>
        <div className="text-roboto flex md:flex-row flex-col gap-4 md:gap-8">
          <div className="bg-[#151D28] rounded-lg p-4">
            <Typography variant="lead" className="text-roboto text-base md:text-xl ml-2 mb-4 text-white bg-[#151D28] font-medium">
              Spesifikasi bangunan:
            </Typography>
            <div className="ml-4 flex sm:flex-row flex-col-reverse justify-between gap-4 sm:gap-0 md:justify-start md:gap-32">
              <div className="flex flex-col gap-4">
                <Typography variant="lead" className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]">
                  2 Kamar mandi
                </Typography>
                <Typography variant="lead" className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]">
                  4 Kamar tidur
                </Typography>
                <Typography variant="lead" className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]">
                  1 Dapur kapasitas menengah
                </Typography>
                <Typography variant="lead" className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]">
                  1 Ruang makan
                </Typography>
                <Typography variant="lead" className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]">
                  1 Balkon
                </Typography>
              </div>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="listrik.svg" alt="listrik" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    Listrik 1000 Watt
                  </Typography>
                </span>
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="panjang.svg" alt="panjang" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    Luas tanah 100m<sup>2</sup>
                  </Typography>
                </span>
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="luas.svg" alt="luas" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    Luas bangunan 80m<sup>2</sup>
                  </Typography>
                </span>
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="lantai.svg" alt="lantai" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    Bangunan memiliki 2 Lantai
                  </Typography>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#151D28] rounded-lg p-4 flex-1">
            <Typography variant="lead" className="text-roboto text-base md:text-xl ml-2 mb-4 text-white bg-[#151D28] font-medium">
              Detail
            </Typography>
            <div className="ml-4 flex gap-32">
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="garasi.svg" alt="garasi" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    Garasi ukuran sedang
                  </Typography>
                </span>
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="kebun.svg" alt="kebun" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    Kebun
                  </Typography>
                </span>
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="kolam.svg" alt="kolam" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    Kolam renang ukuran sedang
                  </Typography>
                </span>
                <span className="flex items-center gap-4">
                  <div style={{ width: '30px' }}>
                    <Image src="gudang.svg" alt="gedung" height={20} width={20} style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <Typography variant="lead" className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]">
                    1 Gudang ukuran kecil
                  </Typography>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
