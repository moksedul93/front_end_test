import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import GoogleButton from "../../assets/button.png";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        onLogin(data.token); // Assuming the response contains a token
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center text-center flex-col px-6">
      <div className="mt-[92px] mb-[68px]">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="w-full">
        <h4 className="font-semibold text-[17.28px] leading-[25.92px] text-black">
          Login to your dashboard
        </h4>
        <p className="font-normal text-[13.44px] leading-[20.16px] text-black">
          Enter with your username and password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <input
              className="border-[0.96px] border-[#E0E0E0] rounded-[7.68px] py-[7.68px] px-[15.36px] outline-none text-[13.44px] leading-[18.82px] text-[#828282] w-full"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full mt-2.5">
            <input
              className="border-[0.96px] border-[#E0E0E0] rounded-[7.68px] py-[7.68px] px-[15.36px] outline-none text-[13.44px] leading-[18.82px] text-[#828282] w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full mt-4">
            <button
              className="w-full font-[500] bg-black py-[7.36px] text-white rounded-[7.68px]"
              type="submit"
            >
              Login
            </button>
          </div>
          {error && <p className="mt-2 text-[#ff3333]">{error}</p>}
          <div className="mt-10">
            <h5 className="text-[#828282] text-[13.44px] leading-[18.82px] relative before:absolute before:left-0 before:top-3 before:w-[97.78px] before:h-[0.96px]  before:bg-[#E6E6E6] after:absolute after:right-0 after:top-3 after:w-[97.78px] after:h-[0.96px] after:bg-[#E6E6E6]">
              or continue with
            </h5>
          </div>
          <div className="mt-6">
            <img
              className="w-full h-auto cursor-pointer"
              src={GoogleButton}
              alt="GoogleButton"
            />
          </div>
          <div className="mt-6">
            <p className="text-[11.52px] leading-[17.28px] text-[#828282]">
              By clicking continue, you agree to our
              <span className="text-black"> Terms of Service</span> and
              <span className="text-black"> Privacy Policy </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
