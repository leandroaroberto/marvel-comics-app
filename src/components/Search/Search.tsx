import React, { useState, useEffect } from 'react'
import { Md5 } from 'ts-md5';
import { api } from '../../api';

const TIME_STAMP = Math.floor(Date.now() / 1000)
const HASH = Md5.hashStr(TIME_STAMP + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY)

const Search = ({setCharacterId} : any) => {
  const [ hero, setHero ] = useState('')

  const searchByHero = (e : any) => {
    setHero(e.target.value);
  }

  useEffect(() => {
    api.get(`/characters?nameStartsWith=${hero}r&limit=10&ts=${TIME_STAMP}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${HASH}`)
    .then(function (response: any) {
      //console.log(response.data.data.results);
      const characterResults = response.data.data.results.map((result : any, index : number) => result.id);
      console.log('character:', characterResults[characterResults.length - 1])
      if (response.data.data.results.length) {
        setCharacterId(characterResults[characterResults.length - 1])
      } else {
        setCharacterId(0)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [hero])

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
