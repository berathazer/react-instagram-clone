/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { MdHomeFilled, MdOutlineExplore,MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMessage, AiOutlineHeart } from "react-icons/ai";
import { BsPlusCircle, BsPersonCircle } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [page, setPage] = useState("home");
  return (
    <div style={{zIndex:9999}} id="main-navbar" className="h-[60px] w-full flex items-center  justify-center fixed top-0 left-0 right-0 bg-white  transition-all duration-400 border-b-[1px] ">
      <div className="flex items-center justify-between  w-full px-5 md:max-w-[975px]">
        <div className="flex items-center justify-start lg:w-[333px] gap-x-2">
          <img
            className="w-[103px] h-[29px] relative top-[2px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
          <MdKeyboardArrowDown className="cursor-pointer text-[20px]"/>

        </div>

        {/*Search Bar*/}
        <div className=" items-center justify-end hidden lg:w-[268px] md:flex h-9 bg-[#efefef] rounded-md relative">
          <input
            type="search"
            name=""
            id="searchBar"
            placeholder="Ara"
            className="flex  items-center justify-center w-[236px] h-[30px] placeholder:opacity-0 focus:placeholder:opacity-100 focus:px-0 py-[3px] px-4 bg-[#efefef] outline-none"
          />
          <label
            htmlFor="searchBar"
            className="absolute w-[236px] h-9 flex items-center right-4 justify-start gap-x-2 text-textLink "
          >
            <div className="text-[20px] font-light">
              <IoIosSearch />
            </div>
            <span className="text-[16px] font-light">Ara</span>
          </label>
        </div>

        <div className="flex items-center justify-end lg:w-[333px]">
          <div className="h-6 w-6 ml-6">
            {page === "home" ? (
              <MdHomeFilled
                width={"26px"}
                height={"26px"}
                className="h-full w-full  "
              />
            ): <GrHomeRounded
            width={"24px"}
            height={"24px"}
            className="h-full w-full "
          /> }
          </div>
          <div className="h-6 w-6 ml-6">
            <AiOutlineMessage
              width={"24px"}
              height={"24px"}
              className="h-full w-full "
            />
          </div>
          <div className="h-6 w-6 ml-6">
            <BsPlusCircle
              width={"24px"}
              height={"24px"}
              className="h-full w-full "
            />
          </div>
          <div className="h-6 w-6 ml-6">
            <MdOutlineExplore
              width={"24px"}
              height={"24px"}
              className="h-full w-full "
            />
          </div>
          <div className="h-6 w-6 ml-6">
            <AiOutlineHeart
              width={"24px"}
              height={"24px"}
              className="h-full w-full "
            />
          </div>
          <div className="h-6 w-6 ml-6">
            <BsPersonCircle
              width={"24px"}
              height={"24px"}
              className="h-full w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
