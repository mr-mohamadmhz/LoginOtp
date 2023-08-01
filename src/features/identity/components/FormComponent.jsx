import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FormComponent(props) {
  return (
    <>
      <form action="">
        <div
          className="py-5 px-3 top-[50%] left-[50%] block fixed w-[40vw] h-[20vw] rounded-[15px] bg-slate-400"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="top-[50%] left-[50%] block fixed"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-center my-5">
              <h1 className="text-blue-50 font-bold text-[1.5rem]">
                {props.headerText}
              </h1>
            </div>
            <p className="text-white my-2">{props.labelText}</p>
            <div className="relative w-[35vw]">
              <FontAwesomeIcon
                icon={props.icon}
                className="absolute text-white top-[30px] left-[0px]"
                onClick={props.handleClickIcon}
              />
              <input
                id="input_id"
                type={props.inputType}
                placeholder={props.placeholder}
                className="px-6 py-4 my-2 text-white placeholder:text-white outline-none w-full bg-inherit border-b-2"
                onChange={props.onChangeInput}
              />
            </div>
            <div className="text-center my-5">
              <button
                type={props.buttonType}
                className="px-4 py-2 bg-slate-800 text-white rounded-[15px]"
                onClick={props.handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
