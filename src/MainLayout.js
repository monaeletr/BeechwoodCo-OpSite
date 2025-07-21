import { Outlet, Link } from 'react-router-dom';
import './App.css';
import './index.css'

function MainLayout() {
  return (
    <div className="style">
      <div className="bg"></div>
      
      <Link to="/HomePage" className="home-box">
        <div class="home-text">Home</div>
      </Link>

      <Link to="/AboutCoOps" className="about-box">
        <div class="about-text">About Co-Ops</div>
      </Link>

      <Link to="/ApplicationProcess" className="application-box">
        <div class="application-text">Application Process</div>
      </Link>

      <Link to="/Resources" className="resource-box">
        <div class="resource-text">Resources</div>
      </Link>

      <Link to="/ContactUs" className="contact-box">
        <div class="contact-text">Contact Us</div>
      </Link>
    </div>
  );
}

export default MainLayout;