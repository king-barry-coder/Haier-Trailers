import React from 'react'
import ProfileContent from '../profilecontent/ProfileContent';
import useDropdown from '../useDropdown';
import user from '../../assets/user.png';
import settings from '../../assets/settings.png';
import watchlist from "../../assets/watchlist-icon.png";
import community from "../../assets/site-community.png";
import './navbarprofile.css'



const NvabarProfile = () => {
     const { open, setOpen, menuRef } = useDropdown();

  return (
    <div>
        <div>
      <div className="navbar-profile-photo" ref={menuRef}>
        <img
          src={user}
          alt="Profile photo"
          className="Profile-photo"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
          <div className="dropmenu">
            <ProfileContent contentLogo={user} text="Account" />
            <ProfileContent contentLogo={watchlist} text="Watchlist" />
            <ProfileContent contentLogo={settings} text="Settings" />
            <ProfileContent contentLogo={community} text="Site Community" />
          </div>
        )}
      </div>
    </div>
  )
}

export default NvabarProfile