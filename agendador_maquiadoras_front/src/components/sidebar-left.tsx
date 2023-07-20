import Mapa from "./filtros/filtro-map"
import FiltroCheckBox from "./filtros/filtro-checkbox"
import FiltroEstrelas from "./filtros/filtro-estrelas"

export default function SideBarLeft(){
    return (
        <div className="container center">
            <div className="container vertically">
                <Mapa></Mapa>
                Filtrar Por
                <div className="header-break-line mt-1"></div>
                <FiltroEstrelas></FiltroEstrelas>
                <div className="header-break-line mt-1"></div>
                <FiltroCheckBox></FiltroCheckBox>
            </div>
        </div>
    )
}