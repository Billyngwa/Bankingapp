import { getLoggedInUser } from '@/lib/Actions/user.actions';
import React from 'react'

const HeaderBox = async ({type,title,user,subtext}:HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <h1 className="header-box-title">
            {title}
        {
            type === "greeting" && (
                <span className='text-bankGradient'> {user}</span>
            )
        }
        </h1>
        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox