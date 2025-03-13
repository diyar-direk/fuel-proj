import React, { useState } from "react";
import { pageLinks } from "./pagesLink";
import { NavLink } from "react-router-dom";
import "./sidbar.css";
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <aside className="bg-[#eee] h-screen w-[300px] p-5">
      {pageLinks?.map((link, index) => (
        <div key={index} className="sidbar-links mb-2">
          <div
            onClick={() => toggleMenu(index)}
            className={`group flex items-center gap-3 p-[10px] rounded-md cursor-pointer transition ${
              activeIndex === index
                ? "bg-primary-main text-white"
                : "bg-white hover:bg-primary-main hover:text-white"
            }`}
          >
            <i className="w-5 flex">{link.icon}</i>
            <h1 className="flex-1 text-base font-semibold capitalize">
              {link.title}
            </h1>
            <span
              className={`font-bold text-xl transition-transform ${
                activeIndex === index ? "rotate-[-90deg]" : ""
              }`}
            >
              {">"}
            </span>
          </div>

          <article
            className={`bg-white overflow-hidden mt-[5px] transition-all rounded-md ${
              activeIndex === index ? "max-h-[500px] p-2" : "max-h-0"
            }`}
          >
            {link?.children?.map((child, i) => (
              <NavLink
                key={i}
                to={child.path}
                className="block p-3 rounded-[4px] capitalize hover:bg-primary-light transition"
              >
                {child.title}
              </NavLink>
            ))}
          </article>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
