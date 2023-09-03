'use client'
import SiteHeader from "@/components/header";
import { LoginContext } from "@/data/contexts/LoginContext";
import axios from "axios"
import { useState, useContext, useEffect } from "react";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation'

export default function LoginPage(){
    const router = useRouter()

    const { logado, setLogado } = useContext(LoginContext)
    const { nome, setNome } = useContext(LoginContext)

    const [ loginError, setLoginError ] = useState<boolean>(false)

    const [senha, setSenha] = useState('');
    const handleSenha = (event:any) => {
        setSenha(event.target.value);
    };
    
    const [email, setEmail] = useState('');
    const handleEmail = (event:any) => {
        setEmail(event.target.value);
    };
    
    async function Login(){
        const data = {
            'none':'none'
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'email': email, // 'oi@oi.com.br',
                'senha': senha, // 'abc123'
            }
        }
        const response = await axios.post(
            'http://localhost:8000/core/logincliente',data, config
        ).then((res)=> {
            console.log(res.data['nome'])
            setLogado(res.data['authorized'])
            setNome(res.data['nome'])
            setLoginError(false)
            router.push('/pesquisa')
        }).catch((err)=>{
            console.log('Error : ', err.response.data.message)
            setLoginError(true)
        })     

    }

    useEffect(()=>{
        logado?
        router.push('/pesquisa'):
        ''
    },[logado])

   
    return(
        <div className="bg-orange-100 h-screen flex flex-col text-green-800 gap-32">
            <SiteHeader></SiteHeader>
            <div className="flex justify-center items-center">

                <div className="bg-white border-2 border-green-900 flex flex-col rounded-md p-8 gap-8 items-center">
                    <h1 className="text-xl font-black">Faça seu Login</h1>
                    <input 
                        value={email}
                        onChange={handleEmail}
                        className="p-1 border-2 border-green-900 rounded-md" placeholder="Email"></input>
                    
                    <input 
                        value={senha}
                        onChange={handleSenha}
                        className="p-1 border-2 border-green-900 rounded-md" placeholder="Senha"></input>
                    
                    {
                        loginError?
                        <span className="text-red-600 font-bold">Login ou senha incorretos</span>
                        : ''
                    }

                    <button 
                        onClick={() => Login()}
                        type='submit'
                        className="p-1 w-48 rounded-md bg-green-900 text-orange-50"
                        >
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}