import React, { useState, useEffect } from 'react'
import { Md5 } from 'ts-md5';
import { api } from '../../api';

const TIME_STAMP = Math.floor(Date.now() / 1000)
const HASH = Md5.hashStr(TIME_STAMP + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY)

interface CharacterResultsProps {
  id : number;
}

const Search = ({setCharacterId} :any) => {
  const [ hero, setHero ] = useState('')
  const [debouncedHero, setDebouncedHero] = useState(hero);

  const searchByHero = (e : any) => {
    setDebouncedHero(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => setHero(debouncedHero), 1000);
    return () => clearTimeout(timer);
}, [debouncedHero])

  useEffect(() => {
    api.get(`/characters?nameStartsWith=${hero}r&limit=10&ts=${TIME_STAMP}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${HASH}`)
    .then(function (response: any) {
      const data = response.data.data.results
      const characterResults = data.reduce(
        (accumulator: number, currentValue: CharacterResultsProps) => currentValue.id,
        0,
      );
      setCharacterId(characterResults)
      console.log('character:', characterResults)
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
          value={debouncedHero}
        />
    </div>
  )
}

export default Search
