import cn from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: Props) => {
  return <div className={cn("mx-auto w-full container px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>;
};
