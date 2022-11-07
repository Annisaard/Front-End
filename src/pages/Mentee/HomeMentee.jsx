import React from "react";

import hero from "../../assets/hero.png";
import toys3 from "../../assets/toys-3.png";
import { CardTask } from "../../components/Cards";
import { LayoutMentee } from "../../components/Layout";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { HiOutlineDocumentText } from "react-icons/hi";
const HomeMentee = () => {
  return (
    <LayoutMentee>
      <div className="pb-9">
        <div className="flex justify-between ">
          <div className="md:space-y-2">
            <h1 className="text-putih text-lg md:text-3xl font-medium">
              Hello <span>Lee !</span>
            </h1>
            <p className="text-abu font-light text-[8px] md:text-sm">
              Welcome back, you are doing great.
            </p>
          </div>
          <div className="flex items-center ">
            <Link to="/profilementee">
              <img
                id="gbr-hero"
                src={toys3}
                alt="avatar"
                className="h-[1.5rem] w-[1.5rem]  md:h-[3rem] md:w-[3rem] rounded-full "
              />
            </Link>
            <div className="pl-2 md:pl-4 space-y-0">
              <Link to="/profilementee">
                <h1
                  id="name-profile"
                  className="text-putih text-[10px] md:text-base"
                >
                  Lee min ho
                </h1>
              </Link>

              <p className="text-abu font-light text-[8px] md:text-xs">
                Mentee
              </p>
            </div>
          </div>
        </div>
        <div className="w-[18rem] h-[8rem] md:w-[32rem] md:h-[12rem] lg:w-[52rem] lg:h-[15rem] gradient-home rounded-2xl md:rounded-[30px] mt-[4rem] ">
          <div className=" flex">
            <div className=" pl-5 pt-5 md:pl-9 md:pt-9">
              <h1 className="text-putih text-sm md:text-lg lg:text-2xl font-medium">
                When nothing goes right, go left
              </h1>
              <p className="text-abu text-[6px] md:text-xs font-light mt-2  lg:mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="relative bottom-9">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
        <div className="mt-[3rem] md:mt-[5rem]">
          <h1 className="text-putih text-lg font-medium mb-6">Your Task</h1>
          <div className="flex justify-end text-putih hover:text-button font-normal cursor-pointer mb-2 text-xs mr-3 ">
            <Link to="/task">
              <p id="view-task">View All Task</p>
            </Link>
          </div>
          <CardTask />

          {/* modal submit */}
          <input
            type="checkbox"
            id="modal-submit-task"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box  bg-card">
              <label
                htmlFor="modal-submit-task"
                className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
              >
                ✕
              </label>
              <form className="flex flex-col md:p-9 lg:p-9 ">
                <h3 className="font-medium text-lg text-putih mb-1">
                  Submit your task
                </h3>
                <div className="w-[15rem] h-[3rem] bg-abu mt-4 text-xs flex items-center rounded-sm px-2">
                  untuk file
                </div>
                <div className="flex justify-between mt-[2rem]">
                  <span id="Upload-file" className="cursor-pointer text-putih">
                    <HiOutlineDocumentText className="text-2xl" />
                  </span>
                  <CustomButton
                    id="btn-submitMentee"
                    label="Submit"
                    color="Primary"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* end modal */}
        </div>
      </div>
    </LayoutMentee>
  );
};

export default HomeMentee;
