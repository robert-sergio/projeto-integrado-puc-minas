'use client'
import CardAtendimentos from "@/components/cardatendimentos";
import SiteHeader from "@/components/header";

import { useContext } from "react";
import { LoginContext } from "@/data/contexts/LoginContext"
import { useRouter } from 'next/navigation'

export default function Atendimentos() {
    const router = useRouter()
    const { logado } = useContext(LoginContext)
    if (logado === false){
        router.push('/login')
    }

    return(
        <div>
            <SiteHeader></SiteHeader>
            <h1 className="px-4 py-2 font-bold text-2xl text-green-900">Seus Agendamentos</h1>
            <div className="p-4">
                <CardAtendimentos></CardAtendimentos>
            </div>
        </div>
    )
}