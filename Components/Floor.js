"use client";
import Image from "next/image";
import { useState } from "react";
import { default as Img, default as imgAPI } from "../public/images/ImageApi";
import text from "../public/text.json";
import Dropdown from "./Dropdown";
import ResponsiveFloor from "./ResponsiveFloor";

const CustomComponent = ({ heading, desc }) => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );

  return (
    <div className="container">
      <div className="p-4 mb-4 mx-12 hidden lg:block">
        {/* Heading and Subtext */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6 mt-4">{heading}</h2>
          <p className="text-gray-500">{desc}</p>
        </div>

        <div className="flex items-center gap-26 bg-floor p-4 rounded">
          {/* Element 1: Image */}

          <div className="relative w-60 h-3/4">
            <Image
              width={240}
              height={150}
              sizes="100vw"
              src={imgAPI.accom_img[0]}
              alt="Background"
            />

            {/* Icon at Bottom Left Corner */}
            <div className="absolute bottom-3 right-3 ">
              <a href="">
                <Image
                  width={12}
                  height={12}
                  sizes="100vw"
                  src={imgAPI.accom_vectors[9]}
                  alt="Icon"
                  className="w-9 h-9"
                />
              </a>
            </div>
          </div>
          {/* Element 2: Text with Icon */}
          <div className="flex flex-col ">
            <p className="text-2xl font-medium text-customblue ">1 Bed Room</p>
            <div className="flex items-center mt-1 ">
              <p className="text-2xl font-medium text-customblue">1</p>
              <img
                src={imgAPI.accom_vectors[10]}
                alt="icon"
                className="h-4 w-4"
              />
            </div>
          </div>

          {/* Element 3: Vertical Line */}
          <div className="border h-36"></div>

          {/* Element 4 and 5: Text and Subtext */}
          <div className="flex justify-center flex-col">
            <p className="text-2xlg text-customblue font-bold">500 Kč</p>
            <p className="text-gray-500 text-center mt-1">Tourist</p>
          </div>
          <div className="flex justify-center flex-col">
            <p className="text-2xlg text-customblue font-bold">600 Kč</p>
            <p className="text-gray-500 text-center mt-1">Standard</p>
          </div>

          {/* Element 6: Dropdown */}
          <div className=" flex-col gap-x-2 items-center">
            <Dropdown
              value={dropdownValue}
              onChange={(value) => setDropdownValue(value)}
            />
            <button className="w-full py-3 mt-2 px-4 rounded bg-gradient-to-r from-btngrad_1 to-btngrad_2 text-white text-xs flex items-center justify-center gap-1 font-urbanist">
              <Image
                src={Img.home_vectors[1]}
                width={12}
                height={12}
                alt="image"
                className="h-3.5 w-3.5"
              />
              {text.nav_btn}
            </button>
          </div>
        </div>
      </div>
      <ResponsiveFloor heading="Ground Floor" desc={text.first_floor} />
      <ResponsiveFloor heading="First Floor" desc={text.ground_floor} />
    </div>
  );
};

export default CustomComponent;
