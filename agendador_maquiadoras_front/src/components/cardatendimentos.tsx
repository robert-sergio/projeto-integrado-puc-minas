'use client'
import Atendimento from "./atendimento";
import axios from "axios"
import { useState, useEffect, useContext, useCallback } from "react";
import { LoginContext } from "@/data/contexts/LoginContext"


export default function CardAtendimentos(){
    const { usuario } = useContext(LoginContext)
    const [ atds, setAtds ] = useState([])
    const [ updtd, setUpdtd ] = useState(false)

    async function GetAtendimentos(idCliente:number) {
        const url = 'http://127.0.0.1:8000/core/atendimentos/?cliente='+idCliente+'&concluido=false'
        const response = await axios.get(url)
        return response.data
    }

    async function valores() {
        const res = await GetAtendimentos(usuario.id)
        setAtds(res)
        setUpdtd(true)
    }

    useEffect(()=>{
        valores()
    },[])

    return(
        <div className="bg-orange-100 border-2 rounded-md p-4 flex flex-col gap-4">
        {
            atds.map((atd:any)=>{
                return(
                    <Atendimento key={atd.pk} dados={atd} setUpdtd={setUpdtd}></Atendimento>
                )
            })
        }
        </div>
    )
}