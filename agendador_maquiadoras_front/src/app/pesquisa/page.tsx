'use client'
import CardLogin from "@/components/cardlogin";
import CardProfissional from "@/components/cardprofissional";
import FiltroPesquisa from "@/components/filtropesquisa";
import SiteHeader from "@/components/header";
import { useContext } from "react";
import { LoginContext } from "@/data/contexts/LoginContext";
import Link from "next/link";

export default function Pesquisa(){
    const { logado } = useContext(LoginContext)



    return(
        <div>
            <SiteHeader></SiteHeader>
            <FiltroPesquisa></FiltroPesquisa>
            <div className="p-4 flex justify-center item">
                <div className="flex flex-col w-3/4 gap-4">
                    {
                        logado?
                        <></>
                        :
                        <CardLogin></CardLogin>
                    }

                    <CardProfissional></CardProfissional>

                </div>
            </div>
        </div>
    )
}