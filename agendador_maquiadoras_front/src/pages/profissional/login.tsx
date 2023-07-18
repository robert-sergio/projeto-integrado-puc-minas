import LoginCard from "@/components/logincard"
import Header from "@/components/header-landing"

export default function LoginProfissional(){
    return (
        <div>
            <Header></Header>
            <LoginCard props={{'url':'/profissional/perfil'}}></LoginCard>
        </div>
    )
}