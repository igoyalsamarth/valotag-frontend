import SearchIcon from '@mui/icons-material/Search'

export default function Searchbar() {

  return (
    <div className={`flex p-4 bg-[#2C2C2C] h-full rounded-lg items-center justify-between`}>
      <button className='bg-[#252525] rounded-lg w-52 flex items-center p-2 gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z" fill="#F0F5F5" />
        </svg>
        Search
      </button>
      <div className='flex gap-4 items-center'>
        <button variant='text' className='bg-[#FFF] text-lg text-[#252525] font-semibold px-6 py-2 rounded-lg'>Log In</button>
        <button variant='text' className='bg-[#FF4655] text-lg text-[#F0F5F5] font-semibold px-6 py-2 rounded-lg'>Sign Up</button>
      </div>
    </div>
  )
}
