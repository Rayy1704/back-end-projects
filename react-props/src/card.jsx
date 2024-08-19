function Card(prop){
    return(
        <div>
            <h1>{prop.name}</h1>
            <p>{prop.description}</p>
        </div>
    )
}

export default Card;