import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Logo from "../img/logo.png";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-between h-screen bg-primary px-24">
        <div className="w-1/2 flex justify-center items-center">
          <img src={Logo} alt="missing logo" className="py-2 bg-white rounded-full"/>
        </div>
        
        <div className="w-full flex justify-start items-center pl-24">
          <form>
            <h1 className="text-4xl text-white font-semibold py-6">Login</h1>
            <label for="username" className="text-white font-semibold">
              Username
            </label>
            <br />
            <input
              type="username"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-full w-72 h-12 mt-2 p-2 border-2 border-white"
            />
            <br/>
            <label for="password" className="text-white font-semibold">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-full w-72 h-12 mt-2 p-2 border-2 border-white"
            />
            <br/>
            <button type="submit"
                isLoading={isLoading}
                className="bg-white py-2 w-full rounded-full mt-4 font-semibold hover:bg-secondary hover:text-white hover:animate-pulse"
                >
                    Login
                </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
