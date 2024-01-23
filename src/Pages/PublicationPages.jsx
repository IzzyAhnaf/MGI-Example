import { useState } from "react";
import { GoArrowDown, GoArrowRight, GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import '../PublicationPages.css'
import DekstopPublication from "../Layout/PublicationPages/Dekstop";

const PublicationsPages = ({Mobile, MobileOrTablet, MobileHigh}) => {


    return (
      <>
      {Mobile ? (
        <>
        <div className="flex justify-center items-center dark:bg-[#212121] text-black dark:text-white h-screen">
            <p className="text-2xl font-inter">Comming Soon!</p>
        </div>
        </>
      ) : MobileOrTablet ? (
        <>
        <div className="flex justify-center items-center dark:bg-[#212121] text-black dark:text-white h-screen">
            <p className="text-2xl font-inter">Comming Soon!</p>
        </div>
        </>
      ) : MobileHigh ? (
        <>
        <div className="flex justify-center items-center dark:bg-[#212121] text-black dark:text-white h-screen">
            <p className="text-2xl font-inter">Comming Soon!</p>
        </div>
        </>
      ) : (
        <DekstopPublication />
      )}
      </>
    );
  };
  
  export default PublicationsPages;
  