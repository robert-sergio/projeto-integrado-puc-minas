
export default function BotaoBege({props}){
    return (
        <a href={props.url} className='cor-e-texto-botao-bege l-marg-50 r-marg-50' >
            {props.text}
        </a>
    )
}