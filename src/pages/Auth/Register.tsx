import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/validation/authValidation";
import { z } from "zod";
import { SignUpFormFieldProps } from "@/types/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { toast } from "@/components/ui/use-toast";
import RegisterAnimate from "./RegisterAnimate";
import { Eye, EyeOff } from "lucide-react"; // Assuming you're using an icon library like Lucide

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
    <section className="my-8 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="w-full max-w-md lg:max-w-lg mb-8 lg:mb-0">
          <RegisterAnimate />
        </div>
        <div className="w-full max-w-md lg:max-w-lg">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-md shadow-sm"
            >
              <SignupFormField
                name="name"
                label="Name"
                placeholder="Enter your name"
                inputType="text"
                formControl={form.control}
              />
              <SignupFormField
                name="email"
                label="Email"
                placeholder="Enter your email"
                inputType="text"
                formControl={form.control}
              />
              <SignupFormField
                name="password"
                label="Password"
                placeholder="Enter your password"
                description="At least 8 characters."
                inputType="password"
                formControl={form.control}
              />
              <SignupFormField
                name="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                inputType="text"
                formControl={form.control}
              />
              <SignupFormField
                name="address"
                label="Address"
                placeholder="Enter your address"
                inputType="text"
                formControl={form.control}
              />
              <Button className="bg-green-500 w-full" type="submit">
                {isLoading ? "Signing..." : "Sign Up"}
              </Button>
            </form>
          </Form>

          <h3 className="my-4 text-center">
            Already have an account?{" "}
            <Link
              className="text-[#F43650] font-semibold hover:font-bold"
              to={"/auth"}
            >
              Login now
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
};

const SignupFormField: React.FC<SignUpFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                type={showPassword && inputType === "password" ? "text" : inputType || "text"}
                {...field}
                className="w-full pr-10"
                required={required}
              />
              {inputType === "password" && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Register;
