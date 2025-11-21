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
    title: "cinestar app",
    description: "Cinestar là hệ thống rạp chiếu phim Việt Nam mang tinh thần trẻ trung và hiện đại. Dự án tập trung tái thiết kế trải nghiệm kỹ thuật số của ứng dụng, cùng diện mạo sống động phản ánh cá tính thương hiệu, đồng thời mang đến hành trình xem phim mượt mà, dễ tiếp cận và tràn đầy cảm hứng cho mọi khán giả trong vài cú chạm.",
    summary: {
      clientName: "Cinestar",
      sector: "Giải trí",
      year: "2025",
      services: ["UX UI Design"]
    }
  }
};

export default function Project() {
  return <>
    {/* <Hero {...pageData.Hero} /> */}
    <Section className="lg:pb-0">
      <Container className="grid grid-cols-6 gap-6">
        <div className="grid gap-6 col-start-2 col-span-4">
          <h1 className="display text-[88px] uppercase">{pageData.ProjectDetail.title}</h1>
          <p className="text-xl leading-8 font-light">{pageData.ProjectDetail.description}</p>
          <div className="grid w-6/12 grid-cols-2 gap-9 items-start">
            <div className="grid gap-[2px]">
              <span className="text-lg font-light">Khách hàng</span>
              <span className="text-xl font-semibold">{pageData.ProjectDetail.summary.clientName}</span>
            </div>
            <div className="grid gap-[2px]">
              <span className="text-lg font-light">Lĩnh vực</span>
              <span className="text-xl font-semibold">{pageData.ProjectDetail.summary.sector}</span>
            </div>
            <div className="grid gap-[2px]">
              <span className="text-lg font-light">Năm</span>
              <span className="text-xl font-semibold">{pageData.ProjectDetail.summary.year}</span>
            </div>
            <div className="grid gap-[2px]">
              <span className="text-lg font-light">Dịch vụ</span>
              <div className="grid gap-[2px] text-xl font-semibold">
                {pageData.ProjectDetail.summary.services.map(s =>
                  <span key={s}>{s}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
    <Section>
      <R3FDemo />
      <Container className="grid grid-cols-6">
        <div className="flex flex-col gap-20 col-start-2 col-span-4">
          <h1 className="text-[80px] font-normal leading-[96px]">
            Diện mạo mới, trải nghiệm rạp phim trọn vẹn cùng Cinestar
          </h1>
          <p className="text-[50px] font-light leading-[75px]">Chúng tôi làm mới trải nghiệm người dùng, tạo hành trình tương tác tự nhiên và liền mạch hơn.</p>
        </div>
      </Container>
    </Section>
  </>;
}
