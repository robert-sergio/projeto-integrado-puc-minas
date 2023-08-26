import SiteHeader from "@/components/header";

export default function LoginPage(){
    return(
        <div className="bg-orange-100 h-screen flex flex-col text-green-800 gap-32">
            <SiteHeader></SiteHeader>
            <div className="flex justify-center items-center">
                <div className="bg-white border-2 border-green-900 flex flex-col rounded-md p-8 gap-8 items-center">
                    <h1 className="text-xl font-black">Faça seu Login</h1>
                    <input className="p-1 border-2 border-green-900 rounded-md" placeholder="Email"></input>
                    <input className="p-1 border-2 border-green-900 rounded-md" placeholder="Senha"></input>
                    <button className="p-1 w-48 rounded-md bg-green-900 text-orange-50">Entrar</button>
                </div>
            </div>
        </div>
    )
}