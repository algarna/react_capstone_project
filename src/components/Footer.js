import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer-content'>
                <div className="logo">

                </div>
                <div className="doormat_navigation">
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Reservations</a>
                        </li>
                        <li>
                            <a href="#">Order Online</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href="#">Address</a>
                        </li>
                        <li>
                            <a href="#">Phone number</a>
                        </li>
                        <li>
                            <a href="#">Email</a>
                        </li>
                    </ul>
                </div>
                <div className="social_media_links">
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }

  export default Footer;