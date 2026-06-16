import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { serverURL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {userData} = useSelector((state) => state.user)
  const credits = userData.credits
  const handleSignOut = async () => {
      try {
        await axios.get(serverURL + "/api/auth/logout" , {withCredentials : true})
        dispatch(setUserData(null))
        navigate("/auth")
      } 
      catch (error) {
         console.log(error)
      }
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-xl
        border-b border-gray-200
        px-8 py-4
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/")}
  className="flex items-center gap-3 cursor-pointer"
>
  <img
    src={logo}
    alt="ExamNotes AI"
    className="w-14 h-14 object-contain"
  />

  <div>
    <h1 className="text-3xl font-black text-[#232323]">
      ExamNotes AI
    </h1>

    <p className="text-xs text-gray-500">
      AI-powered study companion
    </p>
  </div>
</motion.div>

        {/* Center */}
        <div className="flex items-center gap-4">
          
          {/* Credits */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              bg-[#232323]
              text-white
              px-5 py-2
              rounded-full
              font-semibold
              shadow-lg
            "
          >
            ⚡ 50 Credits
          </motion.div>

          {/* Buy Credits */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/pricing")}
            className="
              px-5 py-2
              rounded-full
              bg-gradient-to-r
              from-amber-400
              to-orange-500
              text-black
              font-semibold
              shadow-lg
            "
          >
            Buy Credits
          </motion.button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/history")}
            className="
              px-4 py-2
              rounded-xl
              bg-white
              border
              border-gray-200
              shadow-sm
              font-medium
            "
          >
            History
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignOut}
            className="
              px-4 py-2
              rounded-xl
              bg-[#232323]
              text-white
              font-medium
              shadow-md
            "
          >
            Sign Out
          </motion.button>
        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;