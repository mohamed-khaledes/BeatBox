import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine, RiMusic2Fill } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import { links } from '../assets/constants';

// nav links component
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row justify-start items-center my-8
      text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);
// sidebar component
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-br from-black to-[#00040d]">
        <h3 className="text-[#daa520] text-2xl font-bold text-center flex items-center">
          <RiMusic2Fill /> <span>BeatBox</span>
        </h3>
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )};
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#00040d]
      backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}
      >
        <h3 className="text-[#daa520] text-2xl font-bold text-center flex items-center">
          <RiMusic2Fill />
          <span>BeatBox</span>
        </h3>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
