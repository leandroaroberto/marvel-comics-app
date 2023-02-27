import React, { useEffect, useState } from 'react'
import { api } from './api'
import { Md5 } from 'ts-md5'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Modal from './components/Modal/Modal'
import Footer from './components/Footer/Footer'
import Pagination from './components/Pagination/Pagination'

const TIME_STAMP = Math.floor(Date.now() / 1000)
const HASH = Md5.hashStr(TIME_STAMP + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY)


function App() {

  const [showModal, setShowModal] = useState(false);
  const [comicId, setComicId] = useState(0);
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [comicsTotalCount, setComicsTotalCount] = useState(0);
  //const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    api.get(`/comics?offset=${offset}&limit=10&ts=${TIME_STAMP}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${HASH}`)
    .then(function (response: any) {
      setComics(response.data.data.results);
      //setComicsTotalCount(response.data.data.total);
      setComicsTotalCount(70);
    })
    .catch(function (error) {
      console.log(error);
    });
    // .finally(function () {
    //   setLoadingPage(false)
    // });
  }, [offset])

  const showHeroDetails = (id: number ) => {
    setShowModal(true)
    setComicId(id)
  }

  const showLoadingPage = () => {
    return (
      <div className="flex justify-center items-center max-w-full">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/>
      </div>
    )
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
        image={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
        onClick={() => showHeroDetails(comic.id)}
        />
        )
        :
        showLoadingPage()
      }
      </div>
      {
        comics.length && <Pagination offset={offset} setOffset={setOffset} total={comicsTotalCount}/>
      }
      <Footer/>
      <Modal showModal={showModal} setShowModal={setShowModal} comicId={comicId} />
    </>
  )
}

export default App
