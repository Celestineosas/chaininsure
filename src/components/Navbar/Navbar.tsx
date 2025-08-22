import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { navLinks } from "../../contants"
import { BiSolidCylinder } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { crest, User } from "../../assets";
import { Button } from "../Button/Button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)


  //React Icons
  const MenuIcon = FiMenu as unknown as React.FC
  const XIcon = FiX as unknown as React.FC
  const LogoIcon = BiSolidCylinder as unknown as React.FC

  // SHow content or not
  const location = useLocation()
  const navigate = useNavigate()
  const hideThem = ["/register", "/login", "/"];
  const shouldHideThem = hideThem.includes(location.pathname)


  return (
    <header className="sm:pt-0 pt-0 w-full bg-background-main">
      <nav className="sm:px-10 px-4 flex justify-between py-6 items-center w-full">
        <div onClick={closeMenu}>
          <div className="flex gap-3 text-white justify-center items-center">
            <span className="rotate-120 text-blue text-2xl rotate-45">
              <LogoIcon />
            </span>

            <h2 className="font-Outfit text-lg">ChainInure</h2>
          </div>
        </div>

        {shouldHideThem ?
          <div
            onClick={() => location.pathname === "/register" || location.pathname === "/" ? navigate("/login") : navigate("/register")}
          >
            <Button
              size="normal"
              variant="normal"
              className="font-Outfit bg-transparent border"
            >
              {(location.pathname === "/register" || location.pathname === "/") ? "Login" : "Register"}

            </Button>
          </div> :
          <>  <ul className="lg:flex flex-1 justify-center items-center gap-10 hidden">
            {navLinks.map((item) => (
              <li key={item.label} className="relative">
                <Link to={`/${item.link}`} className="font-Outfit text-sm text-white pb-2 focus:border-b-2 focus:border-b-blue focus:outline-none">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
            <div className="lg:flex hidden gap-3 items-center justify-center">
              <Button variant="ghost" size="icon">
               <img src={crest} alt="Crest" className="w-full rounded-full" />
              </Button>
              <Button variant="ghost" size="icon">
                <img src={User} alt="User" className="rounded-full border-2 border-blue" />
              </Button>

            </div>


            <button className="lg:hidden text-[25px] font-bold text-white" onClick={() => setMenuOpen(true)}>
              <MenuIcon />


            </button>

            <div
              className={`fixed top-0 left-0 h-full w-2/3 bg-slate-600 shadow-md z-50 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
              <button className="absolute top-5 right-5 text-[25px] text-white" onClick={closeMenu}>

                <XIcon />
              </button>

              {/* MobileNav */}

              <ul className="flex flex-col items-start px-6 pt-20 space-y-6">
                {navLinks.map((item) => (
                  <li key={item.label} className="w-full">
                    <Link
                      to={`/${item.link}`}
                      className="block font-Outfit text-lg text-white py-2"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </>
        }


      </nav>
    </header>
  )
}

export default Navbar