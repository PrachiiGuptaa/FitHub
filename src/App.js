import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/AboutUs/About';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Footer from './Atoms/Footer/Footer';
import TrainersPage from './Atoms/Trainers/TrainerPage/TrainersPage';

function App() {
  return (
    <div>
      <Routes>x
        <Route path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/registration' element={<Registration/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/trainersPage' element={<TrainersPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
