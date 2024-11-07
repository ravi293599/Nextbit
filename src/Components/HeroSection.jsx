import React from 'react'

const HeroSection = (props) => {
    let title = props.title;
    let subtitle = props.subtitle
  return (
    <div className='Hero'>
        <div className='auto-container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='sub-title'>{title}</h1>
                    <ul>
                        <li><a href='javascript(void(0))'>Home</a></li>
                        <li>{subtitle}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection