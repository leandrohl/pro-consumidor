"use client"
import React, { useEffect, useState } from 'react'

import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import Button from '../atoms/Button'

export default function BannerTop() {
  const [logoWidth, setLogoWidth] = useState(250)

  useEffect(() => {
    const handleResize = () => {
      setLogoWidth(window.innerWidth >= 768 ? 313 : 250)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='flex flex-col items-center justify-center w-full h-screen px-4'>
     <Image
        src={Logo}
        alt="Logo da Pro Consumidor"
        width={logoWidth}
        priority
        title="Logo da Pro Consumidor"
      />
      <h1 className='font-dinamica text-5xl md:text-6xl text-primary text-center '>TEVE ALGUM PROBLEMA COM SUAS REDES SOCIAIS?</h1>
      <h2 className='text-center py-4 md:py-10 text-xl'>
        Se preocupar pra que!? Resolvemos pra você!
        <br/>
        Fale com um especialista em direito digital clicando no botão abaixo:
      </h2>
      <a
        href="https://wa.me/5518991931960"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp para solicitar indenização"
      >
        <Button className="px-8 md:px-16 py-2 text-3xl">
          Quero ser indenizado
        </Button>
      </a>
    </section>
  )
}
