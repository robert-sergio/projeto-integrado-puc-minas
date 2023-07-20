import HeaderSite from "@/components/header-site"
import SideBarLeft from "@/components/sidebar-left"
import CardRealizarLogin from "@/components/cards/card-realizar-login"
import CardProfissional from "@/components/cards/card-profissional"
import Ordernar from "@/components/ordenar"
import CountLocalizados from "@/components/infos/count-localizados"

export default function PesquisaProfissional(){
    return (
        <div>
            <HeaderSite>
                <div>Fazer Login</div>
            </HeaderSite>

            <div className="header-break-line mt-1"></div>

            <section className="container pagecontent">
                <aside className="sidebar">
                    <SideBarLeft></SideBarLeft>
                </aside>
                <section className="pagebody">
                    <Ordernar></Ordernar>
                    <CountLocalizados></CountLocalizados>
                    <CardRealizarLogin></CardRealizarLogin>
                    <CardProfissional></CardProfissional>
                </section>
            </section>
        </div>
    )
}