import MainNav from './components/MainNav';
import './App.css';
import Canvas from './components/Canvas';
import UncontrolledExample from './components/Carousel'; // Atualizado para o nome do seu componente


function App() {
  return (
    <div className="App">
      <MainNav />
      <header className="">      
      </header>
      <UncontrolledExample /> 
      <Canvas />
    </div>
  );
}

export default App;
