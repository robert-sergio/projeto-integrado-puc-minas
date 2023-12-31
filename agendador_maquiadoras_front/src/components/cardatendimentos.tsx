'use client'
import Atendimento from "./atendimento";
import axios from "axios"
import { useState, useEffect, useContext, useCallback } from "react";
import { LoginContext } from "@/data/contexts/LoginContext"
import { IconMoodSad } from "@tabler/icons-react";


export default function CardAtendimentos(){
    const { usuario } = useContext(LoginContext)
    const [ atds, setAtds ] = useState([])
    const [ updtd, setUpdtd ] = useState(false)

    async function GetAtendimentos(idCliente:number) {
        const url = 'https://projeto-integrado-puc-minas-production.up.railway.app/core/atendimentos/?cliente='+idCliente+'&concluido=false'
        return await axios.get(url).then(res =>{
            return res.data
        }).catch( err =>{
            console.log(err)
            return []
        })
    }

    async function valores() {
        const res = await GetAtendimentos(usuario.id)
        setAtds(res)
        setUpdtd(true)
    }

    useEffect(()=>{
        valores()
    },[updtd])

    return(
        <div className="bg-orange-100 border-2 rounded-md p-4 flex flex-col gap-4">
        {
            atds.length === 0?
                <div className="text-green-900 font-bold flex gap-2 text-xl px-4">
                </div>
            :
            atds.map((atd:any)=>{
                return(
                    <Atendimento key={atd.pk} dados={atd} setUpdtd={setUpdtd}></Atendimento>
                )
            })
        }
        </div>
    )
}