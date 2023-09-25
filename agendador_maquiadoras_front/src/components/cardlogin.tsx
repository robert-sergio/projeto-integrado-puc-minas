import Link from "next/link";

export default function CardLogin(){
    return(
        <div className="p-4 bg-green-900 rounded-md flex justify-between items-center">
            <span className="text-orange-100 font-black">
                Faça Login para ter acesso aos profissionais
            </span>
            <Link href='/login'>
                <button  className="font-bold w-48 bg-orange-100 text-green-900 p-1 rounded-md">Fazer Login</button>
            </Link>
        </div>
    )
}