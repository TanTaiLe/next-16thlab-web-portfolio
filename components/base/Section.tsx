import cn from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Section = ({ children, className = "" }: Props) => {
  return <div className={cn(className, "py-4 sm:py-6 lg:py-20")}>
    {children}
  </div>;
};
