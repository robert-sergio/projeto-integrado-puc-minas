import Filtros from "./filtros/filtro-header"

export default function HeaderSite({children, props}){
    return (
        <div>
            <div className='container space-between mt-2'>
                <div className="container start">
                    <div className='textos-header l-marg-20 r-marg-20'> Icone Aqui!</div>
                    <div className='textos-header l-marg-20 r-marg-20'>MakeUpMe</div>
                </div>

                <div className="container end">
                    <div className='textos-header l-marg-20 r-marg-20'>Fazer Login</div>
                </div>
            </div>

            <Filtros></Filtros>

        </div>
    )
}