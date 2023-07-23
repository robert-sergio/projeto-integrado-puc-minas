
export default function HeaderSiteNoFilter({children}){
    return (
        <div>
            <div className='container space-between mt-2'>
                <div className="container start">
                    <div className='textos-header l-marg-20 r-marg-20'> Icone Aqui!</div>
                    <div className='textos-header l-marg-20 r-marg-20'>MakeUpMe</div>
                </div>

                <div className="container end">
                    {children}
                </div>
            </div>
            <div className="hl mt-1"></div>
        </div>
    )
}