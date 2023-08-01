import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const token = localStorage.getItem("token");
  const { userData, setUserData } = useState([]);

  async function getUser() {
    return axios
      .get("http://127.0.0.1:8000/api/user")
      .then((response) => response.data);
  }

  useEffect(() => {
    getUser();
  });
  return (
    <div>
      <h1 className="text-white text-2xl font-bold">HomePage</h1>
    </div>
  );
};
