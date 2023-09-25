'use client'
import SiteHeader from "@/components/header";
import { LoginContext } from "@/data/contexts/LoginContext";
import axios from "axios"
import { useState, useContext, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function LoginPage(){
    const router = useRouter()

    const { logado, setLogado } = useContext(LoginContext)
    const { usuario, setUsuario } = useContext(LoginContext)

    const [ loginError, setLoginError ] = useState<boolean>(false)

    const [senha, setSenha] = useState('');
    const handleSenha = (event:any) => {
        setSenha(event.target.value);
    };
    
    const [email, setEmail] = useState('');
    const handleEmail = (event:any) => {
        setEmail(event.target.value);
    };
    
    async function Login(event:any){
        event.preventDefault();
        const data = {
            'email':email,
            'senha':senha
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post(
            'http://localhost:8000/core/logincliente',data, config
        ).then((res)=> {
            setLogado(res.data['authorized'])
            setUsuario({
                nome:res.data['nome'],
                id:res.data['id']
            })
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

                <div className="bg-white border-2 border-green-900 rounded-md p-8">
                    <form onSubmit={Login} className="flex flex-col gap-8 items-center">
                        <h1 className="text-xl font-black">Faça seu Login</h1>
                        <input 
                            type='email'
                            value={email}
                            onChange={handleEmail}
                            className="p-1 border-2 border-green-900 rounded-md" placeholder="Email"></input>
                        
                        <input 
                            type='password'
                            value={senha}
                            onChange={handleSenha}
                            className="p-1 border-2 border-green-900 rounded-md" placeholder="Senha"></input>
                        
                        {
                            loginError?
                            <span className="text-red-600 font-bold">Login ou senha incorretos</span>
                            : ''
                        }

                        <button 
                            type='submit'
                            className="p-1 w-48 rounded-md bg-green-900 text-orange-50"
                            >
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}