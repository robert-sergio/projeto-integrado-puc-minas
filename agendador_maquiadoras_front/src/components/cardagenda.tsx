'use client'

import { useParams } from "next/navigation"
import axios from "axios"
import { JSX, useEffect, useState } from "react"

export default function CardAgenda(props:any){

    class Teste {
      }

    const pageProps = useParams()
    const { id } = pageProps

    const { escolhido, setEscolhido } = props
    const [ selecionado, setSelecionado ] = useState({'className':''})
    const [ agendas, setAgendas ] = useState([])
    
    async function getAgenda(id:any) {
        const url = 'http://127.0.0.1:8000/core/agendas/?profissional='+id
        const response = await axios.get(
            url
        ).then((res)=> {
            setAgendas(res.data)
        }).catch((err)=>{
            console.log('Error : ', err.response.data.message)
        })  
    }

    useEffect(()=>{
        getAgenda(id)
    },[])

    function botaoSelecionado(e:any){
        if ( selecionado.className != '' ){
            selecionado.className = "p-1 border-2 border-green-900 rounded-md"
        }
        e.target.className = "p-1 bg-emerald-300 border-2 text-white font-semibold border-green-900 rounded-md"
        setSelecionado(e.target)
        setEscolhido({'id': e.target.value})
    }

    const Botoes = () => {
            let arr: JSX.Element[] = []
            let final: JSX.Element[] = []

            agendas.map((agenda:any)=>{
                const properties = Object.keys(agenda)
                const property = agenda[properties[0]]
                
                arr.push(<div key={property}>{properties}</div>)

                property.map((p:any)=>{
                    arr.push(
                        p.livre ?
                        <button 
                            key={p.id}
                            value={p.id}
                            onClick={botaoSelecionado}
                            className="p-1 border-2 border-green-900 rounded-md">{p.hora}</button>
                        :
                        <button 
                            key={p.id}
                            className="p-1 bg-slate-400 rounded-md">{p.hora}</button>
                    )
                })

                final.push(
                    <div 
                        key={property[0].id}
                        className="flex flex-col gap-2">
                        {arr}
                    </div>
                    
                )

                    arr = []
                
            })

        
        return final
    }

    return(
        <div className="flex flex-col items-center text-green-900">
            <div className="bg-white border-2 w-full border-green-900 rounded-md border-md flex flex-col items-center justify-center py-4">
                <div className="border-b-2 w-full border-green-900 flex flex-col items-center">
                    <strong>Agenda da Profissional</strong>
                </div>

                <div className="flex gap-2 p-4">
                    {
                        Botoes()
                    }
                </div>
            </div>
        </div>
    )
}