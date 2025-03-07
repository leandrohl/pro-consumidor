
import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import Button from './Button'

export default function BannerTop() {
  return (
    <section className='flex flex-col items-center justify-center w-full h-screen'>
      <Image src={Logo} alt='logo' width={313} />
      <h1 className='font-dinamica text-6xl text-primary'>TEVE ALGUM PROBLEMA COM SUAS REDES SOCIAIS?</h1>
      <h2 className='text-center py-10 text-xl'>
        Se preocupar pra que!? Resolvemos pra você!
        <br/>
        Fale com um especialista em direito digital clicando no botão abaixo:
      </h2>
      <Button className='px-16 py-2'>
        Quero ser indenizado
      </Button>
    </section>
  )
}
