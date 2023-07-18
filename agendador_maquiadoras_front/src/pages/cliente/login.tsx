import LoginCard from "@/components/logincard"
import Header from "@/components/header"

export default function LoginCliente(){
    return (
        <div>
            <Header></Header>
            <LoginCard props={{'url':'/cliente/pesquisa'}}></LoginCard>
        </div>
    )
}