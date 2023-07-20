import HeaderSiteNoFilter from "@/components/header-no-filter"
import CardAgendarEsquerdo from "@/components/cards/card-agendar-esquerdo"

export default function Agendar(){
    return(
        <div>
            <HeaderSiteNoFilter>
                <div className='textos-header l-marg-20 r-marg-20'>Olá, fulano de Tal</div>
                <div className='textos-header l-marg-20 r-marg-20'>Meus Agendamentos</div>
                <div className='textos-header l-marg-20 r-marg-20'>Sair</div>
            </HeaderSiteNoFilter>
            <div className="hl mt-2"></div>

            <div className="container pagecontent">
                <div className="fill-page w-100">
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