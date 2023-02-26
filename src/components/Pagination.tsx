import React, { useState } from 'react'

const Pagination = ({offset, setOffset} : any) => {
    const nextItem = () => {
        setOffset(offset + 10)
    }

    const previousItem = () => {
        setOffset(offset > 0 ? offset - 10 : offset)
    }

  return (
    <div className="flex justify-center py-2">
        <button
            className="button-blue disabled:button-disabled"
            disabled={offset === 0 ? true : false}
            onClick={previousItem}
        >
            Previous
        </button>
        <span className="px-5">
            ...
        </span>
        <button
            className="button-blue"
            onClick={nextItem}
            disabled={false}
        >
            Next
        </button>
    </div>
  )
}

export default Pagination
