import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import { MdElectricBike } from "react-icons/md";
const teamMembers = [
  {
    name: "Risal Shahed ",
    role: "Founder & CEO",
    bio: "Emma brings our story to life. Her creative marketing strategies have put Bike Rental Service on the map and continue to inspire more people to choose two wheels.",
    image:
      "https://res.cloudinary.com/dtoo9dkbs/image/upload/v1725530890/151496680_4391904790837913_3695756710532569280_n-removebg-preview_uzhlur.png",
  },

  {
    name: "Sh Shipon",
    role: "Head of Operations",
    bio: "Michael ensures our day-to-day operations run smoothly. His background in logistics and customer service helps us deliver an exceptional experience to every rider.",
    image:
      "https://res.cloudinary.com/dtoo9dkbs/image/upload/v1725531101/00-40m-removebg-preview_bi6jxt.png",
  },
  {
    name: "Abdur Rahim",
    role: "Chief Marketing Officer",
    bio: "Sarah founded Bike Rental Service with a passion for sustainable transportation and urban exploration. With over 15 years of experience in the cycling industry, she leads our team with vision and enthusiasm.",
    image:
      "https://res.cloudinary.com/dtoo9dkbs/image/upload/v1725530492/454853571_1186829752647875_7483518602442643715_n-removebg-preview_cepirv.png",
  },
  
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="lg:text-2xl text-[#F43650] text-base font-bold text-center mb-12">
        About Bike Rental Service
      </h1>

      <section className="mb-16">
        <h2 className="lg:text-2xl  text-base font-semibold mb-4 text-[#F43650]">Our Mission</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg">
              At Bike Rental Service, our mission is to promote sustainable
              urban mobility and enrich lives through cycling. We strive to
              provide accessible, high-quality bikes that empower people to
              explore their cities, reduce their carbon footprint, and embrace a
              healthier lifestyle. Our commitment to excellent service, safety,
              and environmental responsibility drives everything we do.
            </p>
          </CardContent>
        </Card>
      </section>
      {/* counter section */}
      <section className="m-0 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="border  text-center justify-center items-center py-10 px-10">
            <p className="font-semibold lg:text-2xl text-base mb-4 ">
              {" "}
              400,000+
            </p>
            <p> Families Served</p>
          </div>
          <div className="border  text-center justify-center items-center py-10 px-10">
            <p className="font-semibold lg:text-2xl text-base mb-4 "> 70%</p>
            <p> Bangladesh Covered</p>
          </div>
          <div className="border text-center justify-center items-center py-10 px-10">
            <p className="font-semibold lg:text-2xl text-base mb-4 ">
              {" "}
              68,000 Km
            </p>
            <p>Bike Laid</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-28 my-10">
          <div>
            <h3 className="lg:text-2xl text-base font-semibold text-[#F43650]"> Carnival for Home</h3>
            <p className="lg:text-justify py-4">
              What makes us different is our [mention key differentiators, 
              commitment to quality, unique approach, exceptional customer 
              service]. We believe in [briefly describe your core values or
              principles]. This commitment is reflected in [mention how it 
              impacts your products, services, or interactions with customers].
            </p>
            
              <div className="flex gap-2 items-center mb-2">
              <CiLocationOn className="text-[#F43650]"/>
              <p> Upto Unlimited Bike Discount</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
              <AiTwotoneLike className="text-[#F43650]" />
              <p>78K YouTube, Facebook Streaming</p>
              </div>
             <div className="flex gap-2 items-center ">
             <MdElectricBike className="text-[#F43650]" />
             <p>Lag Free, Low Latency Bike all Bangladesh</p>
             </div>
           <div className="my-4">
           <Button className="bg-rose-600 hover:bg-rose-500">Explore more</Button>
           </div>
          </div>
          <div>
           <img className="lg:w-[3000px] w-[100%]" src="https://images.ctfassets.net/uyc32o2uod42/3nhIREpkcft8Q1Chu7AxdA/6abcac6118ce1e776ef7475bed2536cb/OSTROVAM_Home_Inset_Hero.jpg?w=1400&h=770&fm=avif" alt="" />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="lg:text-2xl  text-base text-[#F43650] font-semibold py-10">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-[300px] h-[300px] object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-center text-muted-foreground mb-4">
                  {member.role}
                </p>
                <p className="text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
