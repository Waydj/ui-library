import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const buttonStyles = cva(
  [
    "w-full",
    "p-2",
    "rounded",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
      colorScheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "text-primary border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "medium",
      colorScheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorScheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorScheme, className }))}
        {...props}
      />
    );
  }
);
