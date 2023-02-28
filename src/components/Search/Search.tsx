import React, { useState } from 'react'

const Search = () => {
  const [ hero, setHero ] = useState('')

  const searchByHero = (e : any) => {
    setHero(e.target.value);
  }

  return (
    <div className="flex justify-center items-center py-4 mx-5">
        <input
          className="border rounded-md p-2 w-full"
          placeholder="Search for your favorite Marvel hero"
          onChange={searchByHero}
          value={hero}
        />
    </div>
  )
}

export default Search
