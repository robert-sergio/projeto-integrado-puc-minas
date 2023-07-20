import FotoRedonda from "../foto-redonda"
import CardCalendario from "./card-calendario"
import BotaoVerde from "@/components/botoes/botao-verde"
import Estrelas from "../infos/estrelas"

export default function CardAgendarEsquerdo(){
    return (
        <div className="container mt-1">

            <div className="align-center">
                <FotoRedonda props={{'img':'/robo3.jpg'}}></FotoRedonda>
                <Estrelas></Estrelas>
                <div className="hl mt-1"></div>
                <div>A partir de 100 Reais + Deslocamento</div>
                <img src='/smile.png'></img>
                <div>100 atendimentos realizados</div>
                <img src='/schedule.png'></img>
                <div>10 meses na MakeUpMe</div>
            </div>

            <div className="vl ml-1"></div>

            <div className="ml-1">
                <div className="container space-between">
                    <div>MAQUIA BOT</div>
                    <div>Maquiadora</div>
                </div>
                <div>
                    Social
                </div>
                <div>Atende em</div>
                <div>Especialidades</div>
                <div className="hl mt-1"></div>
                <div>Agenda de MAQUIA BOT</div>
                <div className="">
                    <CardCalendario></CardCalendario>
                </div>
                <div className="container end mt-1">
                    <BotaoVerde props={{'url':'#','text':'Prosseguir'}}></BotaoVerde>
                </div>
            </div>
        </div>
    )
}