/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../Navbar/Navbar";
import PostLayout from "./Post/PostLayout";
import UserItem from "./RightSide/UserItem";
import HomeStory from "./Story/HomeStory";

const HomeLayout = () => {
  return (
    <div className="flex items-center min-h-screen w-full h-auto justify-start flex-col bg-[#fafafa] relative">
      <Navbar />
      <div className="flex items-center justify-center mt-[85px]">
        <div className="flex items-center justify-start flex-col w-[470px]  min-h-screen mr-8 gap-y-4 bg-[#fafafa]">
          <HomeStory />
          <PostLayout />
          <PostLayout />
          <PostLayout />
          <PostLayout />
        </div>
        <div className=" items-center  flex-col w-[319px] h-screen  hidden lg:flex self-start ">
          <div className="w-[319px] mt-[19px] mb-[10px] h-[66px] bg-none">
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center justify-center gap-x-4">
                <img
                  className="rounded-full border"
                  src="https://picsum.photos/56/56"
                  alt=""
                />
                <div className="flex items-start justify-center flex-col text-[14px]">
                  <p className="text-[#262626] font-semibold">beraax19</p>
                  <p className="text-textLink relative bottom-[2px]">Berat</p>
                </div>
              </div>

              <div className="text-primary text-[12px] font-semibold cursor-pointer">
                Geçiş Yap
              </div>
            </div>
          </div>

          <div className="w-[319px] flex items-center justify-start flex-col">
            
            <div className="flex items-center justify-between w-full font-semibold py-1">
              <p className="text-[14px] text-textLink ">Senin İçin Öneriler</p>
              <p className="text-[12px] text-[#262626] cursor-pointer">Tümünü Gör</p>
            </div>
            
            <div className="w-[347px] py-2 h-[240px] flex flex-col ">
              <UserItem/>
              <UserItem/>
              <UserItem/>
              <UserItem/>
              <UserItem/>
            </div>
          </div>
          <div className="w-[319px] max-w-[319px] flex items-center justify-start gap-x-2 mt-6">
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">Hakkında</div>
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">Yardım</div>
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">Basın</div>
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">API</div>
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">İş Fırsatları</div>
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">Gizlilik</div>
            
          </div>
          <div className="w-[319px] max-w-[319px] flex items-center justify-start gap-x-2 mt-[2px]">
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">Koşullar</div>
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">Konumlar</div>
            <div className="text-[12px] text-[#C7C7C7] font-[400] relative after:w-[2px] after:h-[2px] hover:border-b h-4 cursor-pointer after:rounded-full after:bg-[#C7C7C7] after:absolute after:top-[9px] after:right-[-5px]">Dil</div>
          </div>

          <div className="text-[12px] text-[#C7C7C7] w-full text-start mt-5">
          © 2022 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
