import React from "react";
import { Button, ButtonProps } from "../ui/button";
import plusCircle from "@/public/icons/pluscircle.svg";
import blueCheck from "@/public/icons/checksquare.svg";
import Image from "next/image";
import bluePlus from "@/public/icons/bluePlus.svg";
type ReusableButtonType =
  | "primary"
  | "gradient"
  | "onboarding"
  | "addResource"
  | "formSubmit"
  | "profileButton";

const baseClass = `rounded-[4px] shadow-resource inline-flex px-3.5 py-2.5 gap-x-2`;

// take the prop type from a regular button, now our button expects onClicks, children, etc...
interface CustomButtonProps extends ButtonProps {
  buttonType: ReusableButtonType;
  className?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ ...props }, ref) => {
    const { buttonType, className, children, ...rest } = props;
    const buttonTypes = {
      primary: {
        className: `${baseClass} bg-primary-500 text-black-900 w-full paragraph-3-bold font-bold self-start py-3  `,
        icon: null,
      },
      formSubmit: {
        className: `bg-primary-500 text-white-100 w-full paragraph-3-bold self-start py-3 `,
        icon: null,
      },
      gradient: {
        className: `${baseClass}  bg-gradient-to-r from-[#43b7fe] to-[#4f48e6] text-black-900 rounded-[4px] w-full h-[36px] paragraph-3-bold self-start`,
        icon: plusCircle,
      },
      onboarding: {
        className: `${baseClass} bg-black-600 paragraph-4-medium text-white-100 w-full rounded-[4px] self-start`,
        icon: plusCircle,
      },
      addResource: {
        className: `${baseClass} bg-black-600 text-white-100 rounded-[4px] w-full paragraph-3-bold self-start`,
        icon: blueCheck,
      },
      profileButton: {
        className: `${baseClass} bg-black-600 text-white-100 rounded-[4px] w-full paragraph-3-bold self-start`,
        icon: bluePlus,
      },
    };
    const button = buttonTypes[buttonType];

    return (
      <Button
        ref={ref}
        className={`${button.className} ${className}`}
        {...rest}
      >
        {button.icon && <Image src={button.icon} alt={buttonType} />}
        {children}
      </Button>
    );
  }
);
CustomButton.displayName = "CustomButton";
export default CustomButton;
