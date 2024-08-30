import { Frown, Home, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white p-4">
      <div className="space-scene mb-8">
        <div className="stars"></div>
        <div className="planet"></div>
        <div className="astronaut">
          <Frown className="w-8 h-8" />
        </div>
      </div>
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Looks like you're lost in space.</p>
      <div className="flex space-x-4">
        <Link
          to={"/"}
          className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-200"
        >
          <Home className="mr-2" />
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="flex items-center px-4 py-2 bg-rose-500 hover:bg-rose-900 rounded-full transition-colors duration-200"
        >
          <RotateCcw className="mr-2" />
          Go Back
        </button>
      </div>
    
    </div>
  );
}
