import Link from 'next/link';
import { getAllNews } from '@/lib/news'
import Image from 'next/image'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import newsHeader from '@/public/news-header.jpg'
dayjs.extend(relativeTime)
import cn from 'classnames';
import { getAllTournaments } from '@/lib/tournament';

export default async function Home() {

  const allNews = await getAllNews();
  //const allTournaments = await getAllTournaments();
  /*
  const allMatches = await allTournaments.map(value => value['tournament-matches'].map(child => ({ "tournament-name": value['tournament-name'], ...child }))).flat()
  const OngoingMatches = await allMatches.filter(Item => { return (dayjs().isSame(dayjs(Item['match-time']), 'd')); })
  const UpcomingMatches = await allMatches.filter(Item => { return (dayjs().isBefore(dayjs(Item['match-time']))); }).sort((a, b) => (dayjs(a['match-time']).isAfter(dayjs(b['match-time'])) ? 1 : -1)).slice(0, 3);
  const CompletedMatches = await allMatches.filter(Item => { return (dayjs().isAfter(dayjs(Item['match-time']))); }).sort((a, b) => (dayjs(a['match-time']).isBefore(dayjs(b['match-time'])) ? 1 : -1)).slice(0, 3);

  const OngoingTournaments =  await allTournaments.filter(Item => { return (dayjs().isSame(dayjs(Item['tournament-start-date']), 'd')); })
  const UpcomingTournaments = await allTournaments.filter(Item => { return (dayjs().isBefore(dayjs(Item['tournament-start-date']))); }).sort((a, b) => (dayjs(a['tournament-start-date']).isAfter(dayjs(b['tournament-start-date'])) ? 1 : -1)).slice(0, 3);
  const CompletedTournaments = await allTournaments.filter(Item => { return (dayjs().isAfter(dayjs(Item['tournament-start-date']))); }).sort((a, b) => (dayjs(a['tournament-start-date']).isBefore(dayjs(b['tournament-start-date'])) ? 1 : -1)).slice(0, 3);
  */

  return (
    <div className='grid grid-cols-12 rounded-lg gap-4'>
      <div className='col-span-8 rounded-lg'>
        <div className="flex flex-col w-full gap-8">
          <Link href={'news/' + allNews[0]['news-serial']}>
            <div className='banner flex flex-col bg-cover h-[25vw] rounded-lg' style={{ backgroundImage: `url(${newsHeader.src})` }}>
              <div className="flex-1 ml-6 mt-6 tracking-widest font-bold text-[#BFC3C3]">LATEST NEWS
              </div>
              <div className="flex flex-row pl-6 pb-9 bg-gradient-to-t from-black to-zinc-950/0 rounded-b-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="self-start stroke-2 mt-1">
                  <path d="M21 9.33334C21 7.47683 20.2625 5.69635 18.9497 4.3836C17.637 3.07084 15.8565 2.33334 14 2.33334C12.1435 2.33334 10.363 3.07084 9.05025 4.3836C7.7375 5.69635 7 7.47683 7 9.33334C7 17.5 3.5 19.8333 3.5 19.8333H24.5C24.5 19.8333 21 17.5 21 9.33334Z" stroke="#F1E809" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5" stroke="#F1E809" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex flex-col ml-4">
                  <p className=" font-bold text-2xl">{allNews[0]['news-heading']}</p>
                  <p className="font-semibold text-[#686868] ">Published {dayjs(allNews[0]['news-date']).format('HH:MM')} IST, {dayjs(allNews[0]['news-date']).format('DD.MM.YY')}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className='more-news flex flex-col gap-5'>
            <p className="tracking-widest text-[#BFC3C3]">MORE NEWS</p>
            <div className=" flex flex-col gap-1">
              {allNews?.slice(1, 9)
                .map((Item, index, { length }) => {
                  return (
                    <Link href={'/news/' + Item['news-serial']} key={Item['news-serial']}>
                      <div className={cn('flex flex-row bg-[#2C2C2C] p-6 hover:bg-[#353535] gap-4', (index === 0 ? 'rounded-t-lg' : index === length - 1 ? 'rounded-b-lg' : ''))}>
                        <Image src={newsHeader.src} alt="Thumbnail" height={150} width={150} className="w-[8.5vw] rounded-lg self-center" />
                        <div className="flex flex-col py-1 justify-between w-full">
                          <p className="flex font-semibold text-lg leading-5 w-10/12">{Item['news-heading']}</p>
                          <div className="flex flex-row gap-1 items-center">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="calendar">
                                <path id="Vector" d="M12.6667 3.16666H3.33333C2.59695 3.16666 2 3.76361 2 4.49999V13.8333C2 14.5697 2.59695 15.1667 3.33333 15.1667H12.6667C13.403 15.1667 14 14.5697 14 13.8333V4.49999C14 3.76361 13.403 3.16666 12.6667 3.16666Z" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_2" d="M10.6665 1.83334V4.50001" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_3" d="M5.3335 1.83334V4.50001" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_4" d="M2 7.16666H14" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                            </svg>
                            <p className="text-[#555] font-semibold">{dayjs(Item['news-date']).fromNow()}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-4 rounded-lg'>
        test
        
      </div>
    </div>
  )
}
