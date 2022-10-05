import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import InboxLayout from "../../components/Message/InboxLayout";
import Navbar from "../../components/Navbar/Navbar";

const Inbox = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Loading show={loading ? true : false} />
      <Navbar show={!loading}/>
      <InboxLayout/>
    </div>
  );
};

export default Inbox;
