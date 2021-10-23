import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.png";
import { Doctors, Patients, Pharmacy, Pages, Blog, Admin } from "./NavDisplayContent";
import './navbar.css';

export default function HeadNav() {

    function MakeChildDropDownMenu(props) {
        return (
            <>
                <NavDropdown.Item><Link to={props.link} className='NavLink'>{props.dropItem}</Link></NavDropdown.Item>
            </>
        );
    }

    function MakeDropDownMenu(props) {
        const [show, setShow] = useState(false);
        const showDropdown = (e) => {
            console.log(e);
            setShow(!show);
        }
        const hideDropdown = (e) => {
            setShow(false);
        }
        if (props.sideData.length > 0) {
            return (
                <>
                    <NavDropdown title={
                        <span className="NavLink">{props.dropItem}</span>
                    }
                        id="navbarScrollingDropdown"
                        show={show}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                        className='NavLink'>
                        {props.sideData.map(MakeChildDropDownMenu)}
                    </NavDropdown>
                </>
            );
        }
        else {
            return (
                <>
                    <NavDropdown.Item><Link to={props.link} className='NavLink'>{props.dropItem}</Link></NavDropdown.Item>
                </>
            );
        }
    }

    function DropDown(props) {
        const [show, setShow] = useState(false);
        const showDropdown = (e) => {
            console.log(e);
            setShow(!show);
        }
        const hideDropdown = (e) => {
            setShow(false);
        }
        return (
            <>
                <NavDropdown title={
                    <span className="NavLink">{props.title}</span>
                }
                    id="navbarScrollingDropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                    className='NavLink'>
                    {props.navItems.map(MakeDropDownMenu)}
                </NavDropdown>
            </>
        );
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <div className='Navbar'>
                    <div className='NavLeft'>
                        <img src={logo} className="logoImg" alt="" />
                    </div>
                    <div className='NavCenter'>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link className="navbarHome"><Link to='/' className='NavLink'>Home</Link></Nav.Link>
                                {Doctors.map(DropDown)}
                                {Patients.map(DropDown)}
                                {Pharmacy.map(DropDown)}
                                {Pages.map(DropDown)}
                                {Blog.map(DropDown)}
                                {Admin.map(DropDown)}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div className='NavRight'>
                        <div className="NavContact">
                            <FontAwesomeIcon icon={faHospital} size='2x' style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
                            <div className="NavContactText">
                                <p className="NavContactTextContact">Contact</p>
                                <p className="NavContactTextNumber">+1 315 369 5943</p>
                            </div>
                        </div>
                        <Button className="account-Btn">LOGIN / SIGNUP</Button>
                    </div>
                </div>
            </Navbar>
        </>
    );
}