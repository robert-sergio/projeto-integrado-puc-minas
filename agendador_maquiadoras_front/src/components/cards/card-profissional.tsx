import FotoRedonda from "../foto-redonda"
import BotaoBege from "../botoes/botao-bege"

export default function CardProfissional(){
    return(
        <div>
            <div className="container card-profissional mt-1">
                <div>
                    <FotoRedonda props={{'img':'/robo1.jpg'}}></FotoRedonda>
                    <div className="nome">MANICURE BOT</div>
                    <div>Estrelas</div>
                </div>

                <div>
                    <div className="profissao">Profissao</div>

                    <div className="mt-1">
                        <div>Ico</div>
                        <div>
                            70 atendimentos realizados
                        </div>
                    </div>

                    <div>
                        <div>Ico</div>
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

                        <div className="mt-2 botao">
                            <BotaoBege props={{'url':'/cliente/agendar', 'text':'Agendar'}}></BotaoBege>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}