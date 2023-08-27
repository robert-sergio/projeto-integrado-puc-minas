import Image from "next/image";

export default function Atendimento(){
    return(
        <div className="flex justify-between gap-4 border-2 rounded-md border-green-900 px-16 py-2 items-center">
            <Image src='/robo1.jpg' width={100} height={100} alt='' className="rounded-full border-2 border-green-900 h-24 w-24"></Image>
            
            <div className="flex gap-4 flex-1 text-green-900 justify-evenly items-center">

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Nome</span>
                    <span className="font-semibold text-2xl">Roo</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Nome</span>
                    <span className="font-semibold text-2xl">Roo</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Nome</span>
                    <span className="font-semibold text-2xl">Roo</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Nome</span>
                    <span className="font-semibold text-2xl">Roo</span>
                </div>

                <div className="flex flex-col justify-between">
                    <span className="font-bold text-sm">Nome</span>
                    <span className="font-semibold text-2xl">Roo</span>
                </div>

            </div>

            <button className="px-4 py-1 bg-green-900 text-green-50 rounded-md hover:bg-green-800">
                Cancelar
            </button>

        </div>
    )
}