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
          <div className='border border-green-900 rounded-full overflow-hidden h-40 w-40 flex'>
            <Image src='/cabeleireiras.jpg' width={200} height={200} alt='...'></Image>
          </div>
          <strong>Cabeleireiras</strong>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border border-green-900 rounded-full overflow-hidden h-40 w-40 flex'>
            <Image src='/cabeleireiras.jpg' width={200} height={200} alt='...'></Image>
          </div>
          <strong>Cabeleireiras</strong>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border border-green-900 rounded-full overflow-hidden h-40 w-40 flex'>
            <Image src='/cabeleireiras.jpg' width={200} height={200} alt='...'></Image>
          </div>
          <strong>Cabeleireiras</strong>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border border-green-900 rounded-full overflow-hidden h-40 w-40 flex'>
            <Image src='/cabeleireiras.jpg' width={200} height={200} alt='...'></Image>
          </div>
          <strong>Cabeleireiras</strong>
        </div>

      </div>

      <div className='flex items-center justify-center'>
        <Link className='border rounded-md bg-green-800 text-green-50 p-2' href='/pesquisa'>Agende Agora!</Link>
      </div>

    </main>
  )
}
