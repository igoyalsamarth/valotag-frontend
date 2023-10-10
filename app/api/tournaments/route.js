import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request) {
  let tournaments;
  try{
  tournaments = await prisma.tournaments.findMany();
  } catch (error) {
    return new NextResponse(error.message, {status:500});
  }
  return NextResponse.json(tournaments);
}

export async function POST(request) {
  try {
    const json = await request.json();
    const tournament = await prisma.tournaments.create({
      data: json,
    });
    console.log(tournament)
    return new NextResponse(JSON.stringify(tournament), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return new NextResponse("Something went rong", { status: 409 });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}