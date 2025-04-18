import React, { useState } from 'react';
import './Header.css';

const Header = () => {

    const [menu, setMenu] = useState('home')

    return (
        <>
        <div className='header-video'>
        <video autoPlay muted loop className='header' src='https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4'></video>
        </div>
        <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Fresh Meals Delivered Fast Your Favorite Dishes at Your Doorstep!</p>
        <button><a href='#explore-menu' onClick={()=> setMenu('menu')} className={menu === 'menu'?'active':''}>View Menu</a></button>
    </div>
    </>
    )
}

export default Header;