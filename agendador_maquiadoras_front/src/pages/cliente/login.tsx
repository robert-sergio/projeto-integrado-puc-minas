import LoginCard from "@/components/cards/logincard"
import Header from "@/components/header-landing"

export default function LoginCliente(){
    return (
        <div>
            <Header></Header>
            <LoginCard props={{'url':'/cliente/pesquisa'}}></LoginCard>
        </div>
    )
}