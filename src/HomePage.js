import { Outlet, Link } from 'react-router-dom';
import './App.css';
import newmemberimg from './images/newmemberrez.png';
import welcomesign from './images/welcome-clear.png';
import communitysign from './images/tourcommunity.png';

function HomePage() {
  return (
    <div>
      <Link to="/Resources" className="NewMembButton">
        <div className="NewMembResButton">
          <img src={newmemberimg}  alt="New Member Resources" className="new-member-button" />
        </div>
      </Link>
      <Link to="/" className="WelcomeSign">
        <div className="WelcomeText">
          <img src={welcomesign}  alt="Welcome" className="welcome-text" />
        </div>
      </Link>
      <Link to="/" className="OurCommunitySign">
        <div className="OurCommunityTest">
          <img src={communitysign}  alt="OurComminity" className="community-text" />
        </div>
      </Link>
      <Outlet />
    </div>
    
  );
}

export default HomePage;