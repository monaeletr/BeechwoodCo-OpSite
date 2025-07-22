import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from './MainLayout';
import HomePage from './HomePage';
import About from './About';
import ContactUs from './ContactUs';
import ApplicationProcess from './ApplicationProcess';
import Resources from './Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutco-ops" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ApplicationProcess" element={<ApplicationProcess />} />
          <Route path="/Resources" element={<Resources />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;



