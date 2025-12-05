import './App.css';
import Gamecard from './components/Gamecard';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header tit={"Header"} page1={"Home"} page2={"Info"}/>
    <Gamecard link={store[1].im} tit={store[2].title} gene={store[1].genres}/>
    <h1>Min første react project</h1>
    <p>I dette prosjekte skal jeg lære litt react</p>
    </>
  );
}

export default App;
