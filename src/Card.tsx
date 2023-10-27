//importing the css styles to card
import './Card.css'

//creating a prop for the text so I can have a different text on each card
type Props = {
    text?:string
}

const Card = ({text}:Props)=>{
    return (
        //giving the div a class name so I can style it in css
        <>
        <div className='card'>{text}</div>
        </>
    )
}

export default Card;