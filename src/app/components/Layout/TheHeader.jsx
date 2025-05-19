"use client";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menu = [
  {
    url: "/",
    title: "Why Us",
  },
  {
    url: "/",
    title: "Services",
  },
  {
    url: "/",
    title: "Our Process",
  },
  {
    url: "/",
    title: "Payments",
  },
  {
    url: "/",
    title: "FAQs",
  },
];

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleNavbar = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <Logo />

          <nav className="menu">
            {menu.map((i, ind) => (
              <Link href={i.url} key={ind}>
                {i.title}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2">
            <Link href="#" className="btn_bd">
              Contact
            </Link>
            <button onClick={toggleNavbar} className="menu_toggle" title="menu">
              {drawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {drawerOpen && (
        <nav className="drawer" ref={drawerRef}>
          <div className="drawer_header" onClick={closeDrawer}>
            <Logo />
            <button title="close menu">
              <X />
            </button>
          </div>
          <div className="drawer_body">
            <nav className="drawer_menu">
              {menu.map((i, ind) => (
                <Link href={i.url} key={ind} onClick={closeDrawer}>
                  {i.title}
                </Link>
              ))}
            </nav>
            <Link href="#" className="btn_bd" onClick={closeDrawer}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
