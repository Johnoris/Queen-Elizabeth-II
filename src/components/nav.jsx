import { useState } from 'react';

const Nav = () => {
    const [menu, setMenu] = useState(false);

    return(
        <nav>
            <img src={require('../assets/logo.png')} alt=""/>
            <img className='hamburger-menu' onClick={()=>setMenu(true)} src={require('../assets/menu.png')} alt=""/>
            {menu &&
                <section className='small-screen'>
                    <span><img onClick={()=>setMenu(false)} src={require('../assets/close.png')} alt=""/></span>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#biography">Biography</a></li>
                        <li><a href="#timeline">Timeline</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#tributes">Tributes</a></li>
                    </ul>
                    <button>Write Tributes</button>
                </section>
            }
            <div>
                 <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#biography">Biography</a></li>
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#tributes">Tributes</a></li>
                </ul>
                <button>Write Tributes</button> 
            </div>
        </nav>
    )
}
export default Nav;