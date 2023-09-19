'use client'
import { createContext, useState } from "react";

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

    return(
        <LoginContext.Provider value={{logado, setLogado, usuario, setUsuario}}>
            {props.children}
        </LoginContext.Provider>
    )
}