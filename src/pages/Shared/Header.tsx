import Container from "@/components/shared/Container";
import logo from "@/assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Theme/ModeToggle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Container>
        <div className="py-6 flex items-center justify-between">
          <Link to={"/"}>
             <div className="flex justify-center items-center gap-2">
             <img className="w-[50px]" src={logo} alt="logo" /> 
             <span className="text-[#E20A17] text-4xl font-extrabold">RIDEXO</span>
             </div>
          </Link>
          <div className="flex items-center gap-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `font-semibold hover:text-gray-700 transition duration-75 ${
                  isActive ? "border-b border-[#F43650]" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `font-semibold hover:text-gray-700 transition duration-75 ${
                  isActive ? "border-b border-[#F43650]" : ""
                }`
              }
            >
              About us
            </NavLink>
            <NavLink
              to={"/comparison"}
              className={({ isActive }) =>
                `font-semibold hover:text-gray-700 transition duration-75 ${
                  isActive ? "border-b border-[#F43650]" : ""
                }`
              }
            >
              Comparison
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            {token ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to={"/auth/register"}>
                  <Button variant={"outline"}>Sing Up</Button>
                </Link>
                <Link to={"/auth"}>
                  <Button className="bg-[#F43650] text-white">Login</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
