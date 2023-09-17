'use client'
import axios from "axios"
import { useEffect, useState } from "react"

interface servicosProps {
    idprofissional: number
    nome: string
    preco: number
}

export default function CardServicos(props:any){
    const { idprofissional, selecionados, setSelecionados, total, setTotal } = props
    const [ servicos, setServicos ] = useState({})
    

    function retrieveServicos(idprofissional:string){
        const url = 'http://127.0.0.1:8000/core/servicos/?profissional='+idprofissional
        const response = axios.get(url
            ).then((res)=>{
                setServicos(res.data)
            })
    }

    useEffect(()=>{
        retrieveServicos(idprofissional)
    }, [])

    function handleLista(serv:any){
        const outrosServicos = selecionados.filter(x => (x.id !== serv.id))
        
        let k = selecionados.some(a => a.id === serv.id)
        if (k===true){
            setSelecionados([...outrosServicos])
        } else {
            setSelecionados([...outrosServicos, serv])
        }
    }

    useEffect(()=>{
        const precos = selecionados.map((v)=>{
            return(
                Number(v.preco)
            )
        })
        
        setTotal(precos.reduce((partialSum, a) => partialSum + a, 0))
        console.log('ok')
    }, [selecionados])


    function Opcoes(){
        let lista = []

        Object.keys(servicos).length === 0 && servicos.constructor === Object ?
        <></>
        :
        lista.push(servicos.map((servico:any)=>{
            return(
                <div 
                    key={servico.id} 
                    className="flex justify-between gap-4"
                >
                    <div className="flex gap-2">
                        <input type="checkbox"
                            value={servico.id}
                            onChange={()=>handleLista(servico)}
                        />
                        <span className="">{servico.especialidade}</span>
                    </div>
                    <span>R$ {servico.preco}</span>
                </div>
            )}))
        return lista
    }
    return(
        <div className="h-3/5 flex flex-col gap-4">
            <h1>Serviços:</h1>
            <div className="bg-white h-full flex flex-col gap-2 p-4 border-2 border-green-900 rounded-md overflow-auto">
            <button onClick={()=> {
                console.log(selecionados)
                console.log(total)
                }}> ver selecionado</button>
            {
                Opcoes()
            }

            </div>
        </div>
    )
}