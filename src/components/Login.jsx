import React, { useState, useEffect } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(credentials) {
    console.warn(credentials);

    return axios
      .post("http://127.0.0.1:8000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => res);
  }

  const handleSubmit = async (e) => {
    // alert("works");
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });

    const token = response.data.token;
    localStorage.setItem("token", token);

    window.location.href = "/";
  };
  return (
    <>
      <div className="bg-zinc-100 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50 ">
        <div className="max-w-[450px] h-[500px] mx-auto bg-white text-black shadow-lg shadow-slate-400 rounded-lg -mt-12">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-center text-2xl">Sign in Here</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col">
              <p className="text-white font-bold">Email</p>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 rounded text-black bg-slate-200"
                placeholder="Email"
              />
              <p className="text-white font-bold">PassWord</p>
              <input 
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 rounded text-black bg-slate-200 "
                placeholder="Please enter a strong password"
              />
              <button
                type="submit"
                className="bg-blue-500 py-3 my-6 rounded font-bold px-4 text-white"
              >
                Submit
              </button>
              <div>
                <p className="flex gap-2">
                  <input type="checkbox" />
                  Remember Me
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
