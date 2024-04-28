import React, { useEffect, useState } from "react";
import Tiptap from "./TipTapComponent";
import AudienceModal from "./AudienceModal";

const MailContent = ({
  item,
  closeModal,
  isModalOpen,
}: {
  item: any;
  closeModal: () => void;
  isModalOpen: boolean;
}) => {
  const [mailContent, setMailContent] = useState(item.content);
  const [audiencies, setAudiencies] = useState<string[]>([""]);
  const [currentValue, setCurrentValue] = useState("");
  const [openParagraph, setOpenParagraph] = useState(false);
  const [audienceTexts, setAudienceTexts] = useState<{ [key: string]: string }>(
    {}
  );
  const [audienceSelectedContent, setAudienceSelectedContent] = useState("");

  useEffect(() => {
    const localStorageTexts = localStorage.getItem("audienceTexts");
    const localStorageAudience = localStorage.getItem("audience");
    if (localStorageTexts) {
      setAudienceTexts(JSON.parse(localStorageTexts));
    }
    if (localStorageAudience && localStorageAudience.length > 0) {
      setAudiencies(JSON.parse(localStorageAudience));
    }
  }, [openParagraph]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMailContent(event?.target?.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (event.type === "submit") {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    localStorage.setItem("audience", JSON.stringify(audiencies));
    closeModal();
    setOpenParagraph(true);
  };

  const handleAddAudience = () => {
    setAudiencies([...audiencies, ""]);
  };

  const handleAudienceChange = (index: number, value: string) => {
    const updatedAudiences = [...audiencies];
    updatedAudiences[index] = value;
    setAudiencies(updatedAudiences);
    setCurrentValue("");
  };

  const handleAudienceTextChange = (audienceText: string) => {
     setAudienceSelectedContent(audienceText);
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-1/3 flex items-center justify-center bg-gray-600 mb-4">
        <p>IMAGE</p>
      </div>
      <div className="w-full h-full">
        <Tiptap content={mailContent} onChange={handleChange} />
        {audienceSelectedContent !== "" && <p className="w-full h-full border-none outline-none ml-8 text-lg resize-none white-space-pre-wrap">{audienceSelectedContent}</p>}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/2 h-fit-content flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl">Branched Paragraph</h2>
                <button onClick={() => {
                    setAudiencies([""]);
                    closeModal()
                }
                    }>&times;</button>
              </div>
              <h2 className="text-lg mb-4">Who is this paragraph for?</h2>
              <div className="mb-4 flex flex-col gap-2 w-full">
                <form onSubmit={handleSubmit}>
                  {audiencies.map((audience, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={`Enter Audience, push enter to confirm change.`}
                      className="border border-gray-300 p-2 mb-3 w-full"
                      value={
                        audience !== ""
                          ? `${index + 1}:  ${audience}`
                          : currentValue
                      }
                      onChange={(e) => {
                        handleAudienceChange(index, "");
                        const value = e.target?.value?.split(":")[1]?.trim();
                        setCurrentValue(value ? value : e.target.value);
                      }}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        handleAudienceChange(index, currentValue)
                      }
                    />
                  ))}
                </form>
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mb-2 w-1/3"
                  onClick={handleAddAudience}
                >
                  Add More Audiences
                </button>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-auto"
                onClick={handleSubmit}
              >
                Save Audience
              </button>
            </div>
          </div>
        )}
        {openParagraph && (
          <AudienceModal audiences={audiencies} setOpen={setOpenParagraph} />
        )}
      </div>
      {Object.keys(audienceTexts).length > 0 && (
        <div className="w-1/2 h-full flex items-start justify-center ">
            {Object.keys(audienceTexts).map((audienceText, index) => (
                <button
                    key={index}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2"
                    onClick={() => handleAudienceTextChange(audienceTexts[audienceText])}
                >
                    {audienceText}
                </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default MailContent;
