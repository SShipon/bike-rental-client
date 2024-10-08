import video from "@/assets/heros.mp4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const handleSearchSubmit: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    onSearch(search);
  };

  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-88px)] bg-gray-900">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4 sm:px-0">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Fast, <span className="text-[#F43650]">Powerful,</span> Reliable – Our<span className="text-[#F43650]">Bikes!</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            Rent a bike and discover the beauty of urban cycling
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button size="lg" className="bg-[#F43650] w-full sm:w-auto">
            Start Your Adventure
          </Button>
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Input
              name="search"
              type="text"
              placeholder="Search bike..."
              className="lg:w-96 w-full sm:w-56 px-4 py-2 text-black dark:text-white outline-none rounded-lg transition duration-300 ease-in-out transform focus:scale-105"
            />
            <Button className="bg-[#F43650] w-full sm:w-auto" type="submit">Search</Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
