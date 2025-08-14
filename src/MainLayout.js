// import { Outlet, Link } from 'react-router-dom';
// import backgroundImage from './images/realbackground.png';
// import beechwoodLogo from './images/clearbeechwoodlogo.png';
// import './App.css';

// function MainLayout() {
//   return (
//     <div
//       className="main-layout"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//         width: "100%",
//       }}
//     >
//       {/* Logo */}
//       <Link to="/" className="BeechwoodBox">
//         <img src={beechwoodLogo} alt="Beechwood Co-Op" className="top-left-logo" />
//       </Link>

//       {/* Navigation */}
//       <div className="nav-bar">
//         <Link to="/" className="nav-box"><div className="nav-text">Home</div></Link>
//         <Link to="/aboutco-ops" className="nav-box"><div className="nav-text">About Co-Ops</div></Link>
//         <Link to="/ApplicationProcess" className="nav-box"><div className="nav-text">Application Process</div></Link>
//         <Link to="/Resources" className="nav-box"><div className="nav-text">Resources</div></Link>
//         <Link to="/ContactUs" className="nav-box"><div className="nav-text">Contact Us</div></Link>
//       </div>

//       {/* Page content */}
//       <Outlet />
//     </div>
//   );
// }

// export default MainLayout;



// import { Outlet, Link } from 'react-router-dom';
// import backgroundImage from './images/realbackground.png';
// import beechwoodLogo from './images/clearbeechwoodlogo.png';
// import './App.css';

// function MainLayout() {
//   return (
//     <div style={{
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "top center",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//       width: "100%"
//     }}>
      
//       <Link to="/" className="home-box">
//         <div className="home-text">Home</div>
//       </Link>

//       <Link to="/aboutco-ops" className="about-box">
//         <div className="about-text">About Co-Ops</div>
//       </Link>

//       <Link to="/ApplicationProcess" className="application-box">
//         <div className="application-text">Application Process</div>
//       </Link>

//       <Link to="/Resources" className="resource-box">
//         <div className="resource-text">Resources</div>
//       </Link>

//       <Link to="/ContactUs" className="contact-box">
//         <div className="contact-text">Contact Us</div>
//       </Link>
//       <Link to="/" className="BeechwoodBox">
//         <div className="BeechwoodLogo">
//           <img src={beechwoodLogo}  alt="Beechwood Co-Op" className="top-left-logo" />
//         </div>
//       </Link>
//       <Outlet />
//     </div>
//   );
// }

// export default MainLayout;

import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import backgroundImage from './images/realbackground.png';
import beechwoodLogo from './images/clearbeechwoodlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function MainLayout() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Navbar */}
      <Navbar bg="light" expand="lg" fixed="top" style={{ fontFamily: 'inherit', fontSize: '2rem', fontStyle: 'italic'}}>
        <Container fluid className="px-1">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/"className="me-3" style={{ paddingLeft: '2' }}>
            <img
              src={beechwoodLogo}
              alt="Beechwood Co-Op"
              style={{ height: '40px', width: 'auto', transform: 'scale(3.8)', transformOrigin: 'left center' }}
            />
          </Navbar.Brand>

          {/* Hamburger toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutco-ops">About Co-Ops</Nav.Link>
              <Nav.Link as={Link} to="/ApplicationProcess">Application Process</Nav.Link>
              <Nav.Link as={Link} to="/Resources">Resources</Nav.Link>
              <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page content */}
      <div style={{ paddingTop: '80px' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
