"use client"

import { useState } from 'react'

import Background from '@/assets/images/background-social-media.jpg'
import Image from 'next/image'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import toast from 'react-hot-toast';
import { ContactSchema } from '@/utils/validations'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formatPhone } from '@/utils/masks'

type ContactFormData = z.infer<typeof ContactSchema>


export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (result.success) {
        toast.success("Mensagem enviada com sucesso!")
        reset()
      } else {
        toast.error("Erro ao enviar mensagem, tente novamente!")
      }
    } catch {
      toast.error("Erro ao enviar mensagem, tente novamente!")
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <section>
      <div className="relative bg-primary justify-center flex flex-col items-center h-[400px] overflow-hidden">
        <Image
          src={Background}
          alt="Plano de fundo decorativo"
          className="opacity-10 h-full object-cover"
          fill
          quality={75}
        />
        <div className='absolute flex flex-col items-center md:w-2/4'>
          <h3 className='font-dinamica text-4xl md:text-5xl text-white text-center mb-8 px-4'>
            Nosso atendimento é 100% HUMANIZADO focado na especialidade de cada caso.
          </h3>
          <Button
            variant='primary-outlined'
            className='md:px-12 py-4 text-3xl!'
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Falar com um especialista
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-center py-16' id="contact-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center bg-primary rounded-2xl md:rounded-4xl w-[700px] mx-4 p-8 md:p-16'
        >
          <span className='text-white font-dinamica text-4xl text-center'>
            UM DE NOSSOS ESPECIALISTAS ENTRARÁ EM CONTATO COM VOCÊ
          </span>
          <div className='flex flex-col gap-4 w-full md:w-3/4 my-8'>
            <Input
              label='Nome completo'
              {...register("name")}
              errorMessage={errors.name?.message}
              placeholder='Nome completo'
            />
            <Input
              label='Whatsapp'
              {...register("whatsapp")}
              errorMessage={errors.whatsapp?.message}
              placeholder='(00) 00000-0000'
              onChange={(e) => setValue("whatsapp", formatPhone(e.target.value))}
            />
            <Input
              label='Seu melhor e-mail:'
              {...register("email")}
              errorMessage={errors.email?.message}
              placeholder='email@email.com'
            />
            <Input
              label='Rede social'
              {...register("socialMedia")}
              errorMessage={errors.socialMedia?.message}
              placeholder='Instagram'
            />
            <Input
              label='Conte-nos seu problema:'
              {...register("problem")}
              errorMessage={errors.problem?.message}
              placeholder='Minha conta foi hackeada'
            />
          </div>
          <Button
            variant='primary-outlined'
            className='rounded-4xl! text-[28px]!'
            type="submit"
            isLoading={isLoading}
          >
            Enviar para um especialista
          </Button>
        </form>
      </div>
    </section>
  )
}
