import React from "react";

const AdvanceStatistic = () => {
  return (
    <>
    {/* TITLE */}
      <div className="gap-4 flex flex-col items-center pt-10">
        <h1 className="text-[1.7em] font-extrabold text-center text-[#35323e]">
          Advanced Statistics
        </h1>
        <p className="text-base leading-6 text-center text-[#908f94] font-medium">
          Track how your are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      {/* LINE OF THE TIME */}
      <div className="mt-10">
        {/* CHART 1 BRAND RECOGNITION */}
        <div className="bg-white w-full ">
            {/* DIV-IMAGE */}
            <div className="">
            </div>
            {/* DIV-TITLE */}
            <div className="w-full">
                <h2 className="text-[1.5em] font-semibold text-[#35323e]">
                    Brand Recognition
                </h2>
            </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceStatistic;
