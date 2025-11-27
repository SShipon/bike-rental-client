
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,

} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signupSchema } from "@/validation/authValidation";
import { z } from "zod";

import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { toast } from "@/components/ui/use-toast";
import RegisterAnimate from "./RegisterAnimate";

import AuthFormField from "@/components/auth/AuthFormField";
import logo from "@/assets/logo.png";
import googleIcon from '@/assets/auth/google.png'
import linkedin from '@/assets/auth/linkedin.png'
import github from '@/assets/auth/github.png'
const Register = () => {
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      role: "user",
    };

    try {
      const res = await signUp(userData).unwrap();
    
      if (res.success) {
        toast({
          variant: "default",
          title: res.message,
        });
    
        navigate("/auth");
      }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };
      toast({
        variant: "destructive",
        title: err?.data?.message || "An unexpected error occurred",
      });
    }
  };

  return (
     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 gap-8">
        <div className="w-full max-w-sm lg:max-w-md mb-4 lg:mb-0">
          <RegisterAnimate />
        </div>
        <div className="w-full max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-2xl">
         <img src={logo} alt="bike rental logo" className="mx-auto mb-3 w-[80px] h-[80px]" />
         <div className="text-center">
                  <h4 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Create an Account</h4>
                  <div className="flex justify-center items-center gap-2 mt-2 mb-4">
                    <p>Already have an account? </p>
                    <Link
                      className="text-[#F43650] font-semibold underline"
                      to={"/auth"}
                    >
                     Sign In
                    </Link>
                  </div>
                </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 bg-white dark:bg-gray-900 p-4 md:p-6 rounded-md"
            >
              <AuthFormField
                name="name"
                label="Name"
                placeholder="Enter your name"
                inputType="text"
                formControl={form.control}
              />
              <AuthFormField
                name="email"
                label="Email"
                placeholder="Enter your email"
                inputType="text"
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
              <AuthFormField
                name="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                inputType="text"
                formControl={form.control}
              />
              <AuthFormField
                name="address"
                label="Address"
                placeholder="Enter your address"
                inputType="text"
                formControl={form.control}
              />
              <Button className="bg-[#D03650] text-white w-full h-10" type="submit">
                {isLoading ? "Signing..." : "Sign Up"}
              </Button>
               <p className="text-center text-sm">By creating an account, you agree to Bike Rental <span className="text-[#F43650] font-semibold underline">Terms</span> and <span className="text-[#F43650] font-semibold underline">Privacy</span></p>
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

export default Register;
