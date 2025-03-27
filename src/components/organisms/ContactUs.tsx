"use client"

import { useState } from 'react'

import Background from '@/assets/images/background-social-media.jpg'
import Image from 'next/image'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import toast from 'react-hot-toast';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    socialMedia: "",
    problem: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { name, whatsapp, email, socialMedia, problem } = formData;

      if (!email && !whatsapp) {
        toast.error("Por favor, informe pelo menos um meio de contato: e-mail ou WhatsApp.");
        return;
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          whatsapp,
          socialMedia,
          problem,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Mensagem enviada com sucesso!");
      } else {
        toast.error("Erro ao enviar mensagem, tente novamente!");
      }
    } catch {
      toast.error("Erro ao enviar mensagem, tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section>
      <div className="relative bg-primary justify-center flex flex-col items-center h-[400px] overflow-hidden">
        <Image src={Background} alt="background" className='opacity-10 h-full object-cover'/>
        <div className='absolute flex flex-col items-center md:w-2/4 '>
          <h2 className='font-dinamica text-4xl md:text-5xl text-white text-center mb-8 px-4 '> Nosso atendimento é 100% HUMANIZADO focado na especialidade de cada caso. </h2>
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
          onSubmit={handleSubmit}
          className='flex flex-col items-center bg-primary rounded-2xl md:rounded-4xl w-[700px] mx-4 p-8 md:p-16'
        >
          <h3 className='text-white font-dinamica text-4xl text-center'>
            UM DE NOSSOS ESPECIALISTAS ENTRARÁ EM CONTATO COM VOCÊ
          </h3>
          <div className='flex flex-col gap-4 w-full md:w-3/4 my-8'>
            <Input
              label='Nome completo'
              value={formData.name}
              onChange={(value) => handleChange("name", value)}
              placeholder='Nome completo'
            />
            <Input
              label='Whatsapp'
              value={formData.whatsapp}
              onChange={(value) => handleChange("whatsapp", value)}
              placeholder='(00) 00000-0000'
            />
            <Input
              label='Seu melhor e-mail:'
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              placeholder='email@email.com'
            />
            <Input
              label='Rede social'
              value={formData.socialMedia}
              onChange={(value) => handleChange("socialMedia", value)}
              placeholder='Instagram'
            />
            <Input
              label='Conte-nos seu problema:'
              value={formData.problem}
              onChange={(value) => handleChange("problem", value)}
              placeholder='Minha conta foi hackeada'
            />
          </div>
          <Button
            variant='primary-outlined'
            className='rounded-4xl!'
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
