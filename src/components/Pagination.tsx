const Pagination = ({offset, setOffset, total} : any) => {
    const nextItem = () => {
        setOffset(offset < total ? offset + 10: offset)
    }

    const previousItem = () => {
        setOffset(offset > 0 ? offset - 10 : offset)
    }

  return (
    <div className="flex justify-center items-center py-2">
        <button
            className="button-blue disabled:button-disabled"
            disabled={offset === 0 ? true : false}
            onClick={previousItem}
        >
            Previous
        </button>
        <span className="px-5">
            ... {offset} from {total} ...
        </span>
        <button
            className="button-blue disabled:button-disabled"
            onClick={nextItem}
            disabled={offset < total ? false : true}
        >
            Next
        </button>
    </div>
  )
}

export default Pagination
