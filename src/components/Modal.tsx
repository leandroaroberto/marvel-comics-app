import React, { useEffect, useState} from "react";
import { api } from '../api'
import { Md5 } from 'ts-md5'

const TIME_STAMP = Math.floor(Date.now() / 1000)
const HASH = Md5.hashStr(TIME_STAMP + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY)
interface ModalProps {
    showModal : boolean;
    setShowModal : any;
    comicId: number;
}

const Modal = ({showModal, setShowModal, comicId} : ModalProps) => {

  const [selectedComic, setSelectedComic] = useState({})

  useEffect(() => {
    api.get(`/comics/${comicId}?ts=${TIME_STAMP}&apikey=${import.meta.env.VITE_API_PUBLIC_KEY}&hash=${HASH}`)
    .then(function (response: any) {
      setSelectedComic(Object.assign({},response.data.data.results[0]))
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [comicId])

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    { Object.keys(selectedComic).length ? selectedComic.title: ''}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h3 className="text-xl font-semibold">Images</h3>
                    {
                      Object.keys(selectedComic.images).length ? <div className="flex justify-evenly p-4">
                      {
                        selectedComic.images.map(img =>
                          <img src={`${img.path}/portrait_xlarge.${img.extension}`} />
                          )
                      }
                        </div>
                      :
                      '-'
                    }
                  <h3 className="text-xl font-semibold">Creators</h3>
                  {
                    Object.keys(selectedComic.creators.items).length ?
                      <ul className="mx-2">
                        {
                          selectedComic.creators.items.map(item => <li className="list-disc mx-2"> {item.name} </li>)
                        }
                      </ul>
                      :
                      <p>No creators registered.</p>
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal