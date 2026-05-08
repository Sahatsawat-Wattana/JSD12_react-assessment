export default function ButtonHome({ handleUserHome, handleAdminHome }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={handleUserHome}
        className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-95"
      >
        User Home Section
      </button>

      <button
        onClick={handleAdminHome}
        className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-95"
      >
        Admin Home Section
      </button>
    </div>
  );
}