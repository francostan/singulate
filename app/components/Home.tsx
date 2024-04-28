'use client';
import React, { useState } from "react";
import EditComponent from "./EditComponent";
import RightSidebar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";

const HomeComponent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="width-full h-full flex flex-row justify-center items-center items-stretch flex-grow">
      <div className="w-1/4 h-full bg-gray-300">
        <LeftSideBar />
      </div>
      <EditComponent closeModal={closeModal} isModalOpen={isModalOpen} />
      <div className="w-1/3 h-full bg-gray-300">
        <RightSidebar openModal={openModal} />
      </div>
    </div>
  );
};

export default HomeComponent;
