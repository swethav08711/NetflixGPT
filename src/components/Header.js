import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/useSlice";
import { LOGO, SUPPORETED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSearch";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleGptSearchClick = () => {
    // Toggle Gpt search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageOptions = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex gap-4 ">
          {showGptSearch && (
            <select
              className="px-4 bg-gray-600 text-white font-bold text-sm rounded-md"
              onChange={handleLanguageOptions}
            >
              {SUPPORETED_LANGUAGES.map((ele) => (
                <option key={ele.name} value={ele.identifier}>
                  {ele.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white px-4 py-2 bg-blue-400 rounded-md font-bold"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page " : "GPT Search"}
          </button>
          <img className="w-9 h-9 rounded-md" src={user.photoURL} alt="icon" />
          <button
            className="text-white font-bold text-md"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
