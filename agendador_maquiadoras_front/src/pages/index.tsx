// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import styles from '@/styles/mine.css'
import Header from '@/components/header-landing'
import FotoRedonda from '@/components/foto-redonda'
import BotaoVerde from '@/components/botao-verde'
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
  return (
    <main className='body'>
      <Header>
      </Header>

      <div className='texto-landing align-center mt-5'>Encontre <br></br> Profissionais de Beleza <br></br> Próximos à voce</div>

      <div className='container center mt-2'>
        <FotoRedonda props={{'img':'img1.jpeg', 'text':'Cabeleireiras'}}></FotoRedonda>
        <FotoRedonda props={{'img':'img2.jpeg', 'text':'Maquiadoras'}}></FotoRedonda>
        <FotoRedonda props={{'img':'img3.jpeg', 'text':'Manicures'}}></FotoRedonda>
        <FotoRedonda props={{'img':'img4.jpeg', 'text':'Estética'}}></FotoRedonda>
      </div>

      <div className='container center mt-2'>
        <BotaoVerde props={{'text':'Agende Agora!', 'url':'/pesquisa'}}></BotaoVerde>
        <BotaoVerde props={{'text':'Sou profissional', 'url':'/profissional/login'}}></BotaoVerde>
      </div>
    </main>
  )
}
