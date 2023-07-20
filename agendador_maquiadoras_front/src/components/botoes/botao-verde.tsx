
export default function BotaoVerde({props}){
    return (
        <a href={props.url} className='cor-e-texto-botao-verde' >
            {props.text}
        </a>
    )
}