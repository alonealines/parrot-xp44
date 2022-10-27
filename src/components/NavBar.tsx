import { Link } from "react-router-dom"
import { Nav, Logo, Menu } from './NavBar.style';
import logo from '../assets/img/logocolorido.svg';

const NavBar = () => {
  return (
      <Nav className="d-flex justify-content-between align-items-center">
        <Logo to='/'>
          <img src={logo} alt="logo"/>
        </Logo>
        <Menu>
          Olá usuário | <Link to='#'>sair</Link>
        </Menu>
      </Nav>

  )
}

export default NavBar