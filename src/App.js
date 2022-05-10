import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home> }>Home</Route>
        <Route path='/home' element={ <Home></Home> }>Home</Route>
        <Route path='/about' element={ <About></About> }>Home</Route>
        <Route path='/login' element={ <Login></Login> }>Home</Route>
      </Routes>

    </div>
  );
}

export default App;
