"use client";

import { useState, useEffect } from "react";
import SidebarLinks from "./SidebarLinks";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (

    <>
      <button 
        className="burger-btn" 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        type="button"
      >
        <span style={{ 
          transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
        }}></span>
        <span style={{ 
          opacity: isOpen ? 0 : 1
        }}></span>
        <span style={{ 
          transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
        }}></span>
      </button>

      <div 
        className={`drawer-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content" onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) {
            setIsOpen(false);
          }
        }}>
          <SidebarLinks />
        </div>
      </div>
    </>
  );
}
