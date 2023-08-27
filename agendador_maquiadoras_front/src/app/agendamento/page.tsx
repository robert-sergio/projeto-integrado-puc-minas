import CardAgendaDireita from "@/components/cardagendadireito";
import CardAgendaEsquerdo from "@/components/cardagendaesquerdo";
import SiteHeader from "@/components/header";

export default function AgendamentoPage(){
    return(
        <div>
            <SiteHeader></SiteHeader>
            <h1 className="px-4 py-2 font-bold text-2xl text-green-900">Dados sobre o atendimento</h1>
            <div className="p-4 flex gap-4">
                <CardAgendaDireita></CardAgendaDireita>
                <CardAgendaEsquerdo></CardAgendaEsquerdo>
            </div>
        </div>
    )
}