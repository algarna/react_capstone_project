import Logo from '../assets/images/Logo.svg';
import Nav from './Nav';
import '../css/Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={Logo} alt="Logo" width={244} height={66}></img>
            </div>
            <div className='navigation'>
                <Nav></Nav>
            </div>
        </header>
    );
  }

  export default Header;