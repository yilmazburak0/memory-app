import './App.css';
import MemoryCards from './components/MemoryCards';
import Navbar from './components/navbar';
import CardsContextProvider from './context/cardsContext';


function App() {
  return (
      <CardsContextProvider>
        <div className="container">
          <Navbar/>
          <div className="card-grid">
            <MemoryCards/>
          </div>
        </div>
    </CardsContextProvider>
  );
}

export default App;
