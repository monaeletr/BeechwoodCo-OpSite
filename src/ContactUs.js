import { Outlet, Link } from 'react-router-dom';
import './App.css';
import contactus from './images/contactusimg.png';


function ContactPage() {
  return (
    <div>
      <Link to="/ContactUs" className="ContactUsText">
        <div className="ContactUs">
          <img src={contactus}  alt="." className="contact-us-text" />
        </div>
      </Link>
      {/* <div className="rightSide">

            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter Full Name..." type="text"/>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email"/>
                <label htmlFor="message">Message</label>
                <textarea 
                    rows="6" 
                    placeholder="Enter message..." 
                    name="message" 
                    required
                > 
                </textarea>
                <button type="submit"> Send Message </button>
            </form>
      </div> */}
      <Outlet />
    </div>
    
  );
}

export default ContactPage;