import React, { useEffect, useState } from 'react'
function App() {
  const [photos, setPhotos]=useState([])
  const [page, setPage]=useState(1)
  const photosPerPage=9
  const maxVisiblePages=10
  console.log(page,"page")
  const handleNextPage=()=>{
    setPage(page=>page+1)
  }

  const handlePrevPage=()=>{
    setPage(page=>page-1)
  }

const totalPages=Math.ceil(photos.length/page)

const visiblePageNumbers=[]
  const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  for (let i=startPage; i<=endPage;i++){
    visiblePageNumbers.push(i)
  }

  const indexOfLastPhoto=page*photosPerPage ;
  const indexOfFirstPhoto=indexOfLastPhoto-photosPerPage ;
  const currentPhotos=photos.slice(indexOfFirstPhoto,indexOfLastPhoto);



  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(data=>setPhotos(data))
    .catch(error=>console.log("Error: ", error))
  })
  return (
    <div className='grid grid-cols-3 gap-4'>
      {currentPhotos.map(photo=>(
        <div className=''>
          <img src={photo.url} />
          </div>
      ))}
      <div className='flex flex-row gap-2  '>
      <button onClick={handlePrevPage} className='border-2 border-black p-2'>Previous</button>

      {visiblePageNumbers.map(pageNumber=>(
        <button className=' border-2 border-black p-2 rounded-lg ' 
        onClick={()=>setPage(pageNumber)}  >
          {pageNumber}
        </button>
      ))}
      
      <button onClick={handleNextPage} className='border-2 border-black p-2 mr-2'>Next</button>
      </div>
    </div>
  )
}

export default App