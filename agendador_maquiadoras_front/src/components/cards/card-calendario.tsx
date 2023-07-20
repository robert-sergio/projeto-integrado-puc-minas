
export default function CardCalendario(){
    return(
        <div>
            <div className="container agenda mt-1">
                <div>Agenda 2024</div>
                <div className="container space-around">
                    <div className="column">
                        <div className="head">7/1</div>
                        <div className="data selecionado">8 am</div>
                        <div className="data">10 am</div>
                    </div>

                    <div className="column">
                        <div className="head">8/1</div>
                        <div className="data disponivel">8 am</div>
                        <div className="data indisponivel">10 am</div>
                    </div>

                    <div className="column">
                        <div className="head">9/1</div>
                        <div className="data disponivel">8 am</div>
                        <div className="data indisponivel">10 am</div>
                    </div>

                    <div className="column">
                        <div className="head">10/1</div>
                        <div className="data disponivel">8 am</div>
                        <div className="data indisponivel">10 am</div>
                    </div>

                    <div className="column">
                        <div className="head">11/1</div>
                        <div className="data disponivel">8 am</div>
                        <div className="data indisponivel">10 am</div>
                    </div>

                    <div className="column">
                        <div className="head">12/1</div>
                        <div className="data disponivel">8 am</div>
                        <div className="data indisponivel">10 am</div>
                    </div>

                    <div className="column">
                        <div className="head">13/1</div>
                        <div className="data disponivel">8 am</div>
                        <div className="data indisponivel">10 am</div>
                    </div>

                </div>
            </div>
        </div>
    )
}