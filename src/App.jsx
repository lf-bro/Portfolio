import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center gap-5">
        <AiOutlineLoading3Quarters className="animate-spin" />
        Under Construction
      </div>
    </div>
  );
};

export default App;
