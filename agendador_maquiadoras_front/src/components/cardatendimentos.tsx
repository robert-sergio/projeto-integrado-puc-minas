'use client'
import Atendimento from "./atendimento";
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "@/data/contexts/LoginContext"


export default function CardAtendimentos(){
    const { usuario } = useContext(LoginContext)
    const [ atds, setAtds ] = useState([])

    async function GetAtendimentos(idCliente:number) {
        const url = 'http://127.0.0.1:8000/core/atendimentos/?cliente=1' //+idCliente
        const response = await axios.get(url)
        return response.data
    }

    async function valores() {
        const res = await GetAtendimentos(1) //usuario.id)
        setAtds(res)
    }

    useEffect(()=>{
        valores()
    },[])

    return(
        <div className="bg-orange-100 border-2 rounded-md p-4 flex flex-col gap-4">
        {
            atds.map((atd:any)=>{
                return(
                    <Atendimento key={atd.pk} dados={atd}></Atendimento>
                )
            })
        }
        </div>
    )
}