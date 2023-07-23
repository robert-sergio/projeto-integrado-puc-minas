import FotoRedondaP from "../foto-redonda-p"
import BotaoVerde from "../botoes/botao-verde"

export default function CardAtendimentoAgendado(){
    return (
        <div className="">
            <div className="container space-between atd-resumido w-100">
                <div className="atd-foto col">
                    <FotoRedondaP props={{'img':'/robo3.jpg'}}></FotoRedondaP>
                </div>

                <div className="container space-evenly atd-dados col">
                    <div className="col">
                        <div className="textos-destaque">Nome</div>
                        <div className="textos-descricao">Maquia Bot</div>
                    </div>
                    <div className="col">
                        <div className="textos-destaque">Data Hora</div>
                        <div className="textos-descricao">07/01/2024 10am</div>
                    </div>

                    <div className="col">
                        <div className="textos-destaque">Local</div>
                        <div className="textos-descricao">Cidade do eixo</div>
                    </div>

                    <div className="col">
                        <div className="textos-destaque">Valor</div>
                        <div className="textos-descricao">R$ 100,00</div>
                    </div>

                    <div className="col">
                        <div className="textos-destaque">Status</div>
                        <div className="textos-descricao">Aguardando Confirmacao</div>
                    </div>
                </div>

                <div className="col">
                    <BotaoVerde props={{'url':'', 'text':'Cancelar'}}></BotaoVerde>
                </div>
            </div>
            <div className="hl mt-1"></div>
        </div>
    )
}