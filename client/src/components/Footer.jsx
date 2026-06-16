import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import axios from "axios";
import { serverURL } from "../config";
import { setUserData } from "../redux/userSlice";

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
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
    <footer className="bg-[#232323] text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left Section */}
          <div>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="ExamNotes AI"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  ExamNotes AI
                </h2>

                <p className="text-gray-400 text-sm">
                  AI-powered study companion
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-400 max-w-md leading-relaxed">
              Generate smart notes, study materials, summaries,
              and downloadable PDFs instantly using AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/history")}
                className="
                  text-left
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-200
                "
              >
                📋 History
              </button>

              <button
                onClick={() => navigate("/notes")}
                className="
                  text-left
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-200
                "
              >
                📝 Notes
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="
                  text-left
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-200
                "
              >
               Add Credits
              </button>
            </div>
          </div>
          {/* Contact Us */}
<div>
  <h3 className="text-xl font-semibold mb-5">
    Contact Us
  </h3>

  <div className="flex flex-col gap-3">

    <button
      onClick={handleSignOut}
      className="
        text-left
        text-gray-300
        hover:text-white
        transition-all
        duration-200
      "
    >
      🚪 Sign Out
    </button>

    <a
      href="mailto:support@examnotesai.com"
      className="
        text-gray-300
        hover:text-white
        transition-all
        duration-200
      "
    >
      📧 support@examnotesai.com
    </a>

  </div>
</div>
          

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ExamNotes AI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;