import CardServicos from "./cardservicos"

export default function CardAgendaDireita(){
    return(
        <div className="bg-orange-100 rounded-md w-1/2 border-2 border-green-900 p-4 flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4 text-green-900">
                <div className="flex gap-16">
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Localidade :</span> 
                        <span className="font-bold text-lg"> Cidade do Eixo </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Atender em :</span> 
                        <span className="font-bold text-lg"> Lugar nenhum </span>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Data Atendimento :</span> 
                        <span className="font-bold text-lg"> 07/01/2024 </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Horario :</span> 
                        <span className="font-bold text-lg"> 10 Am </span>
                    </div>
                </div>

            </div>

            <CardServicos></CardServicos>

            <div className="flex flex-col gap-4 text-green-900">
                <div className="flex flex-col">
                    <span className="font-bold text-sm">Valor Final</span> 
                    <span className="font-bold text-lg"> R$ 100,00 + Deslocamento </span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-sm">Pagando com</span> 
                    <span className="font-bold text-lg"> Visa Final 0123 </span>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="bg-green-900 rounded-md p-1 w-48 text-orange-50">Confirmar agenda</button>
            </div>
        </div>
    )
}