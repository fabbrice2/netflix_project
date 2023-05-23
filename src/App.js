// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Search from './components/Search';
import { Routes, Route } from "react-router-dom"
import Animes from './menu/Animes'
import Comédie from './menu/Comédie'
import Séries from './menu/Séries'
import Films from './menu/Films'
import Details from './components/Details';
import LandingPage from './components/LandingPage';
import Connexion from './components/Connexion';


function App() {
  return (

  
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Animes" element={<Animes />} />
        <Route path="/Comédie" element={<Comédie />} />
        <Route path="/Séries" element={<Séries />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

    </div>
  );
}


export default App;
