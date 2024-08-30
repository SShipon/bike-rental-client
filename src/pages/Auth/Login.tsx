import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/authValidation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthFormFieldProps } from "@/types/auth";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "@/components/ui/use-toast";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import LoginAnimate from "./LoginAnimate";
import { Eye, EyeOff } from "lucide-react"; // Assuming you're using an icon library like Lucide

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
    <section className="my-8 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly">
        <div className="w-full max-w-md lg:max-w-lg mb-8 lg:mb-0">
          <LoginAnimate />
        </div>
        <div className="w-full max-w-md lg:max-w-lg">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-md shadow-sm"
            >
              <SignupFormField
                name="email"
                label="Email"
                placeholder="Enter your email"
                inputType="email"
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
              <Button className="bg-[#F43650] w-full" type="submit">
                {isLoading ? "Logging..." : "Login"}
              </Button>
            </form>
          </Form>

          <h3 className="my-4 text-center">
            If you don't have an account:{" "}
            <Link
              className="text-[#F43650] font-semibold hover:font-bold"
              to={"/auth/register"}
            >
              Sign Up now
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
};

const SignupFormField: React.FC<AuthFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
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

export default Login;
