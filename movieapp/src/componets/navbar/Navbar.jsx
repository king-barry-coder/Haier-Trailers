import React from 'react'
import haier from '../../assets/haierTrailers.png'
import { Link } from 'react-router-dom'
import './navbar.css'
import user from '../../assets/user.png'
import useDropdown from '../useDropdown'
import NvabarProfile from '../navbarprofile/NvabarProfile'



const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="together">
                <div className="logo-box">
                    <img src={haier} alt="haier trailer logo" className='img' />
                </div>

               <p className='site-name'>Haier Trailer</p>
            </div>

            

            <div className="together-two">
                <Link to='/search' className='search-btn'>
                        Search Trailers
                </Link>

                <NvabarProfile/>

                {/* <div className="profile">
                  <img src={user} alt="user picture" className='user'/>
                </div> */}
            </div>
           
        </nav>
    </div>
  )
}   

export default Navbar