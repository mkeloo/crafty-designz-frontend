type ApiUrlBlockProps = {
  title: string;
  request: string;
  url: string;
};

const ApiUrlBlock = ({ title, request, url }: ApiUrlBlockProps) => {
  // Set request type colors
  const requestColors: { [key: string]: string } = {
    GET: 'bg-green-600',
    POST: 'bg-blue-400',
    UPDATE: 'bg-orange-500',
    DELETE: 'bg-red-600',
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl text-white font-bold mb-3">{title}</h2>

      <div className="p-4 bg-gray-800 text-white rounded-md shadow-md py-6">
        <pre>
          <code>
            <span
              className={`font-mono font-bold ${
                requestColors[request] || 'bg-gray-600'
              } py-4 px-4 rounded-md mr-6 ml-2 cursor-not-allowed select-none`}
            >
              {request}
            </span>
            {url}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ApiUrlBlock;
