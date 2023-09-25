'use client'
import { useEffect, useState, useContext } from "react"
import CardServicos from "./cardservicos"
import axios from "axios"
import { LoginContext } from "@/data/contexts/LoginContext"
import { useRouter } from 'next/navigation'

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
    const [ selecionados, setSelecionados ] = useState([])
    const [ total, setTotal ] = useState(0)
    const { usuario } = useContext(LoginContext)
    const router = useRouter()

    useEffect(()=>{
        const url = 'http://127.0.0.1:8000/core/agenda/'+escolhido.id
        const response = axios.get(url
        ).then((res)=>{
            setAgenda(res.data)
        })
    },[escolhido])

    async function handleSubmit(){
        const url = 'http://127.0.0.1:8000/core/novo_atendimento/'
        const ids = selecionados.map((s:any)=>{
            return (s.id)
        })
        const payload = {
            "profissional": profissional.id,
            "cliente": usuario.id,
            "agenda": agenda.id,
            "servicos": ids,
            "cidade_atendimento": profissional.endereco
        }
        const response = await axios.post(
            url,
            payload
        ).then(res=> {
            router.push('/atendimentos')
        }).catch(err => console.log(err.response.data))
    }

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

            <CardServicos 
                total={total} setTotal={setTotal}
                selecionados={selecionados} setSelecionados={setSelecionados} idprofissional={profissional.id}/>

            <div className="flex flex-col gap-4 text-green-900">
                <div className="flex flex-col">
                    <span className="font-bold text-sm">Valor Final</span> 
                    <span className="font-bold text-lg"> R$ {total}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-sm">Pagando com</span> 
                    <span className="font-bold text-lg"> Visa Final 0123 </span>
                </div>
            </div>

            <div className="flex justify-end">
                {
                    total ===0?
                    <button 
                        className="bg-zinc-500 rounded-md p-1 w-48 text-zinc-300">Confirmar agenda</button>                   
                    :
                    <button 
                        onClick={handleSubmit}
                        className="bg-green-900 rounded-md p-1 w-48 text-orange-50">Confirmar agenda</button>
                }
            </div>
        </div>
    )
}