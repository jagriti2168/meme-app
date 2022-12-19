import React from 'react'
import Logo from '../images/logo_meme.svg'

function Header() {
    return (
        <header className='header'>
            <img
                src={Logo}
                alt = 'logo'
                className="header--image"
            />
            <h2 className='header--title'>Meme Generator</h2>
            {/* <h4 className='header--project'></h4> */}
        </header>
    )

}

export default Header;