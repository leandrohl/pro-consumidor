"use client"
import Image from 'next/image'
import Logo from '@/assets/icons/logo.svg'
import { socialLinks } from '@/data/socialLinks'


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
          {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
              >
                <Image
                  src={social.icon}
                  alt={`Ícone do ${social.name}`}
                  width={36}
                  title={social.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <span className="text-white text-center text-xs mt-12">
        Copyright © 2025. Feito por Pro Consumidor
      </span>
    </footer>
  )
}
