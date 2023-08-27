import Atendimento from "./atendimento";

export default function CardAtendimentos(){
    return(
        <div className="bg-orange-100 border-2 rounded-md p-4 flex flex-col gap-4">
            <Atendimento></Atendimento>
        </div>
    )
}