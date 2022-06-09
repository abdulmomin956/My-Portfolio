import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './pages/shared/NavigationBar';

function App() {
  return (
    <div >
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
