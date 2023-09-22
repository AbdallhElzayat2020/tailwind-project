import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/Vector logo.png";
const Header = () => {
  const headerRef = useRef();
  const [links] = useState(["home", "about", "services"]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "10px 0";
      } else {
        headerRef.current.style = "background:transparent";
        headerRef.current.style = "padding:40px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="  transition-all duration-[0.3s] z-50 fixed top-0 left-0 w-full"
    >
      <div className="container px-[50px]  flex-col sm:flex-row  mx-auto flex items-center justify-between">
        <a href="">
          <img className="w-[150px]" src={logo} alt="" />
        </a>
        <nav>
          <ul className="flex gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  className="text-white opacity-[0.9] hover:opacity-[0.7] transition-opacity duration-[0.54] hover:underline"
                  href={`/${link.toLocaleLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
