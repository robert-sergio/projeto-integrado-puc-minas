'use client'
import { IconSearch } from "@tabler/icons-react";
import Select from "./select";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FiltroPesquisa(props:any){
    const {filtrar} = props

    const [ profissao, setProfissao ] = useState<string>('MANICURE')
    const [ profissoes, setProfissoes] = useState([])

    const [ localidade, setLocalidade ] = useState<string>('rua cazuza ramos')
    const [ localidades, setLocalidades] = useState([])

    async function GetFiltros(){
        const url = 'http://127.0.0.1:8000/core/filtropesquisa/'
        const response = await axios.get(url
            ).then(res=> {
                setProfissoes(res.data.profissoes)
                setLocalidades(res.data.enderecos)
            }
        )
    }

    useEffect(()=>{
        GetFiltros()
    },[])

    console.log()

    return (
        <div className="flex justify-center items-center gap-16 px-8 py-4 bg-orange-100 w-full">
            <div className="w-4/5 flex gap-1 bg-white px-4 py-2 border rounded-md">
                <Select opcoes={profissoes} titulo={'profissao'} alterador={setProfissao}></Select>
                <Select opcoes={localidades} titulo={'localidade'} alterador={setLocalidade}></Select>
            </div>

            <button 
                className="bg-green-950 border rounded-full p-4 hover:bg-green-900"
                onClick={() => filtrar(profissao, localidade)}
            >
                <IconSearch style={{color:"white"}}></IconSearch>
            </button>
        </div>
    )
}