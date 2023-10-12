'use client'
import { useRouter } from "next/navigation";

export default function AddTournament() {
    const router = useRouter()
    return (
        <div className="top-0 left-0 fixed flex w-[100vw] h-[100vh] bg-black/50 justify-center items-center">
            <div className="flex flex-col bg-[#252525] rounded-lg p-6 w-[95%] h-[90%]">
                
            </div>
            <div className="fixed font-light text-4xl right-0 top-0 invisible" onClick={router.back}><p className="cursor-pointer">X</p></div>
        </div>
    );
}