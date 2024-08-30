import { Rating } from '@smastrom/react-rating'; // Import the Rating component
import { FcLike } from "react-icons/fc";
import '@smastrom/react-rating/style.css';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the interface for the component props
interface LateProps {
  lates: {
    image: string;
    title: string;
    location: string;
    price: number;
    reviews: number;
    rating: number;
  };
}

export const Late: React.FC<LateProps> = ({ lates }) => {
  const { image, title, location, price, reviews, rating } = lates;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription><img src={image} alt="" /></CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardFooter className="flex  justify-around">
          <CardDescription>$ {price}</CardDescription>
          
             <div className='flex gap-1'> <FcLike />
            <CardDescription>{reviews}</CardDescription>
       </div>
          <CardDescription>
            <Rating style={{ maxWidth: 100, color: '#f59e0b' }} value={rating} />
          </CardDescription>
        </CardFooter>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='bg-[#F43650]'>Book Now</Button>
      </CardFooter>
    </Card>
  );
};
