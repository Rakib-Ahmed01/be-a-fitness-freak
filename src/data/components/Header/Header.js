import { Navbar } from 'flowbite-react';
import logo from '../../../images/logo.svg';

const Header = () => {
  return (
    <header className="shadow-sm rounded-sm">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img src={logo} className="h-[50px] sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-cyan-500  -ml-1 dark:text-white">
            Be A Fitness Freak
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active={true}>Home</Navbar.Link>
          <Navbar.Link>About</Navbar.Link>
          <Navbar.Link>Services</Navbar.Link>
          <Navbar.Link>Pricing</Navbar.Link>
          <Navbar.Link>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
