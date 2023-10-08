import Image from "next/image";

export default async function Footer(){
    return(
        <div className='flex flex-col w-full pt-12 px-10 pb-7 gap-16 bg-[#2C2C2C] rounded-lg'>
          <div className='flex flex-row gap-14'>
            <div className='flex flex-col items-start w-1/6 gap-1'>
              <Image src='/logo.png' height={150} width={150} alt='' />
              <p className='font-bold text-2xl w-[9vw] text-center'>ValoTag</p>
            </div>
            <div className='flex flex-col gap-5'>
              <p>Home</p>
              <p className=''>News</p>
              <p>Matches</p>
              <p>Tournaments</p>
            </div>
            <div className='flex flex-col gap-5'>
              <p>Privacy Policy</p>
              <p className=''>Terms of Use</p>
              <p>About Us</p>
              <p>Editorial Policy</p>
            </div>
            <div className='flex flex-col gap-5'>
              <p>Follow us:</p>
            </div>
            <div className='flex flex-col gap-5'>
              <p>Contact Us:</p>
              <p>contact@valotag.in</p>
            </div>

          </div>
          <p className='flex justify-center text-[#555555]'>Copyright ValoTag 2023. All rights reserved.</p>
        </div>
    );
}