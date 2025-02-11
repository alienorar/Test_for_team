const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 text-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-semibold text-gray-700">404</h1>
        <p className="text-lg text-gray-500 my-4">Oops! The page you’re looking for doesn’t exist.</p>
        <p className="text-sm text-gray-400 mb-6">It might have been moved, or the URL might be incorrect.</p>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
