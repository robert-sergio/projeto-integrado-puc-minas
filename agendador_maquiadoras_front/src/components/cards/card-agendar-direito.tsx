import BotaoVerde from "../botoes/botao-verde"
import CardProcedimentos from "./card-procedimentos"

export default function CardAgendarDireito(){
    return (
        <div className="container vertically mt-1">
            <div className="textos-header">Dados sobre o Atendimento</div>

            <div className="container mt-1">
                <div>
                    <div className="textos-destaque">Localidade</div>
                    <div className="textos-descricao">Cidade do Eixo</div>
                </div>
                <div className="l-marg-50">
                    <div className="textos-destaque">Atender em:</div>
                    <div className="textos-descricao">Lugar Nenhum</div>
                </div>
            </div>

            <div className="container mt-1">
                <div>
                    <div className="textos-destaque">Data de Atendimento</div>
                    <div className="textos-descricao">07/01/2024</div>
                </div>
                <div className="l-marg-50">
                    <div className="textos-destaque">Horario</div>
                    <div className="textos-descricao">10 Am</div>
                </div>
            </div>

            <div className="mt-1 textos-header">Procedimentos a serem executados</div>

            <div className="w-100">
                <CardProcedimentos></CardProcedimentos>
            </div>

            <div className="mt-1">
                <div className="textos-descricao">Valor Final</div>
                <div className="textos-header">R$ 100,00</div>
                <div className="textos-descricao">Pagando com</div>
                <div className="textos-header">Cartao cadastrado Final 0123</div>
            </div>

            <div className="container end mt-1">
                <BotaoVerde props={{'url':'/cliente/meusatendimentos', 'text':'Confirmar Agenda'}}></BotaoVerde>
            </div>
        </div>
    )
}