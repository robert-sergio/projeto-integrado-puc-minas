'use client'
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconCalendar, IconCalendarFilled, IconMoodSmileFilled, IconStar } from "@tabler/icons-react";
import Image from "next/image";
import CardAgenda from "./cardagenda";
import { useState } from "react";
import { IconStarFilled } from "@tabler/icons-react";

export default function CardAgendaEsquerdo(props:any){
    const { profissional, clicado, setClicado, escolhido, setEscolhido } = props

    const blocoEstrelas = () => {
        var arr = []
        for (let i = 1; i < 6; i++) {
            (i <= profissional.estrelas)?
                arr.push(<IconStarFilled key={i}></IconStarFilled>)
            :
                arr.push(<IconStar  key={i}></IconStar>)
        }
        return arr
    }

    return(
        <div className="bg-orange-100 rounded-md w-1/2 border-2 border-green-900 p-4 flex text-green-900">

            <div className="w-1/4 border-r-2 gap-2 border-green-900 flex flex-col items-center justify-center">
                
                {
                    profissional.foto != ""?
                    <Image src={profissional.foto} width={300} height={300} alt='' priority={true}
                    className="w-32 h-32 rounded-full border-2 border-green-900"></Image>
                    :
                    <></>
                }
                <strong>{profissional.nome}</strong>

                <div className="flex gap-2">
                    {
                        blocoEstrelas()
                    }
                </div>

                <div className="flex flex-col items-center justify-center p-2">
                    <span className="font-black text-xl">{profissional.qtd_atds}</span>
                    <span>Atendimentos realizados</span>
                    <IconMoodSmileFilled></IconMoodSmileFilled>
                </div>

            </div>

            <div className="flex flex-col w-3/4 p-4 gap-4 justify-between">
                <div className="p-4 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <strong>{profissional.nome}</strong>
                        <strong>{profissional.profissao}</strong>
                    </div>
                    <div className="flex gap-1">
                        <a href={profissional.facebook}>
                            <IconBrandFacebook></IconBrandFacebook>
                        </a>
                        <a href={profissional.instagram}>
                           <IconBrandInstagram></IconBrandInstagram>
                        </a>
                        <a href={profissional.whatsapp}>
                            <IconBrandWhatsapp></IconBrandWhatsapp>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <strong>Atende em:</strong>
                        <span>{profissional.endereco}</span>
                    </div>
                    <div className="flex flex-col">
                        <strong>Sobre</strong>
                        <span>{profissional.sobre}</span>
                    </div>
                </div>

                <CardAgenda 
                    escolhido={escolhido} setEscolhido={setEscolhido}
                />

                <div className="flex justify-end">
                    {
                        escolhido.id === ''?
                            <></>
                        :
                            <button 
                                onClick={()=> setClicado(!clicado)}
                                className="bg-green-900 rounded-md p-1 w-48 text-orange-50"
                            >
                                Prosseguir
                            </button>
                    }
                </div>
            </div>

        </div>
    )
}