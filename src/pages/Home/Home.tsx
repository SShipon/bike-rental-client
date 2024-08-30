import { useRef, useState } from 'react';
import AvailableBike from "./Section/AvailableBike";
import ContactUs from "./Section/ContactUps";
import Hero from "./Section/Hero";
import TestimonialsSection from "./Section/TestimonialsSection";
import WhyChooseUs from "./Section/WhyChoosUs";
import Discount from './Section/Discount';
import Lates from './Section/Lates';
import PopularBrands from './Section/PopularBrands';



const Home = () => {
  const availableBikeRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (availableBikeRef.current) {
      availableBikeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero onSearch={handleSearch} />
      <div ref={availableBikeRef}>
        <AvailableBike searchQuery={searchQuery} />
      </div>
      <TestimonialsSection />
      <WhyChooseUs />
       <Discount />
       <Lates />
     <PopularBrands />
      <ContactUs />

    </div>
  );
};

export default Home;
