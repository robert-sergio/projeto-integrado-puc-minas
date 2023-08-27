import SiteHeader from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className='bg-orange-100 h-screen flex flex-col text-green-800 gap-32'>

      <SiteHeader>
        <span>Agende seu atendimento</span>
      </SiteHeader>

      <div className='flex justify-center'>
        <strong className='text-4xl'>
          Encontre 
          Profissionais de beleza 
          próximos à voce
        </strong>
      </div>

      <div className='flex gap-24 justify-center p-4'>

        <div className='flex flex-col items-center'>
          <div className='border border-green-900 rounded-full overflow-hidden'>
            <Image src='/cabeleireiras.jpg' width={200} height={200} alt='...' className='w-40 hover:w-44 h-40 hover:h-44'></Image>
          </div>
          <strong>Cabeleireiras</strong>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border border-green-900 rounded-full overflow-hidden'>
            <Image src='/estetica.jpg' width={200} height={200} alt='...' className='w-40 hover:w-44 h-40 hover:h-44'></Image>
          </div>
          <strong>Estética</strong>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border border-green-900 rounded-full overflow-hidden'>
            <Image src='/maquiagens.jpg' width={200} height={200} alt='...'  className='w-40 hover:w-44 h-40 hover:h-44'></Image>
          </div>
          <strong>Maquiadoras</strong>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border border-green-900 rounded-full overflow-hidden'>
            <Image src='/manicures.jpg' width={200} height={200} alt='...'  className='w-40 hover:w-44 h-40 hover:h-44'></Image>
          </div>
          <strong>Manicures</strong>
        </div>

      </div>

      <div className='flex items-center justify-center'>
        <Link className='animate-bounce border rounded-md bg-green-800 text-green-50 px-4 py-2' href='/pesquisa'>Agende Agora!</Link>
      </div>

    </main>
  )
}
