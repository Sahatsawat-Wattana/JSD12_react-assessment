import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm border-b border-indigo-50 px-6 py-4 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex justify-end gap-2 sm:gap-4">
        <Link
          to="/"
          className="text-slate-600 font-semibold hover:text-indigo-700 hover:bg-indigo-50 px-5 py-2 rounded-xl transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/owner"
          className="text-slate-600 font-semibold hover:text-purple-700 hover:bg-purple-50 px-5 py-2 rounded-xl transition-all duration-300"
        >
          Owner
        </Link>
      </div>
    </nav>
  );
}