//importing the info from card and button tsx
import Card from './Card'
import Button from './Button'

function App() {
  return (
    //returning two cards with space in between as well as a button
    <>
    <div className='cards'>
      <Card text='Hello World'/>
      <br></br>
      <Card text='Hi there'></Card>
    </div>
      <br></br>
    <div className='button' >
      <Button></Button>
    </div>
    </>
  );
}

export default App;
