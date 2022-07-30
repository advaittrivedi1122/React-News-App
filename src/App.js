import './App.css';
import Home from './Pages/Home';
import General from './Pages/General';
import Business from './Pages/Business';
import Entertainment from './Pages/Entertainment';
import Health from './Pages/Health';
import Sports from './Pages/Sports';
import Politics from './Pages/Politics';
import Science from './Pages/Science';
import Technology from './Pages/Technology';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/General" element={<General />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Politics" element={<Politics />} />
        <Route path="/Science" element={<Science />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
