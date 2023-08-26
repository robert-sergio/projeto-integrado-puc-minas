import { IconSearch } from "@tabler/icons-react";
import Select from "./select";

export default function FiltroPesquisa(){

    return (
        <div className="flex justify-center items-center gap-16 px-8 py-4 bg-orange-100 border-b-2 border-green-900 w-full">
            <div className="w-4/5 flex gap-2 bg-white px-8 py-2 border rounded-md">
                <Select></Select>
            </div>
            <button className="bg-green-950 border rounded-full p-4 hover:bg-green-900">
                <IconSearch style={{color:"white"}}></IconSearch>
            </button>
        </div>
    )
}