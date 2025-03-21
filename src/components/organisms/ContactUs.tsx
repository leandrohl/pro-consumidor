"use client"

import { useState } from 'react'

import Background from '@/assets/images/background-social-media.jpg'
import Image from 'next/image'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

export default function ContactUs() {
  const [value, setValue] = useState("");

  return (
    <section>
      <div className="relative bg-primary justify-center flex flex-col items-center h-[400px] overflow-hidden">
        <Image src={Background} alt="background" className='opacity-10'/>
        <div className='absolute flex flex-col items-center md:w-2/4 '>
          <h2 className='font-dinamica text-4xl md:text-5xl text-white text-center mb-8 px-4 '> Nosso atendimento é 100% HUMANIZADO focado na especialidade de cada caso. </h2>
          <Button
            variant='primary-outlined'
            className='md:px-12 py-4 text-3xl!'
          >
            Falar com um especialista
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-center my-16'>
        <form className='flex flex-col items-center bg-primary rounded-4xl w-[700px] mx-4 p-8 md:p-16'>
          <h3 className='text-white font-dinamica text-4xl text-center'>
            UM DE NOSSOS ESPECIALISTAS ENTRARÁ EM CONTATO COM VOCÊ
          </h3>
          <div className='flex flex-col gap-4 w-full md:w-3/4 my-8'>
            <Input
              label='Nome completo'
              value={value}
              onChange={setValue}
              placeholder='Nome completo'
            />
            <Input
              label='Whatsapp'
              value={value}
              onChange={setValue}
              placeholder='(00) 00000-0000'
            />
            <Input
              label='Seu melhor e-mail:'
              value={value}
              onChange={setValue}
              placeholder='email@email.com'
            />
            <Input
              label='Rede social'
              value={value}
              onChange={setValue}
              placeholder='Instagram'
            />
            <Input
              label='Conte-nos seu problema:'
              value={value}
              onChange={setValue}
              placeholder='Minha conta foi hackeada'
            />
          </div>
          <Button
            variant='primary-outlined'
            className='rounded-4xl!'
          >
            Enviar para um especialista
          </Button>
        </form>
      </div>
    </section>
  )
}
