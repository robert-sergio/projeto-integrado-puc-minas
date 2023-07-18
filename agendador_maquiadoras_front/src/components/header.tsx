
export default function Header({children, props}){
    return (
        <div>
            <div className='container space-between t-marg-20'>
                <div className="container start">
                    <div className='textos-header l-marg-20 r-marg-20'> Icone Aqui!</div>
                    <div className='textos-header l-marg-20 r-marg-20'>MakeUpMe</div>
                    <div className='textos-header l-marg-20 r-marg-20'>Agende seu atendimento</div>
                    <div className='textos-header l-marg-20 r-marg-20'>Atenda na sua região</div>
                </div>

                <div className="container end">
                    {children}
                </div>
            </div>
        </div>
    )
}