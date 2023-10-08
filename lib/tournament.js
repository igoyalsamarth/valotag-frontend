import { endpoint } from "@/util/endpoint"

export async function getAllTournaments () {
    const data = await fetch(`${endpoint}/tournament`,{
      //next: { revalidate: 1 },
      cache: 'no-store',  
  })
    if (!data.ok) {
      throw new Error('failed to fetch data')
    }
    
    return data.json()
  }