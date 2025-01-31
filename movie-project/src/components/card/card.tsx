interface CardProps {
    title: string,
    image: string;
}
export function Card(title, image : CardProps){
    return (
        <div>
            <img />
            <h2>{title}</h2>
        </div>
    )
}