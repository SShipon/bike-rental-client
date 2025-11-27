
import {
  Form,

} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/authValidation";

import { Button } from "@/components/ui/button";

import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "@/components/ui/use-toast";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import LoginAnimate from "./LoginAnimate"
import AuthFormField from "@/components/auth/AuthFormField";
import googleIcon from '@/assets/auth/google.png'
import linkedin from '@/assets/auth/linkedin.png'
import github from '@/assets/auth/github.png'
import logo from "@/assets/logo.png";
const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.token);

      dispatch(setUser({ user, token: res.token }));

      toast({ title: res.message });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast({ title: "Something went wrong" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 gap-8">
      <div className="w-full max-w-sm lg:max-w-md mb-4 lg:mb-0">
        <LoginAnimate />
      </div>

      <div className="w-full max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-2xl">
        <img src={logo} alt="bike rental logo" className="mx-auto mb-3 w-[80px] h-[80px]" />
        <div className="text-center">
          <h4 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Sign In</h4>
          <div className="flex justify-center items-center gap-2 mt-2 mb-4">
            <p>New to Bike Rental? </p>
            <Link
              className="text-[#F43650] font-semibold underline"
              to={"/auth/register"}
            >
              Create an Account
            </Link>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 bg-white dark:bg-gray-900 p-4 md:p-6"
          >
            <AuthFormField
              name="email"
              label="Username or Email Address"
              placeholder="Enter your email"
              inputType="email"
              formControl={form.control}
            />
            <AuthFormField
              name="password"
              label="Password"
              placeholder="Enter your password"
              description="At least 8 characters."
              inputType="password"
              formControl={form.control}
            />
            <Button className="bg-[#D03650] text-white w-full h-10" type="submit">
              {isLoading ? "Logging..." : "Login"}
            </Button>
            <p className="text-center text-sm">Need to find <span className="text-[#F43650] font-semibold underline"> your username</span> or your <span className="text-[#F43650] font-semibold underline">password?</span></p>
          </form>
        </Form>
            <div className="flex justify-center items-center gap-2 mt-4">
                           <Button variant="secondary" className="w-[100px] h-[36px] border-2 border-[#44AA62] p-2"><img src={googleIcon} alt="" className="w-[32px] h-[32px]"/>Google</Button>
                           <Button className="w-[100px] h-[36px]  border-2 border-[#812290] p-2 " variant="secondary" > <img src={github} alt="" className="w-[32px] h-[32px]" /> Github</Button>
                           <Button className="w-[100px] h-[36px] border border-[#0066C8] p-2 " variant="secondary" ><img src={linkedin} alt="" className="w-[32px] h-[32px]" /> Linkedin</Button>
        </div>
      </div>
    </div>
  );
};

// AuthFormField component moved to `src/components/auth/AuthFormField.tsx`

export default Login;
