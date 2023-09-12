'use client'
import { useState } from "react"

interface servicosProps {
    idprofissional: number
    nome: string
    preco: number
}

export default function CardServicos(props:any){
    const { idprofissional } = props
    const [ servicos, setServicos ] = useState<number>({})

    console.log(idprofissional)

    return(
        <div className="h-3/5 flex flex-col gap-4">
            <h1>Procedimentos:</h1>
            <div className="bg-white h-full flex flex-col gap-2 p-4 border-2 border-green-900 rounded-md overflow-auto">

                <div className="flex justify-between gap-4">
                    <div className="flex gap-2">
                        <input type="checkbox"></input>
                        <span className="">Serviço</span>
                    </div>
                    <span>R$ 100,00</span>
                </div>

            </div>
        </div>
    )
}