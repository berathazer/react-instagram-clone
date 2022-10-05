/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
const MessageItem = ({ active = false, group = false, loading }) => {
  return (
    <>
      {loading === true ? (
        <div
          onClick={() => {}}
          className="py-2 px-5 w-full h-full bg-slate-50 cursor-pointer flex items-center justify-center animate-pulse"
        >
          <div className="flex w-[294px] h-[56px] items-center gap-x-3">
            <div className="relative flex items-center justify-center w-[56px] h-[56px] bg-slate-200 rounded-full">

             
  
            </div>

            <div className="w-[226px] flex flex-col text-[14px] justify-center gap-y-3">
              <div className="text-[#262626] leading-[18px] bg-slate-200 w-52 h-3 rounded"></div>
              <div className="text-[#8E8E8E] bg-slate-200 w-40 h-3 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {}}
          className="py-2 px-5 w-full h-full hover:bg-slate-50 cursor-pointer flex items-center justify-center"
        >
          <div className="flex w-[294px] h-[56px] items-center gap-x-3">
            <div className="relative flex items-center justify-center w-[56px] h-[56px]">
              {group ? (
                <>
                  <div className="w-[56px] h-[56px] relative top-3">
                    <div>
                      <img
                        src={`https://picsum.photos/id/${Math.round(
                          Math.random() * 50
                        )}/40/40`}
                        alt=""
                        className="rounded-full  bg-fixed bg-center border relative top-[-16px] "
                      />
                    </div>
                    <div>
                      <img
                        src={`https://picsum.photos/id/${Math.round(
                          Math.random() * 50
                        )}/40/40`}
                        alt=""
                        className="rounded-full bg-fixed bg-center  absolute top-0 left-3 border-[3px] border-white"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={`https://picsum.photos/id/${Math.round(
                    Math.random() * 50
                  )}/56/56`}
                  alt=""
                  className="rounded-full bg-fixed bg-center border"
                />
              )}
              {active && (
                <div
                  className={`bg-[#78de45] border-[3.5px] border-white h-5 w-5 rounded-full absolute right-0 bottom-[3px] ${
                    group && "right-[-2px] bottom-[4px]"
                  }  `}
                  id="activeUser"
                ></div>
              )}
            </div>

            <div className="w-[226px] h-[30px] flex flex-col text-[14px] justify-center">
              <div className="text-[#262626] leading-[18px]">
                {faker.name.firstName()}
              </div>
              <div className="text-[#8E8E8E]">10d önce aktifti</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageItem;

/*



*/
