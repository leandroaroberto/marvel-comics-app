interface CardProps {
    title: string;
    image: string;
    onClick : any;
}

function Card({ title, image, onClick } : CardProps) {
  return (
    <div className="border w-80 shadow-lg hover:shadow-blue-600/50 p-6 my-2">
      <h2 className="text-center font-bold py-4">{title}</h2>
      <p className="text-center">
        <img src={image}/>
      </p>
      <p className="text-center font-light py-4">
        <button
          className="border-2 border-sky-100/100 rounded-md text-center bg-sky-500  hover:bg-white hover:text-black text-cyan-50 p-3"
          onClick={onClick}
        >
          More info
        </button>
      </p>
    </div>
  )
}

export default Card