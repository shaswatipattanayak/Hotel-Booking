import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");

  const handleLogin = () => {
    localStorage.setItem("user", name);
    alert("Login Successful!");
  };

  return (
    <div className="text-center mt-10">
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleLogin}
        className="bg-lime-500 px-4 py-2 text-white ml-3"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
