import React from "react";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import axios from "axios";
import { serverURL } from "../config.js";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";

function Auth() {
    const dispatch = useDispatch()
    const [error, setError] = React.useState("")
 
    const handleGoogleAuth = async () => {
         setError("")
         try {
            const response = await signInWithPopup(auth , provider)
            const User = response.user
            const name = User.displayName
            const email = User.email
            const result = await axios.post(serverURL + "/api/auth/google" , {name , email} , {
                withCredentials : true
            })
            const user = result.data.user || result.data
            const token = result.data.token
            if (token) {
              localStorage.setItem("token", token)
            }
            dispatch(setUserData(user))
         } 
         catch (error) {
            console.error("Auth Error:", error.message)
            
            // Handle specific error types
            if (error.code === "auth/popup-closed-by-user") {
              setError("Sign-in popup was closed. Please try again.")
            } else if (error.message === "Network Error" || error.code === "ERR_NETWORK") {
              setError("Network error: Please check your internet connection or ensure the server is running on port 8000")
            } else if (error.response?.status === 401 || error.response?.status === 403) {
              setError("Authentication failed. Please try again.")
            } else {
              setError(error.response?.data?.message || error.message || "Authentication failed. Please try again.")
            }
         }
    }




  const features = [
    {
      icon: "🎁",
      title: "50 Free Credits",
      desc: "Start with 50 credits to generate notes without paying.",
    },
    {
      icon: "📘",
      title: "Exam Notes",
      desc: "High-yield, revision-ready exam-oriented notes.",
    },
    {
      icon: "📁",
      title: "Project Notes",
      desc: "Well structured documentation for assignments & projects.",
    },
    {
      icon: "📊",
      title: "Charts & Graphs",
      desc: "Auto generated diagrams, charts and flow graphs.",
    },
    {
      icon: "⬇️",
      title: "Free PDF Download",
      desc: "Download clean printable PDFs instantly.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Banner */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#2d2d2d] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] p-6"
        >
          <h1 className="text-3xl font-bold text-white">
            ExamNotes AI
          </h1>

          <p className="text-gray-300 mt-1">
            AI-powered exam-oriented notes & revision
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-7xl font-black text-[#333] leading-tight"
            >
              Unlock Smart
              <br />
              AI Notes
            </motion.h1>

            <motion.button
             onClick={handleGoogleAuth}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#232323] text-white w-fit px-8 py-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <FcGoogle size={22} />
              Continue with Google
            </motion.button>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            <p className="text-gray-500 mt-8 text-lg max-w-lg leading-relaxed">
              You get 50 FREE credits to create exam notes,
              project notes, charts, graphs and download
              clean PDFs instantly using AI.
            </p>

            <p className="text-gray-400 text-sm mt-4">
              Start with 50 free credits • Upgrade anytime for more
              credits • Instant access
            </p>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className={`bg-[#232323]
                rounded-2xl
                p-6
                shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                ${
                  index === 4
                    ? "sm:col-span-2 sm:w-[48%]"
                    : ""
                }`}
              >
                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Auth;