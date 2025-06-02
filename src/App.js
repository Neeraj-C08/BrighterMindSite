import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProgramDetails from './pages/programdetails';
import AboutUs from './pages/aboutus';
import Events from './pages/events';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programdetails" element={<ProgramDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
       </Router>
    </div>
  );
}

export default App;
