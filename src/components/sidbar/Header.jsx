import React, { useState } from "react";
import { pageLinks } from "./pagesLink";
import burgerIcon from "./burger-list-menu-navigation-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";
import logo from "src/assets/icons/logo.svg";
import IconButton from "../buttons/IconButton";
import searchIcon from "./search-alt-2-svgrepo-com.svg";
import moonIcon from "./moon-svgrepo-com.svg";
import signoutIcon from "./sign-out-svgrepo-com.svg";

const Header = () => {
  const [form, setForm] = useState("");
  const navigate = useNavigate();

  const searchResults = pageLinks
    .flatMap((link) => link.children || [])
    .filter(
      (child) =>
        child.title.toLowerCase().includes(form.toLowerCase()) ||
        child.path.toLowerCase().includes(form.toLowerCase())
    );

  const searchClick = (e) => {
    e.preventDefault();
    if (form.trim().length > 0) {
      if (searchResults.length > 0) {
        navigate(searchResults[0].path);
      } else {
        const path = form.replaceAll(" ", "-");
        navigate(`/dashboard/${path}`);
      }
      setForm("");
    }
  };

  return (
    <header className="flex items-center justify-center p-4 gap-[20px] bg-white text-white">
      <div className="logo items-center gap-[20px] flex">
        <img src={logo} alt="" className="w-[200px]" />
        <IconButton>
          <img src={burgerIcon} alt="" className="w-[25px] h-[25px]" />
        </IconButton>
      </div>

      <form onSubmit={searchClick} className="relative flex flex-1">
        <input
          required
          value={form}
          onChange={(e) => setForm(e.target.value)}
          type="text"
          className="flex-1 bg-[#eee] focus:outline-none px-4 py-2 rounded-md text-black"
          placeholder="البحث عن صفحة"
        />

        <IconButton className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <img src={searchIcon} alt="" className="w-[20px] h-[20px]" />
        </IconButton>

        {form.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white text-black rounded-md shadow-lg p-2">
            {searchResults.length > 0 ? (
              searchResults.map((e) => (
                <Link
                  key={e.path}
                  onClick={() => setForm("")}
                  to={e.path}
                  className="block p-2 hover:bg-gray-200 transition"
                >
                  {e.title}
                </Link>
              ))
            ) : (
              <p className="p-2">لا توجد نتائج</p>
            )}
          </div>
        )}
      </form>

      <div className="flex items-center gap-4">
        <IconButton className="bg-[#eee]">
          <img src={moonIcon} alt="" className="w-[25px] h-[25px]" />
        </IconButton>
        <IconButton className="bg-[#eee] hover:bg-danger-main">
          <img src={signoutIcon} alt="" className="w-[25px] h-[25px]" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
