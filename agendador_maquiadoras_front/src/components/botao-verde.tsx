
export default function BotaoVerde({props}){
    return (
        <a href={props.url} className='cor-e-texto-botao-verde l-marg-50 r-marg-50' >
            {props.text}
        </a>
    )
}