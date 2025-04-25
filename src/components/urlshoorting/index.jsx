import React, { useState } from "react";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]); // Cambiado a un arreglo
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setOriginalUrl(e.target.value);
  };

  const handleShortenClick = async () => {
    if (!originalUrl) {
      setError("Por favor, ingresa una URL");
      return;
    }

    setIsLoading(true); // Activa el indicador de carga

    try {
      const response = await fetch(`https://api.tinyurl.com/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 1FuoHHJgvjN4uMer8XyWK5BIlB6PW9h0f7IvdYwJmtLv3EYh0J7eoxdWwZXw",
        },
        body: JSON.stringify({ url: originalUrl }),
      });

      const data = await response.json();
      if (data.data && data.data.tiny_url) {
        // Agrega el nuevo enlace al arreglo de enlaces acortados con isCopied inicializado en false
        setShortenedUrls((prev) => [
          ...prev,
          { original: originalUrl, shortened: data.data.tiny_url, isCopied: false },
        ]);
        setError("");
        setOriginalUrl(""); // Limpia el campo de entrada
      } else {
        setError("Error al acortar la URL");
      }
    } catch (error) {
      setError("Error al acortar la URL");
    } finally {
      setIsLoading(false); // Desactiva el indicador de carga
    }
  };

  const handleCopyClick = (index) => {
    // Copia la URL al portapapeles
    navigator.clipboard.writeText(shortenedUrls[index].shortened);

    // Actualiza el estado de isCopied solo para el enlace clicado
    setShortenedUrls((prev) =>
      prev.map((url, i) =>
        i === index ? { ...url, isCopied: true } : { ...url, isCopied: false }
      )
    );
  };

  return (

    <div className="w-full px-4 flex flex-col items-center font-poppins">
      <div className="bg-[#3A3053] h-46 p-4 w-full lg:w-4/5 rounded-lg ">
      {/* THE URL IMPUT */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-around gap-4">
          <input
            className="p-4 rounded-lg truncate lg:w-4/6"
            placeholder="Ingresa una URL para acortar..."
            value={originalUrl}
            onChange={handleInputChange}
          />
          <button
            onClick={handleShortenClick}
            className="px-12 py-2 text-lg font-bold text-white bg-cyan-400 rounded-full hover:bg-cyan-500 transition-transform transform hover:scale-105"
            disabled={isLoading} // Desactiva el botón mientras carga
          >
            {isLoading ? "Cargando..." : "Shorten it!"}
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {/* Renderiza los cuadros de enlaces acortados */}
      {shortenedUrls.map((url, index) => (
        <div
          key={index}
          className="mt-4 p-4 w-full overflow-hidden bg-white rounded-lg flex flex-col lg:flex-row lg:justify-between gap-y-2"
        >
          <p className="text-gray-700 truncate break-all text-right">{url.original}</p>
          <hr />
          <div className="flex items-center my-2">
            <a
              href={url.shortened}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline break-all mr-4"
            >
              {url.shortened}
            </a>
          </div>
          <button
            onClick={() => handleCopyClick(index)}
            className={`px-4 py-2 text-sm font-bold text-white rounded-lg transition-all duration-400 ${
              url.isCopied ? "bg-[#3A3053]" : "bg-cyan-500"
            }`}
          >
            {url.isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UrlShortener;
