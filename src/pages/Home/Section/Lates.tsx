import Late from "./Late";



const Lates = () => {
  const products = [
    {
      image: 'https://bd.gaadicdn.com/processedimages/kabira-mobility/km-3000/source/km-300065cf14be1a614.jpg?imwidth=320&impolicy=resize',
      title: 'Ampere Magnus EX',
      location: 'London, UK',
      price: 70,
      reviews: 752,
      rating: 4,
    },{
      image: 'https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg?tr=w-360',
      title: 'GTC Origine Bike',
      location: 'London, UK',
      price: 100,
      reviews: 752,
      rating: 4.3,
    },{
      image: 'https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Bounce Infinity E.1',
      location: 'London, UK',
      price: 60,
      reviews: 752,
      rating: 4.5,
    },{
      image: 'https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/source/classic35066d56de6e0911.jpg?tr=w-360',
      title: 'Lectrix EV LXS G 3.0',
      location: 'London, UK',
      price: 160,
      reviews: 752,
      rating: 4.3,
    },{
      image: 'https://bd.gaadicdn.com/processedimages/ktm/ktm-duke/640X309/ktm-duke648ffacef182c.jpg?tr=w-360',
      title: 'Hero Xtreme 200 R',
      location: 'London, UK',
      price: 30,
      reviews: 752,
      rating: 4.9,
    },{
      image: 'https://bd.gaadicdn.com/processedimages/matter-ev/matter-electric-bike/640X309/matter-electric-bike640037bddc811.jpg?imwidth=320&impolicy=resize',
      title: 'Kabira Mobility KM5000',
      location: 'London, UK',
      price: 120,
      reviews: 752,
      rating: 4.9,
    },
  ];

  return (
   
    <div className=" flex flex-col justify-center items-center dark:bg-gray-900 py-20">
        <h3 className="text-base uppercase lg:text-2xl font-bold mb-20 lg:mb-20 text-[#F43650] text-center">Lates Bikes</h3>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
      {products.map((product, index) => (
        <Late
          key={index}
          image={product.image}
          title={product.title}
          location={product.location}
          price={product.price}
          reviews={product.reviews}
          rating={product.rating}
        />
      ))}
    </div>
    </div>
  );
};

export default Lates;