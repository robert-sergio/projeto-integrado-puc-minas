import Header from "@/components/header-landing"
import Filtros from "@/components/filtros"
import SideBarLeft from "@/components/sidebar-left"
import CardRealizarLogin from "@/components/card-realizar-login"
import CardProfissional from "@/components/card-pesquisa"

export default function PesquisaProfissional(){
    return (
        <div>
            <Header>
                <div>Fazer Login</div>
            </Header>

            <div>
                Este cara vai ser uma linha
            </div>

            <div>
                Este Background tem que ser branco
                <SideBarLeft></SideBarLeft>
                <CardRealizarLogin></CardRealizarLogin>
                <CardProfissional></CardProfissional>
            </div>
        </div>
    )
}