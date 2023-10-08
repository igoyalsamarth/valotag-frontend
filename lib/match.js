export async function getAllMatches () {
    const data = await fetch(`https://${process.env.VERCEL_URL}/api/match`,{
      //next: { revalidate: 1 },
      cache: 'no-store',  
  })
    if (!data.ok) {
      throw new Error('failed to fetch data')
    }
    
    return data.json()
  }