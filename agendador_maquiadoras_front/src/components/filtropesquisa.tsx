'use client'
import { IconSearch } from "@tabler/icons-react";
import Select from "./select";
import { useState } from "react";

export default function FiltroPesquisa(props:any){
    const {filtrar} = props

    // http://127.0.0.1:8000/core/profissionais/?profissao=MANICURE

    const filtro = {
        titulo: 'Profissao',
        opcoes: [
            'MANICURE', 'MAQUIADORA'
        ]
    }

    const filtro2 = {
        titulo: 'Especialidade',
        opcoes: [
            'Maquiagem Casamento', 'Unha Acrigel'
        ]
    }

    const filtro3 = {
        titulo: 'Localidade',
        opcoes: [
            'rua cazuza ramos', 'barreirinhas'
        ]
    }

    const [ profissao, setProfissao ] = useState<string>('MANICURE')
    const [ especialidade, setEspecialidade ] = useState<string>('Maquiagem Casamento')
    const [ localidade, setLocalidade ] = useState<string>('rua cazuza ramos')

    console.log(localidade)

    return (
        <div className="flex justify-center items-center gap-16 px-8 py-4 bg-orange-100 w-full">
            <div className="w-4/5 flex gap-1 bg-white px-4 py-2 border rounded-md">
                <Select filtro={filtro} opcao={profissao} alterador={setProfissao}></Select>
                <Select filtro={filtro2} opcao={especialidade} alterador={setEspecialidade}></Select>
                <Select filtro={filtro3} opcao={localidade} alterador={setLocalidade}></Select>
            </div>

            <button 
                className="bg-green-950 border rounded-full p-4 hover:bg-green-900"
                onClick={() => filtrar(profissao, especialidade, localidade)}
            >
                <IconSearch style={{color:"white"}}></IconSearch>
            </button>
        </div>
    )
}