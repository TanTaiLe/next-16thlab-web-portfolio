import cn from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Section = ({ children, className = "" }: Props) => {
  return <div className={cn("py-4 sm:py-6 lg:py-24", className)}>
    {children}
  </div>;
};
