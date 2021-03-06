import React, { useState } from 'react'
import { MDBCollapse, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    return (
        <MDBNavbar fixed='top' expand='lg' light>
            <MDBContainer fluid>
                <MDBNavbarBrand>
                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="16" alt="" loading="lazy"
                        style={{ marginTop: '-3px' }} />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Features</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Pricing</MDBNavLink>
                        </MDBNavItem>
                        {/* <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Dropdown</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem> */}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header
