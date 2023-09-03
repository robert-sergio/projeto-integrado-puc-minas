import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconCalendar, IconCalendarFilled, IconMoodSmileFilled, IconStar } from "@tabler/icons-react";
import Image from "next/image";
import CardAgenda from "./cardagenda";

export default function CardAgendaEsquerdo(){

    return(
        <div className="bg-orange-100 rounded-md w-1/2 border-2 border-green-900 p-4 flex text-green-900">

            <div className="w-1/4 border-r-2 border-green-900 flex flex-col items-center justify-center">
                
                <Image src='/robo1.jpg' width={300} height={300} alt=''
                className="w-32 h-32 rounded-full border-2 border-green-900"></Image>
                <strong>Manicure BOT</strong>

                <div className="flex gap-2">
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                </div>

                <strong>
                    A partir de + Deslocamento
                </strong>

                <div className="flex gap-4 items-center justify-center p-2">
                    <IconMoodSmileFilled></IconMoodSmileFilled>
                    <span>100 atendimentos realizados</span>
                </div>

                <div className="flex gap-4 items-center justify-center p-2">
                    <IconCalendarFilled></IconCalendarFilled>
                    <span>10 Meses na MakeUpMe</span>
                </div>

            </div>

            <div className="flex flex-col w-3/4 p-4 gap-4 justify-between">
                <div className="p-4 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <strong>Nome</strong>
                        <strong>Maquiadora</strong>
                    </div>
                    <div className="flex gap-1">
                        <IconBrandFacebook></IconBrandFacebook>
                        <IconBrandInstagram></IconBrandInstagram>
                        <IconBrandWhatsapp></IconBrandWhatsapp>
                    </div>
                    <div className="flex flex-col">
                        <strong>Atende em:</strong>
                        <span>Cidade do Eixo</span>
                    </div>
                    <div className="flex flex-col">
                        <strong>Especialidades</strong>
                        <span>Corte de cabelo, unhas de acrigel, maquiagem</span>
                    </div>
                </div>
                <CardAgenda></CardAgenda>

                <span>Selecionado Data as 10AM </span>

                <div className="flex justify-end">
                    <button className="bg-green-900 rounded-md p-1 w-48 text-orange-50">Prosseguir</button>
                </div>
            </div>

        </div>
    )
}