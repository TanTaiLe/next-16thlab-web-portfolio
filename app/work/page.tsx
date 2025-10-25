import { Hero } from "@/components/ui/Hero";

const pageData = {
  Hero: {
    title: "Dự án",
    description: "Dưới đây là những dự án tiêu biểu mà chúng tôi đã thực hiện, thể hiện cách chúng tôi tiếp cận và phát triển sản phẩm.",
  }
};

export default function Work() {
  return <>
    <Hero {...pageData.Hero} />
  </>;
}
