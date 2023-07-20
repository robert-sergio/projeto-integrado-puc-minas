export default function Filtros(){
    return(
        <div>
            <div className="header-filter mt-2 container space-between">
                <div className="container start l-marg-20 r-marg-20">
                    <div className="header-filter-field">
                        <p className="texto-select-title">Localidade</p>
                        <select className="header-select">
                            <option value="" selected="selected" disabled="disabled">Cidade do Eixo</option>
                            <option>Lugar Nenhum</option>
                        </select>
                    </div>

                    <div className="vl header-filter-field"></div>

                    <div>
                        <p className="texto-select-title">Especialidade</p>
                        <select className="header-select">
                            <option>Maquiadoras</option>
                        </select>
                    </div>
                </div>

                <div className="container end l-marg-20 r-marg-20">
                    <button>Pesquisar</button>
                </div>
            </div>
        </div>
    )
}