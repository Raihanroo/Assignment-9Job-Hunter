import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div className="w-full">
      <div className="bg-yellow-300 hidden md:block fixed w-full right-0 left-0 top-0 z-20">
        <div className="container h-14 mx-auto ">
          <div className="flex justify-between items-center h-full">
            <h1 className="text-fuchsia-700 font-extrabold text-2xl">
              <NavLink to='/'>Job-Hunter</NavLink>
            </h1>
            <ul className=" flex gap-5 text-fuchsia-900">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-700" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-700" : "text-black"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/appliedJob"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-700" : "text-black"
                }
              >
                Applied Job
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-700" : "text-black"
                }
              >
                Blog
              </NavLink>
            </li>
            </ul>
            <button className="p-2 bg-pink-600 rounded text-orange-950 ">
              <b>Star Applying</b>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Responsive */}
      <div className="block md:hidden">
        <nav className="flex bg-yellow-300 justify-between items-center h-16 px-3">
          <div>
            <NavLink to="/">
              <h1 className="text-2xl">Job-Hunter</h1>
            </NavLink>
          </div>
          <div>
            {showBtn ? (
              <span onClick={() => setShowBtn(false)}>
                <IoClose className="text-xl" />
              </span>
            ) : (
              <span onClick={() => setShowBtn(true)}>
                <GiHamburgerMenu className="text-xl" />
              </span>
            )}
          </div>
        </nav>
        <div
          className={`absolute w-full ${
            showBtn ? "top-14" : "-top-52"
          } duration-500 bg-yellow-300`}
        >
          <ul className="space-y-2 p-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-300" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-300" : "text-black"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/appliedJob"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-300" : "text-black"
                }
              >
                Applied Job
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-300" : "text-black"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
