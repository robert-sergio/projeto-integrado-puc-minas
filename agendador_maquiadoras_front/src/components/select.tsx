'use client'

import { useEffect, useState } from "react"


export default function Select(props:any){
    const { filtro } = props
    const { opcao, alterador } = props

    const [selectedItem, setSelectedItem] = useState(opcao)

    const handleChange = (e:any) => {
        setSelectedItem(e.target.value)
        alterador(e.target.value)
    }
    
    return (
        <div className="flex flex-col px-8">
            <span className="text-xs">{filtro.titulo}</span>
            <select name='item-selected' value={selectedItem} onChange={handleChange}>
                {
                    filtro.opcoes.map((opcao:any)=>{
                        return <option key={opcao} value={opcao}>{opcao}</option>
                    })
                }
            </select>
        </div>
    )
}