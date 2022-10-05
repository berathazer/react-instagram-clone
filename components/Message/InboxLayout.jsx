/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import MessageItem from "./MessageItem";
import { faker } from "@faker-js/faker";
import ScrollToBottom from "react-scroll-to-bottom";

const InboxLayout = () => {
  const [loading, setLoading] = useState(true);

  useState(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="mt-[60px] p-5 min-h-inboxScreen bg-login-input flex justify-center  ">
      <div className="w-[933px] max-w-[935px] max-h-[613px] bg-white border border-[#dbdbdb] rounded-[3px] flex">
        <div className="w-[349px] h-full flex flex-col">
          <div className="w-full min-h-[60px] flex justify-between items-center border-b border-r">
            <div className="flex-1"></div>
            <div className="flex-auto flex  items-center gap-x-2 relative left-1 cursor-pointer">
              <span className="text-base font-semibold text-[#262626]">
                beraax19
              </span>
              <svg
                aria-label="Aşağı Ok Simgesi"
                className="rotate-180"
                color="#262626"
                fill="#262626"
                height="20"
                role="img"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
              </svg>
            </div>
            <div className="relative right-5">
              <svg
                aria-label="Yeni Mesaj"
                className="cursor-pointer"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="16.848"
                  x2="20.076"
                  y1="3.924"
                  y2="7.153"
                ></line>
              </svg>
            </div>
          </div>

          <div className="w-full max-h-[613px] h-full overflow-auto">
            <div
              className={`flex flex-col w-full h-full items-center justify-start pt-2 ${
                loading && "pt-0"
              }`}
            >
              <MessageItem active={true} loading={loading} />
              <MessageItem loading={loading} />
              <MessageItem active={true} group={true} loading={loading} />
              <MessageItem loading={loading} />
              <MessageItem loading={loading} />
              <MessageItem active={true} loading={loading} />
              <MessageItem loading={loading} />
              <MessageItem loading={loading} />
              <MessageItem loading={loading} />
              <MessageItem loading={loading} />
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="w-[583px] h-full flex flex-col">
          <div className="h-[60px] border-b px-5 bg-white">
            <div className="flex items-center justify-between w-full h-full">
              <div className="flex items-center justify-center gap-x-2 relative left-3">
                <div className="w-6 h-6">
                  <img
                    src={`https://picsum.photos/id/${Math.round(
                      Math.random() * 50
                    )}/24/24`}
                    alt=""
                    className="rounded-full  bg-fixed bg-center "
                  />
                </div>
                <div className="flex  flex-col items-start justify-center">
                  <div className="text-[16px] text-[#262626]  font-semibold">
                    {faker.name.firstName()}
                  </div>
                  <div className="text-[12px] text-[#8E8E8E]">
                    11d önce aktifti
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center ml-auto gap-x-4 relative right-2 ">
                <div>
                  <svg
                    aria-label="Sesli Arama"
                    class="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 01.908-2.138 17.116 17.116 0 011.865-1.71 2.307 2.307 0 013.004.174 13.283 13.283 0 013.658 5.325 2.551 2.551 0 01-.19 1.941l-.455.853a.463.463 0 00-.024.387 7.57 7.57 0 004.077 4.075.455.455 0 00.386-.024l.853-.455a2.548 2.548 0 011.94-.19 13.278 13.278 0 015.326 3.658 2.309 2.309 0 01.174 3.003 17.319 17.319 0 01-1.71 1.866 3.29 3.29 0 01-2.138.91 10.27 10.27 0 01-.368.006zm-13.144-20a.27.27 0 00-.167.054A15.121 15.121 0 003.28 4.47a1.289 1.289 0 00-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 00.835-.36 15.217 15.217 0 001.504-1.637.324.324 0 00-.047-.41 11.62 11.62 0 00-4.457-3.119.545.545 0 00-.411.044l-.854.455a2.452 2.452 0 01-2.071.116 9.571 9.571 0 01-5.189-5.188 2.457 2.457 0 01.115-2.071l.456-.855a.544.544 0 00.043-.41 11.629 11.629 0 00-3.118-4.458.36.36 0 00-.244-.1z"></path>
                  </svg>
                </div>
                <div>
                  {" "}
                  <svg
                    aria-label="Görüntülü arama"
                    class="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <rect
                      fill="none"
                      height="18"
                      rx="3"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      width="16.999"
                      x="1"
                      y="3"
                    ></rect>
                    <path
                      d="M17.999 9.146l2.495-2.256A1.5 1.5 0 0123 8.003v7.994a1.5 1.5 0 01-2.506 1.113L18 14.854"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    aria-label="Yazışma Detaylarını Gör"
                    class="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <circle
                      cx="12.001"
                      cy="12.005"
                      fill="none"
                      r="10.5"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></circle>
                    <circle cx="11.819" cy="7.709" r="1.25"></circle>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="10.569"
                      x2="13.432"
                      y1="16.777"
                      y2="16.777"
                    ></line>
                    <polyline
                      fill="none"
                      points="10.569 11.05 12 11.05 12 16.777"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            
              <div className="w-full max-h-[466px] overflow-auto relative">
                <ScrollToBottom className="h-[466px] w-[583px]" >
                  <div
                    className={`flex flex-col w-full  items-center justify-start }`}
                  >
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>

                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                    <div className="w-full h-10 bg-red-300 rounded-lg my-2"></div>
                  </div>
                </ScrollToBottom>
              </div>
              
        
            <div className="p-5  flex items-center justify-center">
              <div className="w-[543px] min-h-[44px]   text-center">
                <textarea className="w-full border-[2px] rounded-[25px] " name="" id=""  rows="2"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxLayout;
