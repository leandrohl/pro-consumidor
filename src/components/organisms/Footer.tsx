"use client"
import Image from 'next/image'
import Logo from '@/assets/icons/logo.svg'
import FacebookIcon from '@/assets/icons/facebook.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import WhatsappIcon from '@/assets/icons/whatsapp-icon.svg'
import EmailIcon from '@/assets/icons/email.svg'

export default function Footer() {
  return (
    <footer className="relative px-8 py-8 bg-primary flex flex-col overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <Image
            src={Logo}
            alt="Logo da Pro Consumidor"
            width={160}
            title="Pro Consumidor"
          />
        </div>

        <p className="text-white text-center md:w-1/3 text-sm md:text-base">
          A Pro Consumidor, startup jurídica, foi criada para ajudar você a garantir compensações justas por problemas e contratempos em suas redes sociais.
        </p>

        <div className="md:w-1/3 flex flex-col items-center">
          <span className="text-white text-center mb-2 font-semibold">
            Entre em contato:
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/proconsumidoradv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar página do Facebook"
            >
              <Image src={FacebookIcon} alt="Ícone do Facebook" width={34} title="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/proconsumidoradv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil do Instagram"
            >
              <Image src={InstagramIcon} alt="Ícone do Instagram" width={44} title="Instagram" />
            </a>
            <a
              href="https://wa.me/5518991931960"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar via WhatsApp"
            >
              <Image src={WhatsappIcon} alt="Ícone do WhatsApp" width={36} title="WhatsApp" />
            </a>
            <a
              href="mailto:proconsumidoradv@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar e-mail para Pro Consumidor"
            >
              <Image src={EmailIcon} alt="Ícone de E-mail" width={36} title="Email" />
            </a>
          </div>
        </div>
      </div>

      <span className="text-white text-center text-xs mt-12">
        Copyright © 2025. Feito por Pro Consumidor
      </span>
    </footer>
  )
}
