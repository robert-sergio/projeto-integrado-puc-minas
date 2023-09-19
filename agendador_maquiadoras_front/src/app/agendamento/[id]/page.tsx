'use client'
import CardAgendaDireita from "@/components/cardagendadireito";
import CardAgendaEsquerdo from "@/components/cardagendaesquerdo";
import SiteHeader from "@/components/header";

import { useParams } from "next/navigation";

import axios from "axios"
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "@/data/contexts/LoginContext"
import { useRouter } from 'next/navigation'

const profissional_object = {
    "foto":""
}

export default function AgendamentoPage(props:any){
    const pageProps = useParams()
    const router = useRouter()
    const { logado } = useContext(LoginContext)
    if (logado === false){
        router.push('/login')
    }


    const [ profissional, setProfissional ] = useState(profissional_object)
    const [ escolhido, setEscolhido ] = useState({'id':''})

    async function GetProfessionalId(id:any){
        const url = 'http://localhost:8000/core/profissionais/?id='+id
        const response = await axios.get(
            url
        ).then((res)=> {
            setProfissional(res.data[0])
        }).catch((err)=>{
            console.log('Error : ', err.response.data.message)
        })     
    }

    useEffect(()=>{
        GetProfessionalId(pageProps.id)
    },[])

    const [ clicado , setClicado ] = useState(false)

    return(
        <div>
            <SiteHeader></SiteHeader>
            <h1 className="px-4 py-2 font-bold text-2xl text-green-900">Dados sobre o atendimento</h1>
            <div className="p-4 flex gap-4">
                <CardAgendaEsquerdo 
                    profissional={profissional} clicado={clicado} setClicado={setClicado}
                    escolhido={escolhido} setEscolhido={setEscolhido}
                />

                {
                    clicado === false?
                        <></>
                    :
                        <CardAgendaDireita 
                            profissional={profissional} escolhido={escolhido}
                        />
                }
            </div>
        </div>
    )
}