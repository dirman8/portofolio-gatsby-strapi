import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar-aside ${isOpen ? "sidebar-aside-show" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
        <Links styleClass={`${isOpen ? "sidebar-menu" : ""}`}></Links>
        <SocialLinks
          styleClass={`${isOpen ? "sidebar-social" : ""}`}
        ></SocialLinks>
      </div>
    </aside>
  )
}
export default Sidebar
