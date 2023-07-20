import FotoRedonda from "../foto-redonda"
import CardCalendario from "./card-calendario"
import BotaoVerde from "@/components/botoes/botao-verde"

export default function CardAgendarEsquerdo(){
    return (
        <div>
            <div className="container">
                <div>
                    coluna foto
                    <FotoRedonda props={{'img':'/robo3.jpg'}}></FotoRedonda>
                    <div>Estrelas</div>
                    <div>linha</div>
                    <div>preco</div>
                    <div>Dados Atendimento</div>
                    <div>Dados Plataforma</div>
                </div>

                <div>barra vertical</div>

                <div>
                    <div>Nome</div>
                    <div>Social</div>
                    <div>Atende em</div>
                    <div>Especialidades</div>
                    <div>barra horizontal</div>
                    <div>
                        Agenda de MAQUIA BOT
                        <CardCalendario></CardCalendario>
                    </div>
                    <div className="container end mt-1">
                        <BotaoVerde props={{'url':'#','text':'Prosseguir'}}></BotaoVerde>
                    </div>
                </div>
            </div>
        </div>
    )
}