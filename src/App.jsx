import React from "react";
import { BiHomeAlt, BiBook, BiCog, BiMeteor } from "react-icons/bi";

import { Canvas } from "./components/canvas";
import { Form } from "./components/Form";
import "./index.css";
import Icon from "./components/icon";

function App() {
  return (
    <div className="overflow-x-hidden font-mono">
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
      <main className="bg-red-100 h-screen sm:ml-[11rem] mx-[5.5rem] mt-[4rem] text-black">
        <section>
          <p className="text-[3.052rem]">Welcome Back!</p>
        </section>
        <section>
          <p className="my-5 text-[1.953rem]">Course</p>
          <div className="border-2 border-[#e4e4e4] hover:border-[#c7c7c7] bg-white rounded-lg inline-block p-5 shadow-none hover:shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
            <img
              className="w-[17rem] h-[12rem] object-cover mb-4 rounded-lg"
              src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1608&q=80"
            />
            <h1 className="font-bold text-[1.25rem]">Classical mechanics</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
