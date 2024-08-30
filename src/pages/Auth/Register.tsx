/* eslint-disable @typescript-eslint/no-explicit-any */
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
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error?.data?.message,
      });
    }
  };

  return (
    <section className="my-8">
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div className="w-full sm:w-[600px]">
          <RegisterAnimate />
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 bg-white dark:bg-gray-800 p-10 rounded-md shadow-sm"
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
              <Button className="bg-green-500" type="submit">
                {isLoading ? "Signing..." : "SingUp"}
              </Button>
            </form>
          </Form>

          <h3 className="my-4">
            Already have account then:{" "}
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
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
              className="w-96"
              required={required}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Register;
