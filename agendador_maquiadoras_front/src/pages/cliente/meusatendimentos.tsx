import HeaderSiteNoFilter from "@/components/header-no-filter"
import CardAtendimentoAgendado from "@/components/cards/card-atendimento-agendado"


export default function MeusAtendimentosCliente(){
    return (
        <div>
            <HeaderSiteNoFilter>
                <div className='textos-header l-marg-20 r-marg-20'>Olá, fulano de Tal</div>
                <div className='textos-header l-marg-20 r-marg-20'>Meus Agendamentos</div>
                <div className='textos-header l-marg-20 r-marg-20'>Sair</div>
            </HeaderSiteNoFilter>
            <div className="container pagecontent">
                <div className="w-100">
                    <div className="textos-header pl-1">Seus Atendimentos</div>
                    <div className="container vertically card-atendimentos mt-1">
                        <div className="textos-header ">Proximos atendimentos</div>
                        <div className="hl mt-1"></div>
                        <CardAtendimentoAgendado></CardAtendimentoAgendado>
                    </div>
                </div>
            </div>
        </div>
    )
}