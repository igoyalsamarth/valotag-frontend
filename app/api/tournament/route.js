import tournaments from '@/data/tournaments.json'
import { NextResponse } from 'next/server'

export async function GET(request) {
  return new NextResponse(JSON.stringify(tournaments.data))
}