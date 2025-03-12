interface CardProps {
    title: string,
    image: string;
}
export function Card({title, image} : CardProps){
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
        </div>
    )
}