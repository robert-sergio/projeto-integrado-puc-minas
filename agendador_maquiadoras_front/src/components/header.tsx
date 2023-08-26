import { IconPerfume } from "@tabler/icons-react"

export default function SiteHeader(props:any) {

    return(
        <div className={`
            font-black text-xl flex justify-between px-16 py-4
            bg-orange-100 text-green-800
        `}>
            <div className='flex gap-4'>
            <IconPerfume></IconPerfume>
            <span>MakeUpMe</span>
            </div>

            <div  className='flex gap-4'>
                {props.children}
            </div>
      </div>
    )
}