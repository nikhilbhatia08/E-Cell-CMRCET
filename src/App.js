import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
