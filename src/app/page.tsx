import BannerTop from "@/components/organisms/BannerTop";
import ContactUs from "@/components/organisms/ContactUs";
import Footer from "@/components/organisms/Footer";
import News from "@/components/organisms/News";
import Services from "@/components/organisms/Services";
import Testimonials from "@/components/organisms/Testimonials";
import Whatsapp from "@/assets/icons/whatsapp-icon.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerTop />
      <Services />
      <News />
      <Testimonials />
      <ContactUs />
      <Footer />

      <a
        href="https://wa.me/5518991931960"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 drop-shadow-2xl rounded-full p-2 cursor-pointer z-50"
      >
      <Image
        src={Whatsapp}
        alt="Ícone do WhatsApp"
        width={48}
        height={48}
        priority
        title="Abrir conversa no WhatsApp"
      />
      </a>
    </div>
  );
}
