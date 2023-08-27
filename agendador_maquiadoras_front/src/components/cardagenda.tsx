export default function CardAgenda(){
    return(
        <div className="flex flex-col items-center text-green-900">
            <div className="bg-white border-2 border-green-900 rounded-md border-md flex flex-col items-center justify-center py-4">
                <div className="border-b-2 border-green-900 flex flex-col items-center">
                    <strong>Agenda de Maquiadora</strong>
                    <strong>Janeiro 2024</strong>
                </div>

                <div className="grid grid-cols-7 gap-2 p-4 border-2 border-zinc-400">
                    
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col items-center font-semibold border-b-2 border-zinc-400">
                            <div className="text-sm">Dia</div>
                            <div className="text-xs">Data</div>
                        </div>

                        <button className="p-1 bg-slate-400 rounded-md">8 AM</button>
                        <button className="p-1 border-2 border-green-900 rounded-md">9 AM</button>
                        <button className="p-1 bg-emerald-300 border-2 text-white font-semibold border-green-900 rounded-md">10 AM</button>

                    </div>

                </div>
            </div>
        </div>
    )
}