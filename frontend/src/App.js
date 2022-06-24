import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cont from './Pages/Cont/Cont';
import load from './Pages/Load';
import Load from './Pages/Load';

function App() {
  return (
<>
<Router>
  <Routes>
    <Route path="/" element = { <Home />} />
    <Route path="/Cont" element = { <Cont />} />
    <Route path = '/load' element = {<Load />}></Route>
  </Routes>
  </Router>
</>
  );
}

export default App;
