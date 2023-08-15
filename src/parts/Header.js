import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import '../assets/css/header.css'
import avatar from '../assets/img/avatar.svg';
import Context from '../store/Context';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const { handelLogout, isLoggedIn } = useContext(Context);
    const tokenValue = Cookies.get('token');
    const navigate = useNavigate();

    const actionLogout = () => {
        handelLogout()
        return navigate('/login/');
    }

    return (
        <div>
            <Navbar expand="lg" color="info" container>
                <NavbarBrand to="/">Todo App React</NavbarBrand>
                <Nav className="mr-auto d-flex align-items-center" navbar>
                    {
                        tokenValue ? 
                            <>
                                <NavItem>
                                    <NavLink href="/"><i style={{ fontSize: 20 }} class="fa-solid fa-bell"></i></NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        <img src={avatar} className="rounded-circle" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Change password</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={actionLogout}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </>
                        :
                        <>
                            <NavItem className='me-4'>
                                <Link to="/login/"><i class="fa-solid fa-user"></i> Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/signup/"><i class="fa-solid fa-user-plus"></i> Sign up</Link>
                            </NavItem>
                        </>
                    }
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;