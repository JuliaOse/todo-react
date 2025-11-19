import { useState } from "react";
import "./App.css";
import LightBG from "./images/bg-desktop-light.jpg";
import DarkBG from "./images/bg-desktop-dark.jpg";
import SunIcon from "./images/icon-sun.svg";
import MoonIcon from "./images/icon-moon.svg";
import Input from "./components/Input";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <div
        className=" bg-cover bg-center h-[30vh] flex flex-row items-center justify-center gap-12"
        style={{
          backgroundImage: `url(${isDarkMode ? DarkBG : LightBG})`,
          // display: "flex",
          // flex: "row"
        }}
      >
        <h1 className="text-4xl font-extrabold px-6">TODO</h1>
        {/* <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="bg-none"
        > */}
        <img
          onClick={() => setIsDarkMode((prev) => !prev)}
          src={isDarkMode ? SunIcon : MoonIcon}
          width={40}
          height={40}
          alt="icon"
        />
        {/* </button> */}
        <Input />
      </div>
    </>
  );
}

export default App;
