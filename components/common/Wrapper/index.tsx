import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

export const Wrapper = ({ children, className = "" }: WrapperProps) => {
  return <section className={className}>
    <div className="container mx-auto py-16">
      {children}
    </div>
  </section>;
};
