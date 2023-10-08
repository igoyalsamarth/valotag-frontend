import SearchIcon from '@mui/icons-material/Search'

export default function Searchbar() {

  return (
    <div className={`flex p-4 bg-[#2C2C2C] h-full rounded-lg items-center justify-between`}>
      <button className='bg-[#252525] rounded-lg w-52 flex items-center p-2'>
        <SearchIcon className='m-1'/>
        Search
      </button>
      <div className='flex gap-4 items-center'>
      <button variant='text' className='bg-[#FFF] text-lg text-[#252525] font-semibold px-6 py-2 rounded-lg'>Log In</button>
      <button variant='text' className='bg-[#FF4655] text-lg text-[#F0F5F5] font-semibold px-6 py-2 rounded-lg'>Sign Up</button>
      </div>
    </div>
  )
}
