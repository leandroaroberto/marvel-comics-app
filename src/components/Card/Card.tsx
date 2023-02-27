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
          className="button-blue"
          onClick={onClick}
        >
          More info
        </button>
      </p>
    </div>
  )
}

export default Card