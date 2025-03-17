import BannerTop from "@/components/organisms/BannerTop";
import ContactUs from "@/components/organisms/ContactUs";
import Footer from "@/components/organisms/Footer";
import News from "@/components/organisms/News";
import Services from "@/components/organisms/Services";
import Testimonials from "@/components/organisms/Testimonials";

export default function Home() {
  return (
    <div>
      <BannerTop />
      <Services />
      <News />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
