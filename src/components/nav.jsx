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
                        <li>Home</li>
                        <li>Biography</li>
                        <li>Timeline</li>
                        <li>Gallery</li>
                        <li>Tributes</li>
                    </ul>
                    <button>Write Tributes</button>
                </section>
            }
            <div>
                 <ul>
                    <li>Home</li>
                    <li>Biography</li>
                    <li>Timeline</li>
                    <li>Gallery</li>
                    <li>Tributes</li>
                </ul>
                <button>Write Tributes</button> 
            </div>
        </nav>
    )
}
export default Nav;