import React, { useState } from 'react';
import Slider from 'react-slick';
import '../slides.css';
import ButtonInvisiable from './ButtonInvisiable';

export function CarouselCustomNavigation() {
  const [active, setActive] = useState(0);

  const settings = {
    customPaging: function (i) {
      return <span className={`block h-[0.438rem] translate-y-[-20px] cursor-pointer rounded-2xl transition-all content-[''] ${active === i ? 'w-6 bg-white' : 'w-6 bg-gray-500'}`} />;
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
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
      <div className="!h-full">
        <img src="house.jpg" alt="rumah" className="h-full w-full object-cover " />
      </div>
      <div className="!h-full">
        <img src="house2.jpg" alt="image 2" className=" h-full w-full object-cover " />
      </div>
      <div className="!h-full">
        <img src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80" alt="image 3" className="h-full w-full object-cover " />
      </div>
    </Slider>
  );
}
