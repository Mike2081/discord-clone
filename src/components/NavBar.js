import React from 'react'
import '../styles/NavBar.css'
import LogOut from './LogOut'

function NavBar() {
    return (
        <div className ='Nav'>
            <div className='Nav__title'>
                Welcome to the Discord-clone community chat
            </div>
            <LogOut />
        </div>
    )
}

export default NavBar
