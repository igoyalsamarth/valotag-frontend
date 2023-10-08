import Image from "next/image";
export default async function Logo(){
    return(
        <div className="flex px-4 py-5 items-center gap-2 rounded-lg bg-[#2C2C2C] h-full">
            <Image src='/logo.ico' height={40} width={40} alt="" />
            <p className="text-2xl font-bold">valoTAG</p>
        </div>
    );
}