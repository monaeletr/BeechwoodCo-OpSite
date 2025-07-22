import { Outlet, Link } from 'react-router-dom';
import backgroundImage from './images/realbackground.png';
import './App.css';

function MainLayout() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%"
    }}>
      
      <Link to="/" className="home-box">
        <div className="home-text">Home</div>
      </Link>

      <Link to="/aboutco-ops" className="about-box">
        <div className="about-text">About Co-Ops</div>
      </Link>

      <Link to="/ApplicationProcess" className="application-box">
        <div className="application-text">Application Process</div>
      </Link>

      <Link to="/Resources" className="resource-box">
        <div className="resource-text">Resources</div>
      </Link>

      <Link to="/ContactUs" className="contact-box">
        <div className="contact-text">Contact Us</div>
      </Link>
      <Outlet />
    </div>
  );
}

export default MainLayout;