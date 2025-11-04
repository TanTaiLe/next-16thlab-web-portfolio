import { Container } from "@/components/base/Container";
import { Section } from "@/components/base/Section";
import { R3FDemo } from "@/components/elements/R3FDemo";
import { Tag } from "@/components/elements/Tag";
import { Hero } from "@/components/ui/Hero";

const pageData = {
  Hero: {
    title: "Dự án",
    description: "Dưới đây là những dự án tiêu biểu mà chúng tôi đã thực hiện, thể hiện cách chúng tôi tiếp cận và phát triển sản phẩm.",
  },
  ProjectDetail: {
    title: "cinestar",
    description: "Diện mạo mới, trải nghiệm rạp phim trọn vẹn cùng Cinestar",
    tags: ["UI Design", "UX Design", "Application Design"],
  }
};

export default function Project() {
  return <>
    {/* <Hero {...pageData.Hero} /> */}
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          <Tag data={pageData.ProjectDetail.tags} />
          <div>
            <h1 className="text-[88px] uppercase">{pageData.ProjectDetail.title}</h1>
            <p className="text-[40px]">{pageData.ProjectDetail.description}</p>
          </div>
          <R3FDemo />
        </div>
      </Container>
    </Section>
  </>;
}
