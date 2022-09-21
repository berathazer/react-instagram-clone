/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { faker } from "@faker-js/faker";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark,BsEmojiSmile,BsThreeDots } from "react-icons/bs";


const PostLayout = () => {
  return (
    <div className="border rounded-md  w-full h-full  bg-white">
      <div className="w-[470px] h-[56px] flex flex-col items-center justify-centerbg-white mt-2">
        {/*Post Info */}
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-x-3 ml-3 my-2">
            <img
              src={`https://picsum.photos/id/${Math.round(
                Math.random() * 100
              )}/200/300`}
              className="w-[32px] h-[32px] rounded-full outline outline-3  outline-offset-2 outline-instagram"
            />
            <p className="text-[14px] text-[#262626] font-semibold">
              {faker.name.firstName().toLowerCase().trim(" ")}
            </p>
          </div>
          <div className="flex justify-center items-center text-[18px] pr-4">
            <BsThreeDots />
          </div>
        </div>
      </div>
      {/* Post Content*/}
      <div className="w-[470px] h-[587px] ">
        <img
          src={`https://picsum.photos/id/${Math.round(
            Math.random() * 200
          )}/468/587`}
          alt=""
        />
      </div>

      <div className="flex flex-col items-center justify-start w-full gap-y-1 px-3">
        <div className="flex items-center justify-between-center w-full text-[26px]">
          <div className="flex items-center  gap-x-4 mt-3 w-full ">
            <AiOutlineHeart />
            <TbMessageCircle2 />
            <IoPaperPlaneOutline />
          </div>
          <BsBookmark className="text-[24px] mt-3" />
        </div>
        <div className="flex items-center  w-full gap-x-1 text-[14px] font-semibold pt-2">
          <span>
            {`${Math.round(Math.random() * 40)},${Math.round(
              Math.random() * 999
            )}`}{" "}
          </span>{" "}
          beğenme
        </div>
        <div className="flex items-center  w-full gap-x-1 text-[#262626]">
          <span className="text-[14px] font-semibold">
            {faker.name.firstName().toLowerCase()}
          </span>
          <p className="text-[14px] capitalize">{faker.lorem.words(5)}</p>
        </div>
        <div className="flex items-center cursor-pointer w-full text-[14px] text-[#8E8E8E]">
          {Math.round(Math.random() * 190)} yorumun tümünü gör
        </div>
        <div
          name="postComments"
          className="flex flex-col items-center justify-center w-full gap-y-1"
        >
          <div className="flex items-center  w-full gap-x-1 text-[#262626]">
            <span className="text-[14px] font-semibold">
              {faker.name.firstName().toLowerCase()}
            </span>
            <p className="text-[14px] capitalize">{faker.lorem.words(5)}</p>
            <AiOutlineHeart className="text-[14px] ml-auto" />
          </div>
          <div className="flex items-center w-full gap-x-1 text-[#262626]">
            <span className="text-[14px] font-semibold">
              {faker.name.firstName().toLowerCase()}
            </span>
            <p className="text-[14px] capitalize">{faker.lorem.words(5)}</p>
            <AiOutlineHeart className="text-[14px] ml-auto" />
          </div>
        </div>
        <div className="flex items-center justify-start w-full pt-1 pb-4  text-[10px] text-[#8E8E8E] ">
          {Math.round(Math.random() * 20)} SAAT ÖNCE
        </div>
        <hr className="w-[470px] h-1"/>
        <div className="flex items-center justify-between w-full h-[40px] gap-x-2 mb-2">
          <BsEmojiSmile className="text-[22px]"/>
          <textarea name="" id="" placeholder="Yorum ekle..."  className="placeholder:text-[15px] border-none outline-none overflow-auto overflow-y-hidden mb-2 bg-none resize-none max-h-[80px] h-[18px] w-[366px]"></textarea>
          <button className="text-primary font-semibold text-[14px]">Paylaş</button>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
