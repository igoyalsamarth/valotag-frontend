import { Stack } from "@mui/material";
import Image from "next/image";
export default async function Logo(){
    return(
        <Stack direction='row' className="px-4 py-5 items-center gap-2 rounded-lg bg-[#2C2C2C] h-full">
            <Image src='/logo.ico' height={40} width={40} alt="" />
            <p className="text-2xl font-bold">valoTAG</p>
        </Stack>
    );
}