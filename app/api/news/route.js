
import news from '@/data/news.json'
import { NextResponse } from 'next/server'

export async function GET(request) {
  return new NextResponse(JSON.stringify(news.data))
}