import CardLogin from "@/components/cardlogin";
import CardProfissional from "@/components/cardprofissional";
import FiltroPesquisa from "@/components/filtropesquisa";
import SiteHeader from "@/components/header";

export default function Pesquisa(){

    return(
        <div>
            <SiteHeader></SiteHeader>
            <FiltroPesquisa></FiltroPesquisa>
            <div className="p-4 flex justify-center item">
                <div className="flex flex-col w-3/4 gap-4">
                    <CardLogin></CardLogin>
                    <CardProfissional></CardProfissional>
                </div>
            </div>
        </div>
    )
}