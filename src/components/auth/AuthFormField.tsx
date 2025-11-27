import React, { useState } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import type {
  AuthFormFieldProps,
  SignUpFormFieldProps,
  UpdateUserProfile,
} from "@/types/auth";

type Props = AuthFormFieldProps | SignUpFormFieldProps | UpdateUserProfile;

const AuthFormField: React.FC<Props> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
  // @ts-expect-error optional prop on union
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((s) => !s);

  return (
    <FormField
      control={formControl as any}
      name={name as any}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                type={
                  showPassword && inputType === "password" ? "text" : inputType || "text"
                }
                {...field}
                className="w-full pr-10"
                // @ts-expect-error pass-through optional prop
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

export default AuthFormField;
