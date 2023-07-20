
export default function FotoRedonda({props}){
    return (
        <div>
          <img className="foto-redonda-g" src={props.img}></img>
          <p className='texto-imgs-landing align-center l-marg-50 r-marg-50'>{props.text}</p>
        </div>
    )
}