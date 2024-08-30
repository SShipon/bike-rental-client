import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold mb-8">RIDEXO</h2>
          <p className="mb-16 font-light text-sm">
            Aliquet natoque, dolorum nascetur, commodi, varius, rutrum accusamus molestias egestas. 
            Facilisi incidunt? Intege quam consectetur magnís risus magna! Duis?Facmolitia.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full border hover:bg-red-500">
            <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full border hover:bg-red-500">
            <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full border hover:bg-red-500">
            <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full border hover:bg-red-500">
            <FaYoutube />
            </a>
            <a href="#" className="p-2 rounded-full border hover:bg-red-500">
            <FaPinterestP />
            </a>
          </div>
          <div className="mt-16  text-gray-200 text-sm font-light">
        &copy; 2024 Ridexo - Bikes Rental. All rights reserved.
      </div>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Our Locations</h3>
          <ul className=''>
            <li className=" mb-6">
              <p className="font-semibold text-sm mb-2">New York City</p>
              <p className="font-light text-sm">908 Acado St. Elizabeth, NJ 07202</p>
              <p className="font-light text-sm">+502-215-5674</p>
            </li>
            <li className=" mb-6">
              <p className="font-semibold text-sm mb-2">Gentle Park USA</p>
              <p className="font-light text-sm">8191 Lincoln St. Arlington, MA 02474</p>
              <p className="font-light text-sm">+802-205-9815</p>
            </li>
            <li>
              <p className="font-semibold text-sm mb-2">Times Square Avenue</p>
              <p className="font-light text-sm">125 Manhattan, NY 10036, USA</p>
              <p className="font-light text-sm">+812-192-4569</p>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-8">About Us</h3>
          <ul>
            <li className=" mb-6"><a href="#" className="font-light text-sm">Contact Us</a></li>
            <li className=" mb-6"><a href="#" className="font-light text-sm">Services</a></li>
            <li className=" mb-6"><a href="#" className="font-light text-sm">Rent a Bike</a></li>
            <li className=" mb-6"><a href="#" className="font-light text-sm">Read FAQs</a></li>
            <li className=" mb-6"><a href="#" className="font-light text-sm">Terms & Conditions</a></li>
            <li><a href="#" className="font-light text-sm">Our Pricing</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Newsletter</h3>
          <p className="mb-8 font-light text-sm">Subscribe to us and you won't miss the new arrivals.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 flex-grow rounded-l border placeholder-gray-400 focus:outline-none text-sm font-light"
            />
            <button className="p-2 rounded-r bg-red-500 hover:bg-red-600">
              <i className="fas fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;

