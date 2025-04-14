import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pro Consumidor | Defesa dos seus direitos nas redes sociais",
  description:
    "A Pro Consumidor te ajuda a resolver problemas com redes sociais, como contas hackeadas ou bloqueadas. Entre em contato e saiba mais!",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Pro Consumidor | Defesa dos seus direitos nas redes sociais</title>
        <meta
          name="description"
          content="A Pro Consumidor te ajuda a resolver problemas com redes sociais, como contas hackeadas ou bloqueadas. Entre em contato e saiba mais!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Pro Consumidor" />
        <meta
          property="og:description"
          content="Especialistas em ações contra redes sociais. Acesse e saiba mais."
        />
        <meta property="og:url" content="https://www.proconsumidoradv.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pro Consumidor | Defesa dos seus direitos nas redes sociais"
        />
        <meta
          name="twitter:description"
          content="A Pro Consumidor te ajuda a resolver problemas com redes sociais, como contas hackeadas ou bloqueadas. Entre em contato e saiba mais!"
        />
        <meta name="twitter:image" content="/logo1.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Pro Consumidor",
              "url": "https://www.proconsumidoradv.com.br",
              "logo": "https://www.proconsumidoradv.com.br/logo1.png",
              "sameAs": [
                "https://www.instagram.com/proconsumidoradv/",
                "https://www.facebook.com/proconsumidoradv/"
              ]
            }
          `}
        </script>
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
