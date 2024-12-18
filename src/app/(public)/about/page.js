export default function About() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Mussyawal Baihaki
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
              Mussyawal Baihaki lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
          </p>
          <div className="flex flex-wrap justify-center">
              <div>
              <a href="/">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                  Learn More
              </button>
              </a>
              </div>
          </div>
      </div>
  );
}