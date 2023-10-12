import { getAllMatches } from "@/lib/match";
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(RelativeTime)
import Link from "next/link";
import cn from 'classnames'

export default async function Page() {
    const allMatches = await getAllMatches();

    return (
        <div className="flex flex-col">
            <div className='mb-9 flex flex-row gap-4 justify-center align-middle items-center bg-[#393939] rounded-lg p-6 hover:bg-[#353535]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M24.5 16H8.5M16.5 24L16.5 8" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='text-lg font-semibold text-center'> Add matches</p>
            </div>
            <div className="flex flex-col">
                <p className='tracking-widest text-[#BFC3C3]'>ONGOING</p>
                <div className="flex flex-col mt-4 gap-1">
                    {allMatches
                        .filter(Item => { return (dayjs().isSame(dayjs(Item['match_date']), 'd')); })
                        .map((Item, index, { length }) => {
                            return (
                                <Link href={'./' + Item['match-serial']} key={Item['match-serial']}>
                                    <div className={cn('flex flex-row gap-4 bg-[#2C2C2C] p-6 hover:bg-[#353535] items-center justify-between', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                                        <div className="flex gap-6">
                                            <div className='flex flex-row bg-[#393939] rounded-lg self-center p-3 gap-2'>
                                                <div className='flex flex-col gap-0.5'>
                                                    <img src='/teamLiquidLogo.png' alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                                    <p className='self-center text-xs'>TL</p>
                                                </div>
                                                <p className='self-center text-sm'>vs</p>
                                                <div className='flex flex-col gap-0.5'>
                                                    <img src='/teamLiquidLogo.png' alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                                    <p className='self-center text-xs'>TL</p>
                                                </div>
                                            </div>
                                            <div className='flex py-1'>
                                                <div className='flex flex-col'>
                                                    <p className='flex flex-1 font-semibold text-lg'>{Item['team_one']} vs {Item['team_two']}</p>
                                                    <p className='font-semibold text-[#555]'>{Item['tournament']['tournament_organiser']}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-red-500 rounded-full'>
                                            <p className='tracking-wide text-sm px-2.5 py-1 font-semibold'>LIVE</p>
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
                    {allMatches
                        .filter(Item => {
                            return (dayjs().isBefore(dayjs(Item['match_date'])));
                        })
                        .sort((a, b) => (dayjs(a['match_date']).isAfter(dayjs(b['match_date'])) ? 1 : -1))
                        .map((Item, index, { length }) => {
                            return (
                                <Link href={'./' + Item['match-serial']} key={Item['match-serial']}>
                                    <div className={cn('flex flex-row gap-4 bg-[#2C2C2C] p-6 hover:bg-[#353535] items-center justify-between', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                                        <div className="flex gap-6">
                                            <div className='flex flex-row bg-[#393939] rounded-lg self-center p-3 gap-2'>
                                                <div className='flex flex-col gap-0.5'>
                                                    <img src='/teamLiquidLogo.png' alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                                    <p className='self-center text-xs'>TL</p>
                                                </div>
                                                <p className='self-center text-sm'>vs</p>
                                                <div className='flex flex-col gap-0.5'>
                                                    <img src='/teamLiquidLogo.png' alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                                    <p className='self-center text-xs'>TL</p>
                                                </div>
                                            </div>
                                            <div className='flex py-1'>
                                                <div className='flex flex-col'>
                                                    <p className='flex flex-1 font-semibold text-lg'>{Item['team_one']} vs {Item['team_two']}</p>
                                                    <p className='font-semibold text-[#555]'>{Item['tournament']['tournament_organiser']}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-[#393939] rounded-full'>
                                            <p className='tracking-wide text-sm  px-2.5 py-1 rounded-lg font-semibold'>{dayjs(Item['match_date']).fromNow()}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>COMPLETED</p>
                <div className="flex flex-col mt-4 gap-1">
                    {allMatches
                        .filter(Item => {
                            return (dayjs().isAfter(dayjs(Item['match_date'])));
                        })
                        .sort((a, b) => (dayjs(a['match_date']).isBefore(dayjs(b['match_date'])) ? 1 : -1))
                        .map((Item, index, { length }) => {
                            return (
                                <Link href={'./' + Item['match-serial']} key={Item['match-serial']}>
                                    <div className={cn('flex flex-row gap-4 bg-[#2C2C2C] p-6 hover:bg-[#353535] items-center justify-between', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                                        <div className="flex gap-6">
                                            <div className='flex flex-row bg-[#393939] rounded-lg self-center p-3 gap-2'>
                                                <div className='flex flex-col gap-0.5'>
                                                    <img src='/teamLiquidLogo.png' alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                                    <p className='self-center text-xs'>TL</p>
                                                </div>
                                                <p className='self-center text-sm'>vs</p>
                                                <div className='flex flex-col gap-0.5'>
                                                    <img src='/teamLiquidLogo.png' alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                                    <p className='self-center text-xs'>TL</p>
                                                </div>
                                            </div>
                                            <div className='flex py-1'>
                                                <div className='flex flex-col'>
                                                    <p className='flex flex-1 font-semibold text-lg'>{Item['team_one']} vs {Item['team_two']}</p>
                                                    <p className='font-semibold text-[#555]'>{Item['tournament']['tournament_organiser']}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-[#393939] rounded-full'>
                                            <p className='tracking-wide text-sm px-2.5 py-1 font-semibold'>{dayjs(Item['match_date']).fromNow()}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}