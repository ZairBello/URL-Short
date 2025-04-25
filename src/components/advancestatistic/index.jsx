import React from "react";
import iconClock from "/public/images/icon-detailed-records.svg";
import iconBrand from "/public/images/icon-brand-recognition.svg";

const AdvanceStatistic = () => {
  return (
    <>
      {/* TITLE */}
      <div className="gap-4 flex flex-col items-center py-16">
        <h1 className="text-[1.7em] font-extrabold text-center text-[#35323e]">
          Advanced Statistics
        </h1>
        {/* PRAGRAPH */}
        <p className="text-base leading-6 text-center text-[#908f94] font-medium">
          Track how your are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      {/* DIV PRINCIPEL */}
      <div className="mt-10">
        {/* CHART 1 BRAND RECOGNITION */}
        <div className="bg-white w-full h-60 flex flex-col items-center rounded-lg">
          {/* DIV-IMAGE */}
          <div className="bg-[#3A3053] w-24 h-24 rounded-full flex justify-center -mt-12">
            <img
              src={iconBrand}
              alt="Icono de Reloj"
              className="scale-100 object-contain object-center"
            />
          </div>
          {/* DIV-TITLE */}
          <div className="w-full text-center mt-4">
            <h2 className="text-[1.5em] font-semibold text-[#35323e]">
              Brand Recognition
            </h2>
          </div>
          {/* DIV-PARAGRAPH */}
          <div className="w-full text-center mt-4 px-4">
            <p className="text-base leading-6 text-[#908f94] font-medium">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        {/* TIMELINE */}
        <div className="h-20 w-2 bg-cyan-400 m-auto" />
        {/* CHART 2 DETAILED RECORDS */}
        <div className="bg-white w-full h-60 flex flex-col items-center rounded-lg">
          {/* DIV-IMAGE */}
          <div className="bg-[#3A3053] w-24 h-24 rounded-full flex justify-center -mt-12">
            <img
              src={iconClock}
              alt="Icono de Reloj"
              className="scale-100 object-contain object-center"
            />
          </div>
          {/* DIV-TITLE */}
          <div className="w-full text-center mt-4">
            <h2 className="text-[1.5em] font-semibold text-[#35323e]">
              Detail Records
            </h2>
          </div>
          {/* DIV-PARAGRAPH */}
          <div className="w-full text-center mt-4 px-4">
            <p className="text-base leading-6 text-[#908f94] font-medium">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        {/* TIMELINE */}
        <div className="h-20 w-2 bg-cyan-400 m-auto" />
        {/* CHART 3 FULL CUSTOMIZATION */}
        <div className="bg-white w-full h-60 flex flex-col items-center rounded-lg">
          {/* DIV-IMAGE */}
          <div className="bg-[#3A3053] w-24 h-24 rounded-full flex justify-center -mt-12">
            <img
              src={iconBrand}
              alt="Icono de Reloj"
              className="scale-100 object-contain object-center"
            />
          </div>
          {/* DIV-TITLE */}
          <div className="w-full text-center mt-4">
            <h2 className="text-[1.5em] font-semibold text-[#35323e]">
              Fully Customizable
            </h2>
          </div>
          {/* DIV-PARAGRAPH */}
          <div className="w-full text-center mt-4 px-4">
            <p className="text-base leading-6 text-[#908f94] font-medium">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceStatistic;
