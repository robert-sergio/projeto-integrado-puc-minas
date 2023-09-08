'use client'

import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"

export default function CardAgenda(props:any){
    const pageProps = useParams()
    const { id } = pageProps

    const { escolhido, setEscolhido } = props
    const [ agendas, setAgendas ] = useState([])
    const [ selecionado, setSelecionado ] = useState({'className':''})
    
    async function getAgenda(id:any) {
        const url = 'http://127.0.0.1:8000/core/agendas/?profissional='+id
        console.log(url)
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


    return(
        <div className="flex flex-col items-center text-green-900">
            <div className="bg-white border-2 border-green-900 rounded-md border-md flex flex-col items-center justify-center py-4">
                <div className="border-b-2 border-green-900 flex flex-col items-center">
                    <strong>Agenda de Maquiadora</strong>
                    <strong>Janeiro 2024</strong>
                </div>

                <div className="grid grid-cols-7 gap-2 p-4 border-2 border-zinc-400">
                    
                    <div className="flex flex-col gap-1">

                        <div className="flex flex-col items-center font-semibold border-b-2 border-zinc-400">
                            <div className="text-sm">{'agendas'}</div>
                            <div className="text-xs">Data</div>
                        </div>

                        {
                            agendas.map((agenda:any)=>{
                                return (
                                    agenda.livre ?
                                    <button 
                                        value={agenda.id}
                                        onClick={botaoSelecionado}
                                        className="p-1 border-2 border-green-900 rounded-md">{agenda.hora}</button>
                                    :
                                    <button className="p-1 bg-slate-400 rounded-md">{agenda.hora}</button>
                                )
                            })
                        }
                        
                    </div>

                </div>
            </div>
        </div>
    )
}