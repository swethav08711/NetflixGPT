import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const gptLanguage = useSelector((store) => store?.config?.language);
  return (
    <div className=" pt-[7%] flex justify-center">
      <form className="w-1/2  grid grid-cols-12 m-2">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[gptLanguage].gptSearchPlaceholder}
        />
        <button className="px-4 m-4 col-span-3 py-2 bg-blue-400 text-white rounded-md">
          {lang[gptLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
