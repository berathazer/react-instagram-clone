/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { faker } from "@faker-js/faker";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark, BsEmojiSmile, BsThreeDots } from "react-icons/bs";

const PostLayout = () => {
  return (
    <div className="border-[#dbdbdb] border rounded-md  w-full h-full  bg-white">
      <div className="w-[470px] h-[56px] flex flex-col items-center justify-centerbg-white mt-2">
        {/*Post Info */}
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-x-3 ml-3 my-2">
            <img
              src={`https://picsum.photos/id/${Math.round(
                Math.random() * 100
              )}/200/300`}
              className="w-[32px] h-[32px] rounded-full outline outline-3 cursor-pointer outline-offset-2 outline-instagram"
            />
            <p className="text-[14px] text-[#262626] font-semibold">
              {faker.name.firstName().toLowerCase().trim(" ")}
            </p>
          </div>
          <div className="flex justify-center items-center text-[18px] pr-4">
            <svg
              aria-label="Diğer seçenekler"
              className="cursor-pointer"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
      </div>
      {/* Post Content*/}
      <div className="w-[470px] h-[587px] ">
        <img
          src={`https://picsum.photos/id/${Math.round(
            Math.random() * 100
          )}/468/587`}
          alt=""
          className="bg-fixed bg-center bg-no-repeat"
        />
      </div>

      <div className="flex flex-col items-center justify-start w-full gap-y-1 px-3">
        <div className="flex items-center justify-between-center w-full text-[26px]">
          <div className="flex items-center  gap-x-4 mt-3 w-full ">
            
            <svg
              className="cursor-pointer"
              aria-label="Beğen"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
            <svg
              className="cursor-pointer"
              aria-label="Yorum Yap"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <svg
              className="cursor-pointer"
              aria-label="Gönderi Paylaş"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
          <svg
            aria-label="Kaydet"
            className="cursor-pointer"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
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
            <svg
              aria-label="Beğen"
              className="ml-auto cursor-pointer"
              color="#262626"
              fill="#262626"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
          </div>
          <div className="flex items-center  w-full gap-x-1 text-[#262626]">
            <span className="text-[14px] font-semibold">
              {faker.name.firstName().toLowerCase()}
            </span>
            <p className="text-[14px] capitalize">{faker.lorem.words(5)}</p>
            <svg
              aria-label="Beğen"
              className="ml-auto cursor-pointer"
              color="#262626"
              fill="#262626"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-start w-full pt-1 pb-4  text-[10px] text-[#8E8E8E] ">
          {Math.round(Math.random() * 20)} SAAT ÖNCE
        </div>
        <hr className="w-[470px] h-1" />

        <div className="flex items-center justify-between w-full h-[40px] gap-x-2 mb-2">
          {/*Emoji SVG*/}
          <svg
            aria-label="İfade Simgesi"
            className="cursor-pointer"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
          </svg>
          <textarea
            name=""
            id=""
            placeholder="Yorum ekle..."
            className="placeholder:text-[15px] border-none outline-none overflow-auto overflow-y-hidden mb-2 bg-none resize-none max-h-[80px] h-[18px] w-[366px]"
          ></textarea>
          <button className="text-primary font-semibold text-[14px]">
            Paylaş
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
