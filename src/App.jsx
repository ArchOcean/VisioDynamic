import React from "react";
import { BiHomeAlt, BiBook, BiCog, BiMeteor } from "react-icons/bi";

import { Canvas } from "./components/canvas";
import { Form } from "./components/Form";
import "./index.css";
import Icon from "./components/icon";

function App() {
  return (
    <div className="overflow-hidden">
      <nav className="fixed top-0 left-0 z-40 w-[5.5rem] h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-[3rem] overflow-y-auto bg-black ">
          <ul className="h-full text-white text-[2.3rem] flex flex-col items-center place-content-between">
            <li className="flex flex-col gap-[12rem]">
              <Icon>
                <BiMeteor className="" />
              </Icon>
              <div className="flex flex-col gap-[4.5rem] items-center">
                <Icon>
                  <BiHomeAlt />
                </Icon>
                <Icon>
                  <BiBook className="" />
                </Icon>
              </div>
            </li>
            <li>
              <Icon>
                <BiCog className="" />
              </Icon>
            </li>
          </ul>
        </div>
      </nav>
      <main className="flex-auto bg-red-100 h-screen w-screen ml-[5.5rem] ">
        hi
      </main>
    </div>
  );
}

export default App;
