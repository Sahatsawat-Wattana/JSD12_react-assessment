import NavBar from "./NavBar"
import { useState, useEffect } from "react"
import ButtonHome from "./ButtonHome";

export default function Home() {
  const [isUserHome, setIsUserHome] = useState(false);
  const [isAdminHome, setIsAdminHome] = useState(false);
  const [itemList, setItemList] = useState([]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      lastname: lastName,
      position: position,
    };

    try {
      const response = await fetch(
        "https://67eca027aa794fb3222e43e2.mockapi.io/members",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(newUser),
        },
      );

      if (response.ok) {
        setName("");
        setLastName("");
        setPosition("");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67eca027aa794fb3222e43e2.mockapi.io/members",
        );
        const result = await response.json();
        setItemList(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [name]);

  const handleUserHome = () => {
    setIsUserHome(true);
    setIsAdminHome(false);
  }

   const handleAdminHome = () => {
     setIsAdminHome(true);
     setIsUserHome(false);
   };


   const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        setItemList((prevList) => prevList.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Network error while deleting:", error);
    }
   }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      <NavBar />

      <div className="max-w-5xl mx-auto p-6 md:p-12">
        {!isUserHome && !isAdminHome && (
          <div className="bg-white rounded-3xl shadow-sm border border-indigo-50 p-10 text-center flex flex-col items-center gap-6 transition-all duration-300">
            <h1 className="text-3xl font-bold text-indigo-400">
              Generation Thailand React-Assessment
            </h1>
            <ButtonHome
              handleUserHome={handleUserHome}
              handleAdminHome={handleAdminHome}
            />
          </div>
        )}

        {isUserHome && !isAdminHome && (
          <div className="bg-white rounded-3xl shadow-sm border border-pink-50 p-8 flex flex-col gap-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h1 className="text-2xl font-bold text-pink-400">
                Generation Thailand Home - User Section
              </h1>
              <ButtonHome
                handleUserHome={handleUserHome}
                handleAdminHome={handleAdminHome}
              />
            </div>

            <div className="overflow-x-auto rounded-2xl border border-pink-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-pink-100 text-pink-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Last Name</th>
                    <th className="px-6 py-4 font-semibold">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {itemList.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-pink-50 hover:bg-pink-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.lastname}</td>
                      <td className="px-6 py-4">{item.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!isUserHome && isAdminHome && (
          <div className="bg-white rounded-3xl shadow-sm border border-purple-50 p-8 flex flex-col gap-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h1 className="text-2xl font-bold text-purple-400">
                Generation Thailand Home - Admin Section
              </h1>
              <ButtonHome
                handleUserHome={handleUserHome}
                handleAdminHome={handleAdminHome}
              />
            </div>

            <div className="bg-purple-50/50 p-6 rounded-2xl">
              <p className="text-purple-800 font-semibold mb-4">
                Create User Here
              </p>
              <form
                onSubmit={handleOnSubmit}
                className="flex flex-col md:flex-row gap-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 rounded-xl border-2 border-purple-100 px-4 py-2 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-colors bg-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="flex-1 rounded-xl border-2 border-purple-100 px-4 py-2 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-colors bg-white"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                  className="flex-1 rounded-xl border-2 border-purple-100 px-4 py-2 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-colors bg-white"
                />
                <button
                  type="submit"
                  className="bg-teal-200 hover:bg-teal-300 text-teal-800 font-semibold py-2 px-8 rounded-xl transition-colors shadow-sm"
                >
                  Save
                </button>
              </form>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-purple-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-purple-100 text-purple-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Last Name</th>
                    <th className="px-6 py-4 font-semibold">Position</th>
                    <th className="px-6 py-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {itemList.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-purple-50 hover:bg-purple-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.lastname}</td>
                      <td className="px-6 py-4">{item.position}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-rose-200 hover:bg-rose-300 text-rose-800 font-medium py-1.5 px-4 rounded-lg transition-colors shadow-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}