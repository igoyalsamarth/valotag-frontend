export async function getAllNews () {
    const data = await fetch(`http://localhost:3000/api/news`,{
      //next: { revalidate: 1 },
      cache: 'no-store',  
  })
    if (!data.ok) {
      throw new Error('failed to fetch data')
    }
    
    return data.json()
  }