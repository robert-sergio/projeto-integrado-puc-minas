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
    const [usuario, setUsuario] =useState({nome:'', id:0})

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE');
        if ( data !== null ) setLogado(JSON.parse(data));
    }, []);

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE_2');
        if ( data !== null ) setUsuario(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(logado));
      }, [logado]);

    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE_2', JSON.stringify(usuario));
    }, [usuario]);      


    return(
        <LoginContext.Provider value={{logado, setLogado, usuario, setUsuario}}>
            {props.children}
        </LoginContext.Provider>
    )
}