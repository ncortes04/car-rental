import React from 'react'

const Footer = () => {
  return (
    <div className='footer-parent'>
        <div className='footer-container'>
            <div className='footer-title-div'>
                <h3 className='logo'><span className='logo-span'>Rental</span>Car</h3>
                <p className='footer-description'>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className='footer-tags-div'>
                <div className='footer-about'>
                    <h3>About</h3>
                    <a href="">How it Works</a>
                    <a href="">Featured</a>
                    <a href="">Partnership</a>
                    <a href="">Buissness Relation</a>
                </div>
                <div className='footer-community'>
                    <h3>Community</h3>
                    <a href="">Events</a>
                    <a href="">Blog</a>
                    <a href="">Podcast</a>
                    <a href="">Invite a Friend</a>
                </div>
                <div className='footer-socials'>
                    <h3>Socials</h3>
                    <a href="">Discord</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                    <a href="">FaceBook</a>
                </div>
            </div>
        </div>
    <div className='footer-closure-div'>
        <p>2023 Nicholas Cortes. All Rights Reserved</p>
        <div className='closure-right'>
            <p>Privacy and Policy</p>
            <p>Terms and Conditions</p>
        </div>
    </div>
</div>
  )
}

export default Footer