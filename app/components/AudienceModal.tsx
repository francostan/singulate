import React, { useState, useEffect } from 'react';

const AudienceModal = ({ audiences, setOpen }: { audiences: string[], setOpen: (open: boolean) => void }) => {
  const [audienceTexts, setAudienceTexts] = useState<{ [key: string]: string }>({});
  const [activeAudience, setActiveAudience] = useState<string | null>(null);

  useEffect(() => {
    const savedTexts = localStorage.getItem('audienceTexts');
    if (audiences.length > 0 && savedTexts) {
      const parsedTexts = JSON.parse(savedTexts);
      const updatedAudienceTexts: { [key: string]: string } = {};
  
      audiences.forEach((audience: string) => {
        if (parsedTexts[audience]) {
          updatedAudienceTexts[audience] = parsedTexts[audience];
        }
      });
  
      setAudienceTexts(updatedAudienceTexts);
    }
  }, []);

  const handleInputChange = (audience: string, value: string) => {
    setAudienceTexts({
      ...audienceTexts,
      [audience]: value,
    });
  };

  const handleSave = () => {
    // Guardar en el localStorage
    localStorage.setItem('audienceTexts', JSON.stringify(audienceTexts));
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/2 h-1/2 flex flex-col">
        <h2 className="text-xl mb-4">Add Text to Audience</h2>
        <div className="flex mb-4">
          {audiences.map((audience, index) => (
            <button
              key={index}
              className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2 ${
                activeAudience === audience && 'bg-blue-700'
              }`}
              onClick={() => setActiveAudience(audience)}
            >
              {audience}
            </button>
          ))}
        </div>
        {activeAudience && (
          <div className="mb-4">
            <input
              type="text"
              value={audienceTexts[activeAudience] || ''}
              onChange={(e) => handleInputChange(activeAudience, e.target.value)}
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter text"
            />
          </div>
        )}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-auto"
          onClick={handleSave}
        >
          Save Audience
        </button>
      </div>
    </div>
  );
};

export default AudienceModal;