import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          COPYRIGHT©2020 <span>WEBDEV</span> ALL RIGHTS RESERVED
        </h4>
      </div>
    </footer>
  )
}

export default Footer
