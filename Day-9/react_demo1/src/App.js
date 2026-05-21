
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <br></br><br></br>
      <Routes>
        <Route path='/' element={<h1>Welcome My Child</h1>}></Route>
        <Route path='/about' element={<h1>Welcome About</h1>}></Route>
        <Route path='/contact' element={<h1>Welcome Contact</h1>}></Route>
        <Route path='/women' element={<h1>Welcome Woman</h1>}></Route>
        <Route path='/men' element={<h1>Welcome Man</h1>}></Route>
        <Route path='/shop' element={<h1>Shop Now</h1>}></Route>
        <Route path='/faq' element={<h1>Welcome FAQ</h1>}></Route>
        <Route path='/login' element={<h1>Login Your Self</h1>}></Route>
        <Route path='/signup' element={<h1>Sign Up Your Self</h1>}></Route>
      </Routes>
      <Counter></Counter>
      <Footer></Footer>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
