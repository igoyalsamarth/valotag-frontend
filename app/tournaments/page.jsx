import { getAllTournaments } from "@/lib/tournament";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)
import Link from "next/link";
import cn from 'classnames';

export default async function Page() {
    const allTournaments = await getAllTournaments();

    return (
        <div className="flex flex-col">
            <div className='mb-9 flex flex-row gap-4 justify-center align-middle items-center bg-[#393939] rounded-lg p-6 hover:bg-[#353535]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M24.5 16H8.5M16.5 24L16.5 8" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='text-lg font-semibold text-center'> Add tournaments</p>
            </div>
            <div className="flex flex-col">
                <p className='tracking-widest text-[#BFC3C3]'>ONGOING</p>
                <div className="flex flex-col mt-4 gap-1">
                    {allTournaments
                        .filter((Item) => {
                            return (dayjs().isBetween(Item['start_date'], Item['end_date'], null, '()'));
                        })
                        .map((Item, index, { length }) => {
                            return (
                                <Link href={"tournaments/" + Item['id']} key={Item['id']}>
                                    <div className={cn('flex flex-row gap-4 bg-[#2C2C2C] p-6 hover:bg-[#353535] items-center', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                                        <div className="self-center bg-[#393939] w-[4.5vw] h-[4.5vw] p-4 rounded-lg">
                                            <img src='/masters.png' alt='logo'></img>
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='flex justify-between text-lg font-semibold'>{Item["tournament_organiser"]}</p>
                                            <div className='flex flex-row gap-10'>
                                                <p className='flex text-[#686868] font-semibold'>₹{Item["prizepool"]}</p>
                                                <p className='text-[#686868] font-semibold'>{dayjs(Item["start_date"]).format('MMM DD')} - {dayjs(Item["end_date"]).format('MMM DD')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>UPCOMING</p>
                <div className="flex flex-col mt-4 gap-1">
                    {allTournaments
                        .filter((Item) => {
                            return (dayjs().isBefore(Item['start_date']));
                        })
                        .map((Item, index, { length }) => {
                            return (
                                <Link href={"tournaments/" + Item['id']} key={Item['id']}>
                                    <div className={cn('flex flex-row gap-4 bg-[#2C2C2C] p-6 hover:bg-[#353535] items-center', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                                        <div className="self-center bg-[#393939] w-[4.5vw] h-[4.5vw] p-4 rounded-lg">
                                            <img src='/masters.png' alt='logo'></img>
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='flex justify-between text-lg font-semibold'>{Item["tournament_organiser"]}</p>
                                            <div className='flex flex-row gap-10'>
                                                <p className='flex text-[#686868] font-semibold'>₹{Item["prizepool"]}</p>
                                                <p className='text-[#686868] font-semibold'>{dayjs(Item["start_date"]).format('MMM DD')} - {dayjs(Item["end_date"]).format('MMM DD')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>COMPLETED</p>
                <div className="flex flex-col mt-4 gap-1">
                    {allTournaments
                        .filter((Item) => {
                            return (dayjs().isAfter(Item['end_date']));
                        })
                        .map((Item, index, { length }) => {
                            return (
                                <Link href={"tournaments/" + Item['id']} key={Item['id']}>
                                    <div className={cn('flex flex-row gap-4 bg-[#2C2C2C] p-6 hover:bg-[#353535] items-center', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                                        <div className="self-center bg-[#393939] w-[4.5vw] h-[4.5vw] p-4 rounded-lg">
                                            <img src='/masters.png' alt='logo'></img>
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='flex justify-between text-lg font-semibold'>{Item["tournament_organiser"]}</p>
                                            <div className='flex flex-row gap-10'>
                                                <p className='flex text-[#686868] font-semibold'>₹{Item["prizepool"]}</p>
                                                <p className='text-[#686868] font-semibold'>{dayjs(Item["start_date"]).format('MMM DD')} - {dayjs(Item["end_date"]).format('MMM DD')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}