import React, { useEffect, useState } from 'react'

function App() {
  const [photos, setPhotos]=useState([])
  const [pages, setPages]=useState(1)
  const currentPhotos=10
  const currentPagesIndex=10

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response=>response.json())
    .then(data=>setPhotos(data))
    .catch(error=>console.log("Error: ", error))
  }, [])

  const handlePrev=()=>{
    setPages(pages=>pages-1)
  }
  const handleNext=()=>{
    setPages(pages=>pages+1)
  }

  let totalPages=photos.length/pages
  let visiblePageNumbers=[]
  const startPageIndex=Math.max(1, (pages-5))
  const endPageIndex=Math.min((pages+5), totalPages)
  for (let i=startPageIndex; i<=endPageIndex; i++){
    visiblePageNumbers.push(i)
  }

const indexOfLastPhoto=pages*currentPhotos
const indexOfFirstPhoto=indexOfLastPhoto-currentPhotos
const indexOfCurrentPhotos=photos.slice(indexOfFirstPhoto, indexOfLastPhoto)

  return (
    <div className='grid grid-cols-5 gap-4 p-5'>
      {indexOfCurrentPhotos.map(photo=>(
        <div>
          <img src={photo.url} /> 
        </div>
      ))}
      <div className='flex flex-row gap-4'>
    <button onClick={handlePrev} className='border-2 border-black p-2 rounded-lg' disabled={pages==1}>Previous</button>
    
    {visiblePageNumbers.map(visiblePages=>(
      <button onClick={()=>setPages(visiblePages)} className={`hover:text-gray-300 p-2 ${visiblePages===pages && "bg-green-400"} rounded-lg border-gray-500 border-2`}>{visiblePages}</button>
    ))}

    <button onClick={handleNext} className='border-2 border-black p-2 rounded-lg' disabled={pages==500}>Next</button>
    </div>
    </div>
  )
}

export default App