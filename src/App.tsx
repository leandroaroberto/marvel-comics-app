import React, { useEffect, useState } from 'react'
import { api } from './api'
import { Md5 } from 'ts-md5'
import Card from './components/Card'
import Header from './components/Header'
import Search from './components/Search'
import Modal from './components/Modal'

const TIME_STAMP = Math.floor(Date.now() / 1000)
const HASH = Md5.hashStr(TIME_STAMP + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY)


function App() {

  const [showModal, setShowModal] = useState(false);
  const [heroId, setHeroId] = useState(0);
  const [comics, setComics] = useState([])

  useEffect(() => {
    api.get(`/comics?limit=10?ts=${TIME_STAMP}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${HASH}`)
    .then(function (response: any) {
      setComics(response.data.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  const showHeroDetails = (id: number ) => {
    setShowModal(true)
    setHeroId(id)
  }

    return (
      <>
      <Header>
        Marvel Comics App
      </Header>
      <Search/>
      <div className="flex flex-wrap justify-evenly items-center max-w-full py-2 m-5">
      {
        comics.length ? comics.map((comic : any)  =>
        <Card
        key={comic.id}
        title={comic.title}
        image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        onClick={() => showHeroDetails(comic.id)}
        />
        )
        :
        <div className="flex justify-center items-center max-w-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/>
          </div>
      }
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} heroId={heroId}/>
    </>
  )
}

export default App
