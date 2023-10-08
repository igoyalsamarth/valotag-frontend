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

  //const allNews = await getAllNews();
  const allTournaments = await getAllTournaments();
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
      est
      </div>
      <div className='col-span-4 rounded-lg'>
        test
        
      </div>
    </div>
  )
}
