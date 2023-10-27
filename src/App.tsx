//importing the info from card and button tsx
import Card from './Card'
import Button from './Button'

function App() {
  return (
    //returning two cards with a break in between as well as one button
    <>
      <Card text='Hello World'/>
      <br></br>
      <Card text='Hi there'></Card>
      <br></br>
      <Button></Button>
    </>
  );
}

export default App;
