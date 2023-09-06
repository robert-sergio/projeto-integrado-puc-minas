'use client'
import CardAgendaDireita from "@/components/cardagendadireito";
import CardAgendaEsquerdo from "@/components/cardagendaesquerdo";
import SiteHeader from "@/components/header";

import { useParams } from "next/navigation";

import axios from "axios"
import { useState, useEffect } from "react";

export default function AgendamentoPage(props:any){
    const pageProps = useParams()

    const [ profissional, setProfissional ] = useState()

    async function GetProfessionalId(id:any){
        const url = 'http://localhost:8000/core/profissionais/?id='+id
        console.log(url)
        const response = await axios.get(
            url
        ).then((res)=> {
            setProfissional(res.data[0])
        }).catch((err)=>{
            console.log('Error : ', err.response.data.message)
        })     
    }

    // console.log(pageProps.id)
    useEffect(()=>{
        GetProfessionalId(pageProps.id)
    },[])

    return(
        <div>
            <SiteHeader></SiteHeader>
            <h1 className="px-4 py-2 font-bold text-2xl text-green-900">Dados sobre o atendimento</h1>
            <div className="p-4 flex gap-4">
                <CardAgendaEsquerdo profissional={profissional}></CardAgendaEsquerdo>
                <CardAgendaDireita profissional={profissional}></CardAgendaDireita>
            </div>
        </div>
    )
}