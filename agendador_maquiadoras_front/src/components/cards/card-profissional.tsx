import FotoRedonda from "../foto-redonda"
import BotaoBege from "../botoes/botao-bege"
import Estrelas from "../infos/estrelas"

export default function CardProfissional(){
    return(
        <div>
            <div className="container card-profissional mt-1">
                <div>
                    <FotoRedonda props={{'img':'/robo1.jpg'}}></FotoRedonda>
                    <div className="nome">MANICURE BOT</div>
                    <Estrelas></Estrelas>
                </div>

                <div>
                    <div className="profissao">Manicure</div>

                    <div className="mt-1">
                        <img src='/smile.png'></img>
                        <div>
                            70 atendimentos realizados
                        </div>
                    </div>

                    <div>
                        <img src='/schedule.png'></img>
                        <div>
                            12 meses na MakeUpMe
                        </div>
                    </div>
                </div>

                <div className="vla"></div>

                <div>
                    <div className="align-left">
                        <div className="text-m">Atende em</div>
                        <div>Cidade dos robôs</div>

                        <div className="text-m mt-1">Especialidade</div>
                        <div>Apertar parafusos</div>

                        <div className="mt-2">
                            <BotaoBege props={{'url':'/cliente/agendar', 'text':'Agendar'}}></BotaoBege>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}