

interface LateProps {
    image: string;
    title: string;
    location: string;
    price: number;
    reviews: number;
    rating: number;
  }

  const Late: React.FC<LateProps> = ({ image, title, location, price, reviews, rating }) =>  {
    return (
      <div className="w-96 rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="mb-4">{location}</p>
          <div className="flex justify-between items-center">
            <div className=" text-lg font-bold">${price} <span className="text-sm font-light">/ DAY</span></div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Book Now</button>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>{reviews} Reviews</p>
            <p className="flex items-center">
              <span className="text-yellow-500">★</span> {rating}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Late;