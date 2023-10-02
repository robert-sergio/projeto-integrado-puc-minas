'use client'
import CardLogin from "@/components/cardlogin";
import CardProfissional from "@/components/cardprofissional";
import FiltroPesquisa from "@/components/filtropesquisa";
import SiteHeader from "@/components/header";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "@/data/contexts/LoginContext";

import axios from "axios"

export default function Pesquisa(){
    const { logado } = useContext(LoginContext)

    const [ listaProfissionais, setProfissionais ] = useState<any>([])

    async function GetProfessional(){
        const response = await axios.get(
            'https://projeto-integrado-puc-minas-production.up.railway.app/core/profissionais/'
        ).then((res)=> {
            setProfissionais(res.data)
        }).catch((err)=>{
            console.log('Error : ', err)
        })

    }

    async function GetProfessionalFiltrado(profissao:string, localidade:string){
        const url = (() =>{
            if ( profissao === 'todos' && localidade === 'todos'){
                return 'https://projeto-integrado-puc-minas-production.up.railway.app/core/profissionais/'
            }
            if ( profissao === 'todos' ){
                return 'https://projeto-integrado-puc-minas-production.up.railway.app/core/profissionais/?endereco='+localidade
            }
            if ( localidade === 'todos'){
                return 'https://projeto-integrado-puc-minas-production.up.railway.app/core/profissionais/?profissao='+profissao
            }
            else { 
                return 'https://projeto-integrado-puc-minas-production.up.railway.app/core/profissionais/?profissao='+profissao+'&endereco='+localidade
            }
        })();

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
                        logado===false?
                        <CardLogin></CardLogin>
                        :
                        <></>
                    }

                    {
                        listaProfissionais.map((profissional:any) => {
                            return (<CardProfissional key={profissional.id} profissional={profissional}></CardProfissional>)
                        })
                    }

                </div>
            </div>
        </div>
    )
}