import React, { createContext } from 'react'
import { useState } from 'react';
export const NavbarContext=createContext();
export const LangContext=createContext();
const NavContext = ({children}) => {
 
const [navOpen,setNavOpen]=useState(false);
const [En,setEn]=useState(true);
  return (
    <div>
        <NavbarContext.Provider value={[navOpen,setNavOpen]}>
        <LangContext.Provider value={[En,setEn]}>
          {children}
        </LangContext.Provider>
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext