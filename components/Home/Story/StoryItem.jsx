/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { faker } from '@faker-js/faker';

const StoryItem = () => {
  return (
    <div >
      <div className=" w-[66px] h-[85px] px-1 ">
        <div className="">
          <button className="flex items-center justify-center flex-col gap-y-[2px]">
            <div className="w-[66px] h-[66px] flex items-center justify-center">
              <img
                src={`https://picsum.photos/id/${Math.round(
                  (Math.random() * 100)
                )}/200/300`}
                className="w-[56px] h-[56px] rounded-full outline outline-3  outline-offset-2 outline-instagram"
              />
            </div>
            <div className="text-[12px]">
              {faker.name.lastName().toLowerCase()}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
