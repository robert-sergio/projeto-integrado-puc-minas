'use client'
import { createContext, useState, useEffect } from "react";

interface UsuarioProps{
    nome:string,
    id: number
}


interface LoginContextProps {
    logado: boolean
    setLogado: (logado:boolean) => void
    usuario: UsuarioProps
    setUsuario: ({}:UsuarioProps) => void
}

export const LoginContext = createContext<LoginContextProps>({} as any)

export function LoginProvider(props:any){
    const [logado, setLogado] = useState<boolean>(false)
    const [usuario, setUsuario] = useState({nome:'', id:0})
    
    useEffect(() => {
        const data = window.localStorage.getItem('LOGADO_BOOL');
        if ( data !== null ) setLogado(JSON.parse(data));
    }, [setLogado]);

    useEffect(() => {
        const data = window.localStorage.getItem('DADOS_LOGIN');
        if ( data !== null ) setUsuario(JSON.parse(data));
    }, [setUsuario]);

    useEffect(() => {
        window.localStorage.setItem('LOGADO_BOOL', JSON.stringify(logado));
      }, [logado, setLogado]);

    useEffect(() => {
        window.localStorage.setItem('DADOS_LOGIN', JSON.stringify(usuario));
    }, [usuario, setUsuario]);

    return(
        <LoginContext.Provider value={{logado, setLogado, usuario, setUsuario}}>
            {props.children}
        </LoginContext.Provider>
    )
}