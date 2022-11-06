import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BiTask, BiLogOut } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useCookies } from "react-cookie";
import { handleAuth } from "../utils/reducers/reducer";
import Swal from "sweetalert2";

const SideBar = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const [cookies, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      removeCookie("token");
      dispatch(handleAuth(false));
      if (result.isConfirmed) {
        Swal.fire({
          title: "Successfully",
          text: "You have successfully logged out!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/");
          }
        });
      } else {
        return;
      }
    });
  };

  return (
    <div className="flex flex-col w-[50px] md:w-[200px] lg:w-[320px] h-screen bg-sidebar left-0 fixed px-3 md:px-8 lg:px-12 py-5 md:pt-16 md:pb-5 z-10 ">
      <Link to="/home">
        <p className="text-transparent md:text-[26px] lg:text-[30px] font-semibold mb-10 bg-clip-text bg-gradient-to-r from-[#D441B9] to-[#854AEA] hidden md:block lg:block">
          Mentutor
        </p>
        <p className="text-transparent text-[30px] font-semibold mb-10 bg-clip-text bg-gradient-to-r from-[#D441B9] to-[#854AEA] md:hidden">
          M
        </p>
      </Link>
      <div className="text-abu flex flex-col space-y-8 h-full font-light">
        <div className="flex flex-row space-x-0 md:space-x-8 items-center hover:text-button cursor-pointer">
          <AiFillHome size={25} />
          <h3 className="hidden md:block">Home</h3>
        </div>
        {isLoggedIn && (
          <div className="flex flex-row space-x-0 md:space-x-8 items-center  hover:text-button cursor-pointer">
            <BiTask size={25} />
            <h3 className="hidden md:block">Create Task</h3>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex flex-row space-x-0 md:space-x-8 items-center  hover:text-button cursor-pointer">
            <IoIosPeople size={25} />
            <h3 className="hidden md:block">Forum</h3>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex flex-row space-x-0 md:space-x-8 items-center hover:text-button cursor-pointer">
            <CgProfile size={25} />
            <h3 className="hidden md:block">Profile</h3>
          </div>
        )}
      </div>
      <div
        onClick={() => (cookies ? handleLogout() : navigate("/"))}
        className="text-abu flex flex-row space-x-0 md:space-x-8 items-center cursor-pointer"
      >
        <BiLogOut size={25} />
        <h3 className="hidden md:block">Logout</h3>
      </div>
    </div>
  );
};

export default SideBar;
