/* eslint-disable @next/next/no-img-element */
import React from "react";
import { faker } from "@faker-js/faker";
const UserItem = () => {
  return (
    <div className="flex items-center justify-center px-4  py-1">
      <div className="flex items-start justify-start w-full gap-x-3">
        <div className="flex items-center justify-center">
          <img
            src={`https://picsum.photos/id/${Math.round(Math.random()*50)}/32/32`}
            className="rounded-full h-full w-full"
            alt=""
          />
        </div>

        <div className="flex flex-col items-start justify-center relative bottom-1">
          <div className="text-[14px] text-[#262626] font-semibold self-start">
            {faker.name.firstName().toLowerCase()}
          </div>
          <div className="text-[12px] text-textLink relative bottom-[2px]">
            {faker.name.firstName().toLowerCase()} +{" "}
            {Math.round(Math.random() * 9)} kişi takip ediyor{" "}
          </div>
        </div>

        <div className="text-[12px] ml-auto self-center relative bottom-1 text-primary font-semibold">Takip Et</div>
      </div>
    </div>
  );
};

export default UserItem;
