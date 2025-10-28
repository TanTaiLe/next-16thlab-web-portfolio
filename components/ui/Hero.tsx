import { Container } from "@/components/base/Container";
import { Section } from "@/components/base/Section";
import Image from "next/image";

type Props = {
  title: string;
  description?: string;
};

export const Hero = ({ title, description }: Props) => {
  return <Section>
    <Container>
      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col gap-6">
          <h1 className="text-[80px] uppercase">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/project.png"
            alt="Hero image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </Container>
  </Section>;
};
