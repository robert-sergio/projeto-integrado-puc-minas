'use client'

import { useEffect, useState } from "react"


export default function Select(props:any){
    const { opcoes, titulo, alterador } = props

    const [selectedItem, setSelectedItem] = useState()

    const handleChange = (e:any) => {
        setSelectedItem(e.target.value)
        alterador(e.target.value)
    }

    useEffect(()=>{
        alterador('todos')
    },[opcoes])
    
    return (
        <div className="flex flex-col px-8">
            <span className="text-xs">{titulo}</span>
            <select name='item-selected' value={selectedItem} onChange={handleChange}>
                {
                    opcoes.map((opcao:any)=>{
                        return <option key={opcao} value={opcao}>{opcao}</option>
                    })
                }
                <option key={'todos'} value={'todos'}>Todas</option>
            </select>
        </div>
    )
}