import React from "react";
import { BiHomeAlt, BiBook, BiCog } from "react-icons/bi";
import { Canvas } from "./components/canvas";
import { Form } from "./components/Form";
import "./index.css";

function App() {
  return (
    <div>
      <nav className="fixed top-0 left-0 z-40 w-[6rem] h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-8 overflow-y-auto bg-black ">
          <ul className="h-full text-white text-4xl flex flex-col items-center place-content-between">
            <li>
              <BiHomeAlt className="" />
            </li>
            <li>
              <BiBook className="" />
            </li>
            <li>
              <BiCog className="" />
            </li>
          </ul>
        </div>
      </nav>
      <main className="flex-auto h-full bg-white"></main>
    </div>
  );
}

export default App;
