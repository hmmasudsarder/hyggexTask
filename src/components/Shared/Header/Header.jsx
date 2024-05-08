import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Flashcard", link: "/flashcard" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/FAQ" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-sm w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-20 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
          <img
            src="	https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"
            alt=""
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer lg:hidden"
        >
          {!open && <CiMenuBurger />}
          {open && <IoIosCloseCircleOutline />}
        </div>
        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full md:w-auto pl-10 md:pl-20 lg:pl-0 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl lg:ml-8 lg:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-500 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="bg-gradient-to-r from-blue-500 to-blue-900 duration-500 w-4/12 md:w-1/2 lg:w-full text-white px-24 text-center py-2 lg:px-10 rounded-full mr-7 lg:ml-10 cursor-pointer">
            <h1 className="text-center -ml-5 lg:ml-0">Login</h1>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
