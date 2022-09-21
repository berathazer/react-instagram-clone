import React, { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import {auth} from "../../components/firebase/firebase";
const Emailsignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [mail, setMail] = useState("");
  

  const buttonDisabled = !(mail.length > 5 && password.length > 5);

  const clickHandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
        toast.success("Kayıt Başarılı");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorCode}: ${errorMessage}`);
      });
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Toaster/>
      <div className="flex flex-col items-center justify-center gap-y-2">
        <div className="relative " id="mail">
          <label
            htmlFor="mailInput"
            className={`transition-all duration-100 absolute cursor-text text-[12px] ${
              mail.length > 0
                ? " -top-[2px] left-2 text-[10px] my-[4px]"
                : "top-2 left-2"
            } text-textLink`}
          >
            Cep telefonu veya e posta
          </label>
          <input
            type="text"
            id="mailInput"
            className={`text-[12px] pl-[6px]   ${
              mail.length > 0 && "pl-[8px] pt-[14px] pb-[2px] "
            } focus:cursor-text bg-login-input border-[0.5px] rounded-sm w-[258px] h-[36px] pr-2`}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>

        <div className="relative " id="fullname">
          <label
            htmlFor="nameInput"
            className={`transition-all duration-100 absolute cursor-text text-[12px] ${
              fullName.length > 0
                ? " -top-[2px] left-2 text-[10px] my-[4px]"
                : "top-2 left-2"
            } text-textLink`}
          >
            Ad Soyad
          </label>
          <input
            type="text"
            id="nameInput"
            className={`text-[12px] pl-[6px]   ${
              fullName.length > 0 && "pl-[8px] pt-[14px] pb-[2px] "
            } focus:cursor-text bg-login-input border-[0.5px] rounded-sm w-[258px] h-[36px] pr-2`}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>

        <div className="relative " id="username">
          <label
            htmlFor="usernameInput"
            className={`transition-all duration-100 absolute cursor-text text-[12px] ${
              username.length > 0
                ? " -top-[2px] left-2 text-[10px] my-[4px]"
                : "top-2 left-2"
            } text-textLink`}
          >
            Kullanıcı adı
          </label>
          <input
            type="text"
            id="usernameInput"
            className={`text-[12px] pl-[6px]   ${
              username.length > 0 && "pl-[8px] pt-[14px] pb-[2px] "
            } focus:cursor-text bg-login-input border-[0.5px] rounded-sm w-[258px] h-[36px] pr-2`}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="relative " id="password">
          <label
            htmlFor="passwordInput"
            className={`transition-all duration-100 absolute cursor-text text-[12px] ${
              password.length > 0
                ? " -top-[2px] left-2 text-[10px] my-[4px]"
                : "top-2 left-2"
            } text-textLink`}
          >
            Şifre
          </label>
          <input
            type="text"
            id="passwordInput"
            className={`text-[12px] pl-[6px]   ${
              password.length > 0 && "pl-[8px] pt-[14px] pb-[2px] "
            } focus:cursor-text bg-login-input border-[0.5px] rounded-sm w-[258px] h-[36px] pr-2`}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className=" relative">
          {buttonDisabled ? (
            <button
              disabled
              className="disabled:bg-blue-200 bg-primary w-[258px] pt-[5px] pb-[5px] rounded-md text-[14px] text-white font-semibold"
            >
              Kaydol
            </button>
          ) : (
            <button
              onClick={clickHandler}
              className="disabled:bg-blue-200 bg-primary w-[258px] pt-[5px] pb-[5px] rounded-md text-[14px] text-white font-semibold"
            >
              Kaydol
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Emailsignup;
