import BotaoBege from "../botoes/botao-bege"

export default function CardRealizarLogin(){
    return(
        <div>
            <div className="container space-between card-requer-login">
                <div className="">
                    Faça Login para ter acesso aos profissionais de beleza próximos a você
                </div>
                <div className="">
                    <BotaoBege props={{'url':'/cliente/login', 'text':'Fazer Login'}}></BotaoBege>
                </div>
            </div>
        </div>
    )
}