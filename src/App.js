import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutCoOps from './AboutCoOps';
import ContactUs from './ContactUs';
import ApplicationProcess from './ApplicationProcess';
import Resources from './Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutco-ops" element={<AboutCoOps />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ApplicationProcess" element={<ApplicationProcess />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </Router>
  )
}
export default App;



