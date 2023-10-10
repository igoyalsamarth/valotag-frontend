import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request) {
  let matches;
  try{
  matches = await prisma.matches.findMany({
    include:{
      tournament:{
        select:{
          tournament_organiser: true,
        }
      }
    }
  });
  } catch (error) {
    return new NextResponse(error.message, {status:500});
  }
  return NextResponse.json(matches);
}

export async function POST(request) {
  try {
    const json = await request.json();
    const match = await prisma.matches.create({
      data: json,
    });
    return new NextResponse(JSON.stringify(match), {
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