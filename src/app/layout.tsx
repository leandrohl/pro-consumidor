import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pro Consumidor | Contra redes sociais",
  description:
    "Advocacia especializada em contas hackeadas, banidas, desmonetizadas ou com problemas no Instagram, Facebook, TikTok e YouTube. Recupere sua conta com respaldo jurídico.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL("https://www.proconsumidoradv.com.br"),
  openGraph: {
    type: "website",
    url: "https://www.proconsumidoradv.com.br/",
    title: "Pro Consumidor | Contra redes sociais",
    description:
      "Teve sua conta hackeada, banida ou desmonetizada? A Pro Consumidor resolve seu problema com ação judicial rápida e segura.",
    images: [
      {
        url: "https://www.proconsumidoradv.com.br/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Pro Consumidor logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Consumidor | Contra redes sociais",
    description:
      "Especialistas em ações contra redes sociais. Recuperamos contas hackeadas, banidas ou desmonetizadas.",
    images: ["https://www.proconsumidoradv.com.br/logo1.jpg"],
  },
  alternates: {
    canonical: "https://www.proconsumidoradv.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Toaster position="bottom-center" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LegalService",
              name: "Pro Consumidor",
              url: "https://www.proconsumidoradv.com.br",
              logo: "https://www.proconsumidoradv.com.br/logo1.png",
              description:
                "Advocacia especializada na recuperação de contas em redes sociais. Atendimento rápido, transparente e 100% digital.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brasil",
                addressRegion: "BR",
                addressCountry: "BR",
              },
              sameAs: [
                "https://www.instagram.com/proconsumidoradv/",
                "https://www.facebook.com/proconsumidoradv/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
