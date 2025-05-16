import React from 'react'
import './profilecontent.css'
const ProfileContent = (props) => {
  return (
    <div>
        <div className="content">
            <div className="content-logo-box">
            <img src={props.contentLogo} alt=""  className='contentLogo'/>
            </div>
            <p className='text'>{props.text}</p>
        </div>

    </div>
  )
}

export default ProfileContent