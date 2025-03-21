import React, { useState } from "react";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setOriginalUrl(e.target.value);
  };

  const handleShortenClick = async () => {
    if (!originalUrl) {
      setError("Por favor, ingresa una URL");
      return;
    }

    // https://cors-anywhere.herokuapp.com/https://ulvis.net/api/v1/shorten
    try {
      const response = await fetch(`https://cleanuri.com/api/v1/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: originalUrl })
      });

      const data = await response.json();
      if (data.error) {
        setError("Error al acortar la URL");
        setShortenedUrl("");
      } else {
        setShortenedUrl(data.shortUrl);
        setError("");
      }
    } catch (error) {
      setError("Error al acortar la URL");
      setShortenedUrl("");
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortenedUrl);
  };

  return (
    <div className="w-full px-4 flex flex-col items-center font-poppins">
      <div className="bg-[#3A3053] p-4 w-80 lg:w-4/5 rounded-lg overflow-hidden bg-right-top bg-no-repeat">
        <div className="w-full flex flex-col lg:flex-row justify-around gap-4">
          <input
            className="p-4 rounded-lg lg:w-4/6"
            placeholder="Ingresa una URL para acortar..."
            value={originalUrl}
            onChange={handleInputChange}
          />
          <button
            onClick={handleShortenClick}
            className="px-12 py-2 text-lg font-bold text-white bg-cyan-400 rounded-full hover:bg-cyan-500 transition-transform transform hover:scale-105"
          >
            Shorten it!
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {shortenedUrl && (
          <div className="mt-4 p-4 bg-white rounded-lg flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-700 break-all">{originalUrl}</p>
            <div className="flex items-center mt-2 lg:mt-0">
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 underline break-all mr-4"
              >
                {shortenedUrl}
              </a>
              <button
                onClick={handleCopyClick}
                className="px-4 py-2 text-sm font-bold text-white bg-cyan-400 rounded-full hover:bg-cyan-500 transition-transform transform hover:scale-105"
              >
                Copiar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
