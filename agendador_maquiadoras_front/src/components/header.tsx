'use client'
import { LoginContext } from "@/data/contexts/LoginContext"
import { IconPerfume } from "@tabler/icons-react"
import Link from "next/link"
import { useContext, useEffect } from "react"

export default function SiteHeader(props:any) {
    const { logado, setLogado, usuario} = useContext(LoginContext)

    return(
        <div className={`
            font-black text-md flex justify-between px-16 py-4
            bg-orange-100 text-green-800
        `}>
            <div className='flex gap-4'>
            <IconPerfume></IconPerfume>
            <Link href='/'>MakeUpMe</Link>
            </div>

            <div  className='flex gap-8 justify-end'>
                {props.children}

                {
                    usuario.nome == ''?
                    ''
                    :
                    <div className="flex gap-8">
                        <span>Bem vindo, {usuario.nome}</span>
                        <Link href='/pesquisa'>
                            <span>Encontre seu Profissional</span>
                        </Link>
                        <Link href='/atendimentos'>
                            <span>Meus agendamentos</span>
                        </Link>
                    </div>
                }

                {                   
                    logado?
                    <Link href='/login' onClick={()=> setLogado(false)}>Sair</Link>
                    : <Link href='/login' >Fazer Login</Link>
                }

            </div>
      </div>
    )
}