import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Li, Logo, Nav, Navigation, Ul } from './Header.style'
import logo from '../../images/logo.svg'
import close from '../../images/icon-menu-close.svg'
import menu from '../../images/icon-menu.svg'

function Header() {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    }
    return (
        <div>
            <Navigation>
                <Nav>
                    <Logo>
                        <img src={logo} alt='' />
                    </Logo>
                    <Ul className={isOpen ? 'active' : `inactive`}>
                        <img src={close} alt=""
                            className='menu'
                            onClick={handleClick} />
                        <Li>
                            <Link to={`#`}>Home</Link>
                        </Li>
                        <Li>
                            <Link to={`#`}>New</Link>
                        </Li>
                        <Li>
                            <Link to={`#`}>Popular</Link>
                        </Li>
                        <Li>
                            <Link to={`#`}>Trending</Link>
                        </Li>
                        <Li>
                            <Link to={`#`}>Categories</Link>
                        </Li>
                    </Ul>
                    <img src={menu} alt=""
                        className='menu'
                        onClick={handleClick} />
                </Nav>
            </Navigation>
        </div>
    )
}

export default Header