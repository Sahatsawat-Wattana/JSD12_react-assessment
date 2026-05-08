import NavBar from "./NavBar";

export default function Owner() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      <NavBar />

      <div className="max-w-2xl mx-auto p-6 md:p-12">
        <div className="bg-white rounded-3xl shadow-sm border border-teal-50 p-10 text-center flex flex-col items-center gap-8 transition-all duration-300">
          <h1 className="text-3xl font-bold text-teal-400">This is me</h1>

          {/* Image Container with soft glow effect */}
          <div className="relative group">
            <div className="absolute inset-0 bg-teal-200 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <img
              src="./Alexander.webp"
              alt="Alexander"
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-sm border-4 border-white"
            />
          </div>

          <div className="bg-teal-50 px-8 py-2.5 rounded-full border border-teal-100">
            <p className="text-teal-800 font-semibold tracking-wider uppercase text-sm">
              Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}