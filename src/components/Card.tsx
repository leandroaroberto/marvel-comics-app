interface CardProps {
    key: number;
    title: string;
    description: string;
    image: string;
}

function Card(props : CardProps) {
  return (
    <div className="p-6 max-w-4xl bg-white rounded-sm shadow-md flex-col">
        <h2 className="text-center font-bold py-2">{props.title}</h2>
        <img src={props.image}/>
        <p className="text-center font-light py-2">{props.description}</p>
      </div>
  )
}

export default Card