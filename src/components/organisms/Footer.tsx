"use client"
import Image from 'next/image'
import Logo from '@/assets/icons/logo.svg'

export default function Footer() {

  return (
    <footer className="relative px-8 py-8 bg-primary flex flex-col overflow-hidden">
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/3' >
          <Image src={Logo} alt="logo" />
        </div>
        <p className='text-white text-center md:w-1/3 my-8'>
          A Pro Consumidor, startup jurídica, foi criada para ajudar você a garantir compensações justas por problemas e contratempos em suas redes sociais.
        </p>
        <div className='w-1/3'>
          {/* <span className='text-white text-center' >
            Entre em contato:
          </span> */}
        </div>
      </div>
      <span className='text-white text-center text-sm mt-16'>
       Copyright © 2025. Feito por Pro Consumidor
      </span>
    </footer>
  )
}
