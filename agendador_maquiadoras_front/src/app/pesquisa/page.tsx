'use client'
import CardLogin from "@/components/cardlogin";
import CardProfissional from "@/components/cardprofissional";
import FiltroPesquisa from "@/components/filtropesquisa";
import SiteHeader from "@/components/header";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "@/data/contexts/LoginContext";

import axios from "axios"

interface Profissional {
    id : number
    nome : string 
    email : string
    foto : string 
    profissao : string
    especialidades : [string] 
    endereco : string 
    telefone : string
    whatsapp : string
    instagram : string
    facebook : string
    estrelas : number
    qtd_atds : number
    dt_cadastro : Date
}

interface listaProfissionais {
    profissional: Profissional
}

export default function Pesquisa(){
    const { logado } = useContext(LoginContext)

    const [ listaProfissionais, setProfissionais ] = useState<any>([])

    async function GetProfessional(){
        const response = await axios.get(
            'http://localhost:8000/core/profissionais/'
        ).then((res)=> {
            let listaProfissionais = res.data
            setProfissionais(listaProfissionais)
        }).catch((err)=>{
            console.log('Error : ', err.response.data.message)
        })     

    }

    async function GetProfessionalFiltrado(profissao:string, especialidade:string, localidade:string){
        const url = 'http://localhost:8000/core/profissionais/?profissao='+profissao+'&especialidades='+especialidade+'&endereco='+localidade
        console.log(url)
        const response = await axios.get(
            url
        ).then((res)=> {
            let listaProfissionais = res.data
            setProfissionais(listaProfissionais)
        }).catch((err)=>{
            console.log('Error : ', err.response.data.message)
        })     
    }
    
    useEffect(()=>{
        GetProfessional()
    },[])

    return(
        <div>
            <SiteHeader></SiteHeader>
            <FiltroPesquisa filtrar={GetProfessionalFiltrado}></FiltroPesquisa>
            <div className="p-4 flex justify-center item">
                <div className="flex flex-col w-3/4 gap-4">
                    {
                        logado?
                        <></>
                        :
                        <CardLogin></CardLogin>
                    }

                    {
                        listaProfissionais.map((profissional:any) => {
                            return <CardProfissional key={profissional.id} profissional={profissional}></CardProfissional>
                        })
                    }

                </div>
            </div>
        </div>
    )
}