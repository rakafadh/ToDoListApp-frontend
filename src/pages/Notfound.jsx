const NotFound = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 hover:underline">Go back to home</a>
      </div>
    );
  };
  
  export default NotFound;