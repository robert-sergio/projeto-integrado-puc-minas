import BotaoBege from "./botao-bege"

export default function CardRealizarLogin(){
    return(
        <div>
            Faça Login para ter acesso aos profissionais de beleza próximos a você
            <BotaoBege props={{'url':'/cliente/login', 'text':'Fazer Login'}}></BotaoBege>
        </div>
    )
}