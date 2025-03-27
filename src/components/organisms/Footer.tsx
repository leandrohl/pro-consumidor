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
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/3'>
          <Image src={Logo} alt="logo" />
        </div>
        <p className='text-white text-center md:w-1/3 my-8'>
          A Pro Consumidor, startup jurídica, foi criada para ajudar você a garantir compensações justas por problemas e contratempos em suas redes sociais.
        </p>
        <div className='md:w-1/3 flex flex-col items-center'>
          <span className='text-white text-center mb-2'>
            Entre em contato:
          </span>
          <div className='flex items-center gap-4'>
            <a href="https://www.facebook.com/proconsumidor" target="_blank" rel="noopener noreferrer">
              <Image src={FacebookIcon} alt='Facebook' width={50} />
            </a>
            <a href="https://www.instagram.com/proconsumidoradv" target="_blank" rel="noopener noreferrer">
              <Image src={InstagramIcon} alt='Instagram' width={60} />
            </a>
            <a href="https://wa.me/5518991931960" target="_blank" rel="noopener noreferrer">
              <Image src={WhatsappIcon} alt='WhatsApp' width={50} />
            </a>
            <a href="mailto:proconsumidoradv@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={EmailIcon} alt='Email' width={50} />
            </a>
          </div>
        </div>
      </div>
      <span className='text-white text-center text-sm mt-16'>
        Copyright © 2025. Feito por Pro Consumidor
      </span>
    </footer>
  )
}
