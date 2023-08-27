import { IconPerfume } from "@tabler/icons-react"
import Link from "next/link"

export default function SiteHeader(props:any) {

    return(
        <div className={`
            font-black text-xl flex justify-between px-16 py-4
            bg-orange-100 text-green-800
        `}>
            <div className='flex gap-4'>
            <IconPerfume></IconPerfume>
            <Link href='/'>MakeUpMe</Link>
            </div>

            <div  className='flex gap-4'>
                {props.children}
            </div>
      </div>
    )
}