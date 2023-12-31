import Link from 'next/link';
import { getAllNews } from '@/lib/news'
import Image from 'next/image'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import newsHeader from '@/public/news-header.jpg'
dayjs.extend(relativeTime)
import cn from 'classnames';
import { getAllTournaments } from '@/lib/tournament';
import { getAllMatches } from '@/lib/match';

export default async function Home() {

  // const allNews = await getAllNews();
  const allTournaments = await getAllTournaments();
  const allMatches = await getAllMatches();

  const OngoingMatches = await allMatches.filter(Item => { return (dayjs().isSame(dayjs(Item['match_date']), 'd')); })
  const UpcomingMatches = await allMatches.filter(Item => { return (dayjs().isBefore(dayjs(Item['match_date']))); }).sort((a, b) => (dayjs(a['match-time']).isAfter(dayjs(b['match-time'])) ? -1 : 1)).slice(0, 3);
  const CompletedMatches = await allMatches.filter(Item => { return (dayjs().isAfter(dayjs(Item['match_date']))); }).sort((a, b) => (dayjs(a['match-time']).isBefore(dayjs(b['match-time'])) ? 1 : -1)).slice(0, 3);

  const OngoingTournaments = await allTournaments.filter(Item => { return (dayjs().isSame(dayjs(Item['start_date']), 'd')); })
  const UpcomingTournaments = await allTournaments.filter(Item => { return (dayjs().isBefore(dayjs(Item['start_date']))); }).sort((a, b) => (dayjs(a['start_date']).isAfter(dayjs(b['start_date'])) ? 1 : -1)).slice(0, 3);
  const CompletedTournaments = await allTournaments.filter(Item => { return (dayjs().isAfter(dayjs(Item['start_date']))); }).sort((a, b) => (dayjs(a['start_date']).isBefore(dayjs(b['start_date'])) ? 1 : -1)).slice(0, 3);


  return (
    <div className='grid grid-cols-12 rounded-lg gap-4'>
      <div className='col-span-8 rounded-lg'>
        test
      </div>
      <div className='col-span-4 rounded-lg'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex rounded-lg bg-[#2C2C2C] px-4 py-5 gap-2 items-center'>
              <div className='w-[24px] h-[24px] relative'>
                <Image src='/logoValo.png' fill alt='' />
              </div>
              <span className='text-2xl font-bold'>Matches</span>
            </div>
            <div className='flex flex-col gap-1'>
              {[...OngoingMatches, ...UpcomingMatches, ...CompletedMatches]?.map((Item, index, { length }) => {
                return (
                  <Link href={'/matches/' + Item['match-serial']} key={Item['match-serial']}>
                    <div className={cn('flex flex-row gap-2 bg-[#2C2C2C] py-4 px-4 hover:bg-[#353535] items-center justify-between', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                      <div className='flex flex-col gap-2 w-2/3'>
                        <p className='font-semibold text-lg leading-6 line-clamp-2'>{Item['team_one']} <span className='bg-[#393939] text-xs p-[6px] rounded-full'>vs</span> {Item['team_two']}</p>
                        <p className='font-semibold text-[#555] leading-5 truncate'>{Item['tournament']['tournament_organiser']}</p>
                      </div>
                      <div className='justify-center items-center flex'>
                        {dayjs().add(1, 'd').isBefore(dayjs(Item['match_date'])) ?
                          <p className='flex tracking-wide text-xs bg-[#393939] px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                            {dayjs(Item['match_date']).fromNow()}
                          </p> :
                          dayjs().isAfter(dayjs(Item['match_time'])) ?
                            <p className='flex tracking-wide text-xs bg-[#393939] px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                              {dayjs(Item['match_date']).fromNow()}
                            </p> :
                            <p className='flex tracking-wide text-xs bg-red-500 px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                              LIVE
                            </p>
                        }
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className='flex rounded-lg bg-[#2C2C2C] px-4 py-5 gap-2 items-center'>
              <div className='w-[24px] h-[24px] relative'>
                <Image src='/logoValo.png' fill alt='' />
              </div>
              <span className='text-2xl font-bold'>Tournaments</span>
            </div>
            <div className='flex flex-col gap-1'>
              {[...OngoingTournaments, ...UpcomingTournaments, ...CompletedTournaments]?.map((Item, index, { length }) => {
                return (
                  <Link href={'/tournament/' + Item['tournament_organiser']} key={Item['id']}>
                    <div className={cn('flex flex-row gap-2 bg-[#2C2C2C] py-4 px-4 hover:bg-[#353535] items-center justify-between', (length === 1 ? 'rounded-lg' : (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : '')))}>
                      <div className='flex flex-col gap-2 w-2/3'>
                        <p className='font-semibold text-lg leading-5 line-clamp-2'>{Item['tournament_organiser']}</p>
                        <p className='font-semibold text-[#555] leading-5 truncate uppercase'>{dayjs(Item['start_date']).format('MMM DD')} - {dayjs(Item['end_date']).format('MMM DD')}</p>
                      </div>
                      <div className='justify-center flex'>
                        {dayjs().isBefore(dayjs(Item['start_date'])) ?
                          <p className='flex tracking-wide text-xs bg-[#393939] px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                            {dayjs(Item['start_date']).fromNow()}
                          </p> :
                          dayjs().isAfter(dayjs(Item['start_date'])) ?
                            <p className='flex tracking-wide text-xs bg-[#393939] px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                              {dayjs(Item['start_date']).fromNow()}
                            </p> :
                            <p className='flex tracking-wide text-xs bg-red-500 px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                              LIVE
                            </p>
                        }
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
