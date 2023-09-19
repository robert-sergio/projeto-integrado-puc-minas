'use client'
import { IconCalendar, IconMoodSmileFilled, IconStar, IconStarFilled, IconStarsFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useContext } from "react";
import { LoginContext } from "@/data/contexts/LoginContext";
import Link from "next/link";
import ProfissionalProps from "@/model/lista_profissional";

export default function CardProfissional(props: ProfissionalProps){
    const { logado } = useContext(LoginContext)

    const { profissional } = props

    const blocoEstrelas = () => {
        var arr = []
        for (let i = 1; i < 6; i++) {
            (i <= profissional.estrelas)?
                arr.push(<IconStarFilled></IconStarFilled>)
            :
                arr.push(<IconStar></IconStar>)
        }
        return arr
    }

    return(
        <div className="flex border-2 border-green-900 rounded-md bg-orange-100 p-4">
            <div className="flex flex-col justify-center items-center">
                <Image src={profissional.foto} width={300} height={300} alt=''
                className="rounded-full w-32 h-32 border-2 border-green-900"></Image>
                <div className="flex flex-col items-center gap-1">
                    <strong className="text-xl font-black text-green-900">{profissional.nome}</strong>
                    <strong className="text-green-800">{profissional.profissao}</strong>
                    <div className="flex gap-1 text-green-900">
                        {
                            blocoEstrelas()
                        }
                    </div>

                </div>
            </div>
            
            <div className="px-4 flex flex-col justify-center gap-4 font-black text-green-900 border-r-2 border-green-900 items-center">
                <div className="flex gap-4">
                    <IconMoodSmileFilled></IconMoodSmileFilled>
                    <span>{profissional.qtd_atds} atendimentos realizados</span>
                </div>
                <div className="flex gap-4">
                    <IconCalendar></IconCalendar>
                    <span>12 meses na MakeUpMe</span>
                </div>
            </div>
            
            <div className="px-4 flex flex-col text-green-900 justify-center gap-4">
                <div className="flex flex-col gap-4">
                    <strong>Atende em :</strong>
                    <span>{profissional.endereco}</span>

                    <strong>Especialidades :</strong>
                    <span>{profissional.especialidades}</span>
                </div>

                <Link href={logado? '/agendamento/' + profissional.id:'/login'}>
                    <button className="w-48 bg-green-900 border-2 rounded-md p-1 text-orange-50">
                        Agendar
                    </button>
                </Link>

            </div>
        </div>
    )
}