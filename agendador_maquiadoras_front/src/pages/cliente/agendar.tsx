import HeaderSiteNoFilter from "@/components/header-no-filter"
import CardAgendarEsquerdo from "@/components/cards/card-agendar-esquerdo"

export default function Agendar(){
    return(
        <div>
            <HeaderSiteNoFilter>
                <div>Olá, fulano de Tal</div>
                <div>Meus Agendamentos</div>
                <div>Sair</div>
            </HeaderSiteNoFilter>
            <div className="header-break-line mt-2"></div>

            <div className="container pagecontent">
                <div className="fill-page">
                    <p>Confirme seu Atendimento</p>
                    <div className="container space-around">
                        <div className="card">
                            <CardAgendarEsquerdo></CardAgendarEsquerdo>
                        </div>
                        <div className="card">
                            Card Direito
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}