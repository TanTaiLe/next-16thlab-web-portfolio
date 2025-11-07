import { Container } from "@/components/base/Container";
import { Section } from "@/components/base/Section";
import { Divider } from "@/components/elements/Divider";
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
    <Section className="lg:pb-0">
      <Container className="grid grid-cols-6 gap-8">
        <div className="flex flex-col gap-6 col-start-2 col-span-4">
          <Tag data={pageData.ProjectDetail.tags} />
          <div>
            <h1 className="display text-[88px] uppercase">{pageData.ProjectDetail.title}</h1>
          </div>
        </div>
      </Container>
    </Section>
    <Section className="lg:pt-10">
      <Container className="grid grid-cols-6 gap-8">
        <div className="grid grid-cols-4 gap-8 col-start-2 col-span-4">
          <h3 className="text-[20px]">Tổng quan</h3>
          <div className="flex flex-col gap-4 col-span-3">
            <div className="grid gap-4"> <p>Cinestar là hệ thống rạp chiếu phim Việt Nam mang tinh thần trẻ trung và hiện đại, nơi khán giả tận hưởng điện ảnh trong không gian thân thiện và tràn đầy năng lượng. </p>
              <p>Trong dự án này, chúng tôi định hình lại trải nghiệm kỹ thuật số của ứng dụng Cinestar, hướng đến một diện mạo sống động hơn, phản ánh đúng cá tính trẻ trung của thương hiệu, đồng thời mang đến hành trình xem phim mượt mà, dễ tiếp cận và truyền cảm hứng cho mọi khán giả.</p>
            </div>
            <Divider />
            <div className="flex justify-between items-center">
              <span>Khách hàng</span>
              <span>CINESTAR</span>
            </div>
            <Divider />
            <div className="flex justify-between items-center">
              <span>Năm thực hiện</span>
              <span>2025</span>
            </div>
            <Divider />
            <div className="flex justify-between items-center">
              <span>Lĩnh vực</span>
              <span>Giải trí</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
    <Section>
      <Container className="grid grid-cols-6 gap-8">
        <div className="flex flex-col gap-6 col-start-2 col-span-4">
          <h1 className="text-[80px] font-normal leading-[96px]">
            Diện mạo mới, trải nghiệm rạp phim trọn vẹn cùng Cinestar
          </h1>
        </div>
      </Container>
      <R3FDemo />
    </Section>
  </>;
}
