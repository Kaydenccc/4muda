'use client';
import { Typography } from '@material-tailwind/react';
import { InputDefault } from './components/Input';
import Search from './components/Search';
import { useState } from 'react';
import { BlogCard } from './components/Card';
import { CarouselCustomNavigation } from './components/Crousel';
import Slider from 'react-slick';

import ButtonNextArrow from './components/ButtonNextArrow';
import ButtonPreviousArrow from './components/ButtonPreviousArrow';
import SelectButton from './components/SelectButton';
export default function Home() {
  const [active, setActive] = useState(0);
  const settings = {
    customPaging: function (i) {
      return <span className={`block h-[0.438rem] cursor-pointer rounded-2xl transition-all content-[''] ${active === i ? 'w-6 bg-black' : 'w-6 bg-gray-500'}`} />;
    },
    dots: true,
    className: 'center',
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ButtonNextArrow className={'hover:bg-black/50'} />,
    prevArrow: <ButtonPreviousArrow className={'hover:bg-black/50'} />,
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
            <Typography variant={'h1'} className="text-[2.5rem] sm:text-5xl md:text-6xl leading-[1.3] font-normal font-['Squada_One']">
              Temukan Properti Impianmu Sekarang
            </Typography>
            <Typography variant={'paragraph'} className="my-3 w-full md:w-[30rem] leading-[2] sm:leading-[2.5] text-base sm:text-lg text-white/70">
              Kami membuka jasa jual beli maupun rental properti dengan harga terjangkau. Kami sudah beroperasi selama 3 tahun.
            </Typography>
            <form className="w-full bg-white rounded-xl flex flex-col md:flex-row p-2 gap-4 justify-center items-center ">
              <div className="w-full md:w-40 select-label text-white">
                <SelectButton />
              </div>
              <div className="w-full flex justify-center gap-2 items-center">
                <InputDefault className={'flex-1'} />
                <button className="!max-w-fit h-[40px]  md:bg-transparent">
                  <Search className="w-6 h-6" />
                </button>
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
        <Typography variant="h1" color="black" className="text-[#151D28] font-['Squada_One'] text-center mb-10">
          Properti Unggulan
        </Typography>
        <div className="w-full p-10">
          <Slider {...settings}>
            <BlogCard src={'rumah1.svg'} alt={'rumah 1'} />
            <BlogCard src={'rumah2.svg'} alt={'rumah 2'} />
            <BlogCard src={'rumah3.svg'} alt={'rumah 3'} />
            <BlogCard src={'rumah3.svg'} alt={'rumah 4'} />
          </Slider>
        </div>
      </section>
    </div>
  );
}
