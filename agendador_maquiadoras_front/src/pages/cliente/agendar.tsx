import HeaderSiteNoFilter from "@/components/header-no-filter"
import CardAgendarEsquerdo from "@/components/cards/card-agendar-esquerdo"
import CardAgendarDireito from "@/components/cards/card-agendar-direito"

export default function Agendar(){
    return(
        <div>
            <HeaderSiteNoFilter>
                <div className='textos-header l-marg-20 r-marg-20'>Olá, fulano de Tal</div>
                <div className='textos-header l-marg-20 r-marg-20'>Meus Agendamentos</div>
                <div className='textos-header l-marg-20 r-marg-20'>Sair</div>
            </HeaderSiteNoFilter>

            <div className="container pagecontent">
                <div className="w-100">
                    <div className="textos-header pl-1">Confirme seu Atendimento</div>
                    <div className="container space-around mt-1">
                        <div className="card">
                            <CardAgendarEsquerdo></CardAgendarEsquerdo>
                        </div>
                        <div className="card">
                            <CardAgendarDireito></CardAgendarDireito>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}