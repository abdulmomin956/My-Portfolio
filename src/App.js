import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './pages/shared/NavigationBar';
import './pages/shared/custom.css'
import NotFound from './pages/shared/NotFound';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Details from './pages/Details/Details';
import useData from './useData';
import Footer from './pages/shared/Footer';



function App() {
  const [data, isLoading] = useData()
  // console.log(data);
  if (isLoading) {
    return <h1>Loading</h1>
  }
  return (
    <div >
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home data={data}></Home>}></Route>
        <Route path='/home' element={<Home data={data}></Home>}></Route>
        <Route path='/projects' element={<Projects data={data} />}></Route>
        <Route path='/details/:id' element={<Details data={data} />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
