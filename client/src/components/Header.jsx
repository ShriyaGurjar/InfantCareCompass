import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { userinfo } from "../store/slices/userSlice";
import { persistor } from "../store/store.jsx";
import commnApiEndpoint from '../common/backendAPI.jsx'

export default function Header() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
console.log('header',userData);

  // Extract `isActive` from the Redux store
  const isLoggedIn = userData[0]?.isActive || false;

  const  handleSignOut = async () => {
    try {
      const response = await fetch(commnApiEndpoint.logout.url,{
        method:'post',
        credentials: 'include', 
      })
      console.log("response from logoutApi:",response)
      if(response.ok){
        // dispatch(userinfo({ isActive: false }));
        //  // Clear the persisted Redux state
        // persistor.purge();
        dispatch({ type: 'RESET_STATE' });
await persistor.purge(); // Clears persisted state from localStorage

        
        // console.log("response is ok");
        
      }
    } catch (error) {
      console.log("error in logout Api:", error)
    }
    // Reset user state
  
  
   
  
  };

  return (
    <div className="flex flex-col w-full fixed top-0 z-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div>
            <Link to="/">
              <h1 className="text-2xl font-bold text-blue-600">MyLogo</h1>
            </Link>
          </div>

          {/* Sign In / Sign Out */}
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
              >
                Sign Out
              </button>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/signin"
                  className="text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/registration"
                  className="text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <Navbar />
    </div>
  );
}
