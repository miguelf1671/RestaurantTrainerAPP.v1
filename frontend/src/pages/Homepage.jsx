import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="bg-blue-500  flex justify-center items-start h-screen">
        <div className="text-center px-40" style={{ marginTop: "20vh" }}>
          <h1 className=" font-mono font-bold text-2xl hover:underline decoration-wavy decoration-sky-500">
            "Empowering Your Team: Training a New Employee Made Simple and
            Effortless!"
          </h1>
          <NavLink to="/login">
            <button className="bg-sky-400 rounded px-1 py-1 mr-6 mt-6 text-sky-700 hover:bg-sky-300 font-semibold">
              Login
            </button>
          </NavLink>

          <NavLink to="/register">
            <button className="bg-sky-400 rounded px-1 py-1 ml-6 mt-6 text-sky-700 hover:bg-sky-300 font-semibold">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default HomePage;
