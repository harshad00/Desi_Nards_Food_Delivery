import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Dropdown from "./Dropdown";
import { useLocation } from "react-router-dom";

const navItems = [
  { name: "Why Fudo?", slug: "/", active: true },
  {
    name: "Service",
    slug: "/service",
    active: true,
    dropDown: true,
    items: [
      { name: "Sub Item 1", slug: "/manage-property/subitem1" },
      { name: "Sub Item 2", slug: "/manage-property/subitem2" },
    ],
  },
  {
    name: "Menu ",
    slug: "/menu",
    active: true,
    dropDown: true,
    items: [
      { name: "Sub Item 3", slug: "/Resources/subitem3" },
      { name: "Sub Item 4", slug: "/Resources/subitem4" },
    ],
  },
  { name: "Contact", slug: "/contact", active: true },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoginPage = location.pathname === "/login";

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-white  px-3">
      <div className="flex flex-col justify-between md:flex-row px-2 py-5">
        <Link to="/">
          <Logo  size={"1.5rem"}/>
        </Link>

        <div className="md:hidden absolute right-0 top-5 pr-5">
          <button
            className="text-[#100a55] focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:gap-2 md:text-xl`}
        >
          <div className="flex">
            {navItems.map((item, index) =>
              item.active ? (
                <li key={item.name} className="li-text">
                  {item.dropDown ? (
                    <div className="relative">
                      <button
                        className="inline-block px-4 py-2 duration-200 rounded-full hover:underline text-sm md:text-base lg:text-lg xl:text-xl"
                        onClick={() => handleDropdownToggle(index)}
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen === index}
                      >
                        {item.name}{" "}
                        {dropdownOpen === index ? (
                          <i
                            className="fa-solid fa-caret-up"
                            style={{ color: "#eb5757" }}
                          ></i>
                        ) : (
                          <i
                            className="fa-solid fa-caret-down"
                            style={{ color: "#eb5757" }}
                          ></i>
                        )}
                      </button>
                      {dropdownOpen === index && (
                        <Dropdown
                          items={item.items}
                          onClose={handleDropdownClose}
                        />
                      )}
                    </div>
                  ) : (
                    <button
                      className="inline-block px-4 py-2 duration-200 rounded-full hover:underline text-sm md:text-base lg:text-lg xl:text-xl"
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false); // Close menu on navigation
                      }}
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ) : null
            )}
          </div>
        </ul>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex gap-3 justify-end md:gap-5 md:justify-center md:items-center`}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bag-shopping"></i>
          
     {!isLoginPage &&
      <Link to={"/login"}>  <button className="font-primary font-medium bg-[#EB5757] rounded-[14px] py-1 px-4  capitalize-semibold text-white "> <i className="fa-solid fa-arrow-right-to-bracket text-sm p-1"> </i>Login</button></Link> ||
       <Link to={"/singup"}>  <button className="font-primary font-medium bg-[#74c670] rounded-[14px] py-1 px-2  capitalize-semibold text-white "> <i className="fa-solid fa-arrow-right-to-bracket text-sm"> </i>  Sing Up</button></Link>  }
        </div>
      </div>
    </nav>
  );
}

export default Header;
