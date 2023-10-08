import news from '@/data/news.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({data: news})
}