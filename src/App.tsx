import { useState, useEffect } from "react";
import "./App.css";
import LightBG from "./images/bg-desktop-light.jpg";
import DarkBG from "./images/bg-desktop-dark.jpg";
import SunIcon from "./images/icon-sun.svg";
import MoonIcon from "./images/icon-moon.svg";
import Input from "./components/Input";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div
        className=" bg-cover bg-center h-[30vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${isDarkMode ? DarkBG : LightBG})`,
          // display: "flex",
          // flex: "row"
        }}
      >
        <div className="flex flex-row items-center justify-between gap-12">
          <h1 className="text-4xl font-extrabold px-6 ">
            TODO
          </h1>
          {/* <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="bg-none"
        > */}
          <img
            onClick={() => setIsDarkMode((prev) => !prev)}
            src={isDarkMode ? SunIcon : MoonIcon}
            width={30}
            height={30}
            alt="icon"
          />
        </div>
        {/* </button> */}
        <div className="w-[40%] self-center">
          <Input />
        </div>
      </div>
      <div className="dark:bg-[#24273C]">
        <p>hii</p>
      </div>
    </>
  );
}

export default App;
