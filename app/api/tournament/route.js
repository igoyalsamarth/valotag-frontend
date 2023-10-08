import tournaments from '@/data/tournaments.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(JSON.stringify(tournaments));
}