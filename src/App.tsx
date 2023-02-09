import React, { useEffect, useState } from 'react'
import { api } from './api'
import { Md5 } from 'ts-md5'
import Card from './components/Card'

const TIME_STAMP = Math.floor(Date.now() / 1000)
const HASH = Md5.hashStr(TIME_STAMP + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY)

function App() {

  const [comics, setComics] = useState([])

  useEffect(() => {
    api.get(`/comics?limit=5?ts=${TIME_STAMP}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${HASH}`)
    .then(function (response: any) {
      setComics(response.data.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  return (
    <>
      <div className="flex justify-between items-center">
        {
          comics.length ? comics.map((comic : any)  =>
            <Card
              key={comic.id}
              title={comic.title}
              description={comic.description}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
            )
          :
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/>
        }
      </div>
    </>
  )
}

export default App
