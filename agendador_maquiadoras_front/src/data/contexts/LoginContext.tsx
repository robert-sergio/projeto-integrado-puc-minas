'use client'
import { createContext, useState } from "react";

interface LoginContextProps {
    logado: boolean
    setLogado: (logado:boolean) => void
    nome: string
    setNome: (nome:string) => void
}

export const LoginContext = createContext<LoginContextProps>({} as any)

export function LoginProvider(props:any){
    const [logado, setLogado] = useState<boolean>(false)
    const [nome, setNome] =useState<string>('')

    return(
        <LoginContext.Provider value={{logado, setLogado, nome, setNome}}>
            {props.children}
        </LoginContext.Provider>
    )
}