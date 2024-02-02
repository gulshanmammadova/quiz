import logo from './images/try.png';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import { Route,Routes } from 'react-router-dom';
import Test from './pages/Quiz/Test';
import Level from './pages/Quiz/Level';
import Topic from './pages/Quiz/Topic';
function App() {
  return (
   <>
    {/* <Header/> */}
    <Routes>
    <Route path='/' element={<HomePage/>}/>

      <Route path='/topic' element={<Topic/>}/>
      <Route path='/level/:topicid' element={<Level/>}/>
      <Route path='/test/:levelid' element={<Test/>}/>

      {/* <Route path='*' element={<Error404/>}/> */}

  </Routes>
  </>
  );
}

export default App;
