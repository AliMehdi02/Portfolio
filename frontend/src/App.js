import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cont from './Pages/Cont/Cont';

function App() {
  return (
<>
<Router>
  <Routes>
    <Route path="/" element = { <Home />} />
    <Route path="/Cont" element = { <Cont />} />
  </Routes>
  </Router>
</>
  );
}

export default App;
