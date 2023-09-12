'use client'
import { useEffect, useState } from "react"
import CardServicos from "./cardservicos"
import axios from "axios"

interface agendaProps {
    id: number
    data: string
    hora: string
    livre: boolean
    profissional: number
}

export default function CardAgendaDireita(props:any){
    const { escolhido, profissional } = props
    const [ agenda, setAgenda ] = useState<agendaProps>({})

    useEffect(()=>{
        const url = 'http://127.0.0.1:8000/core/agenda/'+escolhido.id
        const response = axios.get(url
        ).then((res)=>{
            console.log(res.data)
            setAgenda(res.data)
        })
    },[])

    return(
        <div className="bg-orange-100 rounded-md w-1/2 border-2 border-green-900 p-4 flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4 text-green-900">
                <div className="flex gap-16">
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Atender em :</span> 
                        <span className="font-bold text-lg">{profissional.endereco}</span>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Data Atendimento :</span> 
                        <span className="font-bold text-lg">{agenda.data}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Horario :</span> 
                        <span className="font-bold text-lg"> {agenda.hora} </span>
                    </div>
                </div>

            </div>

            <CardServicos idprofissional={profissional.id}/>

            <div className="flex flex-col gap-4 text-green-900">
                <div className="flex flex-col">
                    <span className="font-bold text-sm">Valor Final</span> 
                    <span className="font-bold text-lg"> R$ 100,00 + Deslocamento </span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-sm">Pagando com</span> 
                    <span className="font-bold text-lg"> Visa Final 0123 </span>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="bg-green-900 rounded-md p-1 w-48 text-orange-50">Confirmar agenda</button>
            </div>
        </div>
    )
}