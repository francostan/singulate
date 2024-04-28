"use client";
import React, { useEffect, useState } from "react";
import MailContent from "./MailContent";

const EditComponent: React.FC<{ closeModal: () => void, isModalOpen: boolean }> = ({ closeModal, isModalOpen }) => {
  const [data, setData] = useState<Object[]>([
    { content: "Hola este es el mail" },
  ]);
  useEffect(() => {
    const existingDataString = localStorage.getItem("myData");
    if (existingDataString) {
      const existingData = JSON.parse(existingDataString);
      setData(existingData);
    }
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded">
      {data.map((item: any, idx: number) => (
        <div
          key={idx}
          className="w-1/2 h-full flex items-center justify-center bg-white"
        >
          <MailContent item={item} closeModal={closeModal} isModalOpen={isModalOpen} />
        </div>
      ))}
    </div>
  );
};

export default EditComponent;
