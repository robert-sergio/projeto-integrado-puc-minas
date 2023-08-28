'use client'
import { createContext, useState } from "react";

interface LoginContextProps {
    logado: boolean
    setLogado: (logado:boolean) => void
}

export const LoginContext = createContext<LoginContextProps>({} as any)

export function LoginProvider(props:any){
    const [logado, setLogado] = useState<boolean>(false)
    
    return(
        <LoginContext.Provider value={{logado, setLogado}}>
            {props.children}
        </LoginContext.Provider>
    )
}