export default function CardServicos(){
    return(
        <div className="h-3/5 flex flex-col gap-4">
            <h1>Procedimentos:</h1>
            <div className="bg-white h-full flex flex-col gap-2 p-4 border-2 border-green-900 rounded-md overflow-auto">

                <div className="flex justify-between gap-4">
                    <div className="flex gap-2">
                        <input type="checkbox"></input>
                        <span className="">Serviço</span>
                    </div>
                    <span>R$ 100,00</span>
                </div>

                <div className="flex justify-between gap-4">
                    <div className="flex gap-2">
                        <input type="checkbox"></input>
                        <span className="">Serviço</span>
                    </div>
                    <span>R$ 100,00</span>
                </div>
            </div>
        </div>
    )
}