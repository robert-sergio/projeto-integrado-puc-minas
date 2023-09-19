'use client'
import Image from "next/image";

export default function Atendimento(props:any){
    const { dados } = props

    return(
        <div className="flex justify-between gap-4 border-2 rounded-md border-green-900 px-16 py-2 items-center">
            <Image src={dados.profissional.foto} width={100} height={100} alt='' className="rounded-full border-2 border-green-900 h-24 w-24"></Image>
            
            <div className="flex gap-4 flex-1 text-green-900 justify-evenly items-center">

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Profissional</span>
                    <span className="font-semibold text-xl">{dados.profissional.nome}</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Profissao</span>
                    <span className="font-semibold text-xl">{dados.profissional.profissao}</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Cidade Atendimento</span>
                    <span className="font-semibold text-xl">{dados.cidade_atendimento}</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Data e Horario</span>
                    <span className="font-semibold text-xl">{dados.agenda.data} as {dados.agenda.hora}</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Status</span>
                    <span className="font-semibold text-xl">{dados.msg}</span>
                </div>

            </div>

            <button className="px-4 py-1 bg-green-900 text-green-50 rounded-md hover:bg-green-800">
                Cancelar
            </button>

        </div>
    )
}