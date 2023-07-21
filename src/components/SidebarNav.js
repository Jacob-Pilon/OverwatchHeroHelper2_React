import React from 'react';

const SidebarNav = () => {
  const navItems = [
    {
      link: 'tierlist.html',
      image: 'images/list.png',
      alt: 'Tier List',
    },
    {
      link: 'ourCoaches.html',
      image: 'images/coaches.png',
      alt: 'Our Coaches',
    },
    {
      link: 'aboutus.html',
      image: 'images/AboutUS.png',
      alt: 'About Us',
    },
    // Add more navigation items as needed
  ];

  return (
    <div
      className="sidebar-nav"
      style={{ backgroundColor: '#405275'}}
    >
      {navItems.map((item, index) => (
        <a key={index} href={item.link} className="navbar-logos" alt={item.alt}>
          <img src={item.image} style={{ height: '50px', marginTop: '10px' }} />
        </a>
      ))}
    </div>
  );
};

export default SidebarNav;
