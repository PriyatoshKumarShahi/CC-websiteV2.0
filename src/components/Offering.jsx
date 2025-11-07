import React from "react";
import "../App.css";
import { PinContainer } from "./PinContainer";

const Offering = () => {
  return (
    <div className="offering-container ">
      <div className="offering-main">
        <div className="text text-white">
          <h2>
            Our <span>Initiatives</span>
          </h2>
        </div>
        <div className="cards-container flex flex-row  justify ">
          <PinContainer title=" Coding WorkSpaces & Upskill" href="">
            <div className="flex basis-full flex-col cards   bg-transparent backdrop-blur-sm p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[25rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-start  text-base text-slate-100">
                Coding WorkSpaces & Upskill
              </h3>
              <div className="text-base !m-0 !p-0 font-normal text-start leading-relaxed">
                <span className="text-slate-500 ">
                  We host coding workshops for hands-on practice and help
                  participants upskill by applying these techniques in
                  competitive environments.
                </span>
              </div>
              <div className="flex flex-1 w-full h-100 rounded-lg mt-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]" />
            </div>
          </PinContainer>

          <PinContainer title="Connect With Cool Mentors" href="">
            <div className="flex basis-full flex-col cards  bg-transparent backdrop-blur-sm p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[25rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-start  text-base text-slate-100">
                Connect With Cool Mentors
              </h3>
              <div className="text-base !m-0 !p-0 font-normal text-start leading-relaxed">
                <span className="text-slate-500 ">
                  Connect with Experienced mentors,seniors and explore new
                  perspectives.
                </span>
              </div>
              <div className="flex flex-1 w-full h-100 rounded-lg mt-4 bg-gradient-to-br from-[#1a1b26] via-[#4f46e5] to-[#0d9488]/60" />
            </div>
          </PinContainer>

          <PinContainer title="Innovation Hub" href="">
            <div className="flex basis-full flex-col cards  bg-transparent backdrop-blur-sm p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[25rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-start  text-base text-slate-100">
                Innovation Hub
              </h3>
              <div className="text-base !m-0 !p-0 font-normal text-start leading-relaxed">
                <span className="text-slate-500 ">
                  Unlocking the potential of innovations and collaborating ideas
                  and minds to create the best!
                </span>
              </div>
              <div className="flex flex-1 w-full h-100 rounded-lg mt-4 bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900" />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default Offering;
