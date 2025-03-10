import BannerTop from "@/components/BannerTop";
import News from "@/components/News";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <BannerTop />
      <Services />
      <News />
      <Testimonials />
    </div>
  );
}
