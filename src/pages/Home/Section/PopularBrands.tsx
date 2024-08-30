
import img1 from '../../../assets/logos/ather-energy (1).jpg';
import img2 from '../../../assets/logos/bajaj (2).jpg';
import img3 from '../../../assets/logos/benling-india (1).jpg';
import img4 from '../../../assets/logos/hero (5).jpg';
import img5 from '../../../assets/logos/hero-electric (3).jpg';
import img6 from '../../../assets/logos/ktm (2).jpg';
import img7 from '../../../assets/logos/okinawa (1).jpg';
import img8 from '../../../assets/logos/ola-electric (3).jpg';
import img9 from '../../../assets/logos/suzuki (2).jpg';
import img10 from '../../../assets/logos/yamaha (2).jpg';
import img11 from '../../../assets/logos/honda (2).jpg';
import Marquee from 'react-fast-marquee';
import Popular from './Popular';


type LogoImg = {
  logoImg: string,
  _id: number
};

const PopularBrands = () => {
  const sportingLogos: LogoImg[] = [
    {
      _id: 1,
      logoImg: img1,
    },
    {
      _id: 2,
      logoImg: img2,
    },
    {
      _id: 3,
      logoImg: img3,
    },
    {
      _id: 4,
      logoImg: img4,
    },
    {
      _id: 5,
      logoImg: img5,
    },
    {
      _id: 6,
      logoImg: img6,
    },
    {
      _id: 7,
      logoImg: img7,
    },
    {
      _id: 8,
      logoImg: img8,
    },
    {
      _id: 9,
      logoImg: img9,
    },
    {
      _id: 10,
      logoImg: img10,
    },
    {
      _id: 11,
      logoImg: img11,
    },
  ];

  return (
    <div className="w-full  pt-5 pb-20 ">
      <div className="text-center my-10">
        <h2 className="text-center lg:text-2xl  md:text-xl text-base  font-bold my-10 px-10 text-[#F43650]">
          OUR TOP WORLD POPULAR BRANDS
        </h2>
        <p className="mt-4">
      Bikes offers a wide range of bikes, including road bikes <br />
        , mountain bikes, gravel bikes, and e-bikes.
         Notable models include the Trek Domane
        </p>
      </div>
      <Marquee speed={30}>
        <div className="flex gap-5">
          {sportingLogos.map((logo) => (
            <Popular key={logo._id} logo={logo}></Popular>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PopularBrands;