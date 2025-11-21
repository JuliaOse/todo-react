import { useState, useEffect } from "react";
import "./App.css";
import LightBG from "./images/bg-desktop-light.jpg";
import DarkBG from "./images/bg-desktop-dark.jpg";
import SunIcon from "./images/icon-sun.svg";
import MoonIcon from "./images/icon-moon.svg";
import Input from "./components/Input";
import NoteBoard from "./components/NoteBoard";

interface Note {
  id: string;
  title: string;
  status: string;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <section
        className=" bg-cover bg-center h-[30vh] flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${isDarkMode ? DarkBG : LightBG})`,
          // display: "flex",
          // flex: "row"
        }}
      >
        <div className=" flex flex-col w-[35%] gap-2">
          <div className="flex flex-row items-center justify-between   ">
            <h1 className="text-4xl font-extrabold  text-[color:var(--color-text)] transition-all duration-500 ease-in-out">
              TODO
            </h1>
            {/* <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="bg-none"
        > */}
            <img
              onClick={() => setIsDarkMode((prev) => !prev)}
              src={isDarkMode ? SunIcon : MoonIcon}
              width={25}
              height={25}
              alt="icon"
              // className="transition-all duration-500 ease-in-out"
            />
          </div>
          {/* </button> */}
          <div className=" w-full">
            <Input setAllNotes={setAllNotes} />
          </div>
        </div>
      </section>
      <section className="bg-[color:var(--color-bg)]  h-[70vh] transition-all duration-500 ease-in-out">
        <NoteBoard note={allNotes} setAllNotes={setAllNotes}/>
      </section>
    </>
  );
}

export default App;
