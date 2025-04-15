import React, { useState } from "react";
import Link from "./Link";
import { IoCloseCircle, IoMenu } from "react-icons/io5";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "https://example.com/home",
  },
  {
    id: 2,
    name: "About",
    path: "https://example.com/about",
  },
  {
    id: 3,
    name: "Services",
    path: "https://example.com/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "https://example.com/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "https://example.com/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ))

  return (
    <nav className="flex justify-between items-center mx-5">
      <span className="flex gap-4 items-center" onClick={() => setOpen(!open)}>
        {open ? 
            <IoCloseCircle size={25} className="md:hidden"></IoCloseCircle> : 
            <IoMenu size={25} className="md:hidden"></IoMenu>}
            <ul className={`md:hidden absolute duration-1000
                ${open? 'top-8': '-top-40'} 
                bg-red-500`}>
                {links}
            </ul>
        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden gap-5">
        {
            links
        }
      </ul>

      <button className="btn btn-primary">Sign In</button>

      {/* <ul className='flex'>
                {
                    navigationData.map(route =>                 <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
                <li className='mr-10'><a href="/home">Home</a></li>
            </ul> */}
    </nav>
  );
};

export default Navbar;
