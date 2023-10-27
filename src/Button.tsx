//importing the css styles
import './styles.css'

const Button = ()=>{
    //styling the button
    const styles = {
        backgroundColor: 'black',
        borderRadius: '10px',
        height: '40px',
        width: '200px',
        color: 'white',
    }
    return (
        //returning a button with the styles above
        <>
        <button style={styles} >click me</button>
        </>
    )
}

export default Button;