
// import './App.css';
import { Route , Routes } from 'react-router-dom'
import Home from './components/basic/Home';
import Project from './components/basic/Project';
import About from './components/basic/About';
import Contact from './components/basic/Contact';
import "./components/pricing_cards/cards.css"

function App() {
  return (
    <>
   
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/project' element={<Project />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
   </Routes>
    

    </>
  );
}

export default App;
