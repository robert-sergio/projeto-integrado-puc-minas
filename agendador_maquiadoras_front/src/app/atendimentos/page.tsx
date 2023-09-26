'use client'
import CardAtendimentos from "@/components/cardatendimentos";
import SiteHeader from "@/components/header";

export default function Atendimentos() {
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