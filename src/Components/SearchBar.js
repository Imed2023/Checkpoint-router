import React from 'react'
import ReactStars from 'react-stars'


function SearchBar({setByname,setByrate}) {
  return (
    <div className='search-bar'>

      <input type="text" placeholder='Search By Name' onChange={(e) => setByname(e.target.value)}/>

      <ReactStars count={5} onChange={(newValue)=>setByrate(newValue)}  size={30}  color2={'#ffd700'} />




    </div>
  )
}

export default SearchBar