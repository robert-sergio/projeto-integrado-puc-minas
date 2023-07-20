import BotaoVerde from "../botoes/botao-verde"

export default function LoginCard({props}){
    return(
        <div className="container center mt-8">
            <div>
                <div className="textos-header align-center">Faça seu Login</div>

                <div className="login-card mt-1">
                    <div className="container horizontal">
                        <a href='/cliente/login' className="no-decor w-50 pd-1 textos-header align-center unselected">Sou Cliente</a>
                        <a href='#' className="no-decor w-50 pd-1 textos-header align-center">Sou Profissional</a>
                    </div>

                    <div className="align-center mt-2">
                        <input className="input" type="email" placeholder="Email"></input>
                        <input className="input" type="password" placeholder="Senha"></input>
                    </div>

                    <div className="container center mt-2">
                        <BotaoVerde props={{'url':props.url, 'text':'Entrar'}}></BotaoVerde>
                    </div>

                </div>
            </div>
        </div>
    )
}