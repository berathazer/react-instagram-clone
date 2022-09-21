import React, { useEffect, useState } from "react";
import Login from "./accounts/login";
import Cookies from "js-cookie";
import Loading from "../components/Loading";  
import HomeLayout from "../components/Home/HomeLayout";
const Index = () => {
  const [user,setUser] = useState(true)
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setLoading(false);
    },500)

    return()=>{
      clearTimeout(timeout)
    }
  },[])
  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <HomeLayout/>
      )}
    </div>
  );
};

export default Index;
