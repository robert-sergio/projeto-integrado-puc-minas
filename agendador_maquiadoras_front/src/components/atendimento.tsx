'use client'
import Image from "next/image";
import axios from "axios"

export default function Atendimento(props:any){
    const { dados, setUpdtd } = props

    async function CancelAtd(id:number) {
        const url = 'https://projeto-integrado-puc-minas-production.up.railway.app/core/atendimento/'+id

        const payload = {
            "concluido": true,
            "livre": true
        }
        const response = await axios.patch(url, payload
            ).then(res=> setUpdtd(false))
    }

    return(
        <div className="flex justify-between gap-4 border-2 rounded-md border-green-900 px-16 py-2 items-center">
            <Image src={dados.profissional.foto} width={100} height={100} alt='' className="rounded-full border-2 border-green-900 h-24 w-24"></Image>
            
            <div className="flex gap-4 flex-1 text-green-900 justify-evenly items-center">

                <div className="flex flex-col justify-between">
                    <span className="text-sm">Profissional</span>
                    <span className="font-bold">{dados.profissional.nome}</span>
                    <span className="text-sm">Profissao</span>
                    <span className="font-bold">{dados.profissional.profissao}</span>
                </div>


                <div className="flex flex-col justify-between">
                    <span className="text-sm">Dados do Atendimento</span>
                    <span className="font-bold text-sm">Atender em {dados.cidade_atendimento}</span>
                    <span className="font-bold text-sm">No dia {dados.agenda.data} as {dados.agenda.hora}</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="text-sm">Serviços</span>
                    {
                        dados.servicos.map((serv:any)=>{
                            return(
                                <span key={serv.id} className="font-bold text-sm">{serv.sobre} por R$ {serv.preco}</span>
                        )})
                    }
                    <span className="font-bold text-sm">No total de R$ {dados.valor}</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="text-sm">Status</span>
                    <span className="font-bold">{dados.msg}</span>
                </div>

            </div>

            <button
                onClick={()=>CancelAtd(dados.pk)}
                className="px-4 py-1 bg-green-900 text-green-50 rounded-md hover:bg-green-800">
                Cancelar
            </button>

        </div>
    )
}