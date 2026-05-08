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
  }, []);

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
    <>
      <NavBar />
      <div>
        {!isUserHome && !isAdminHome && (
          <div>
            <h1>Generation Thailand React-Assessment</h1>
            <ButtonHome
              handleUserHome={handleUserHome}
              handleAdminHome={handleAdminHome}
            />
          </div>
        )}
        {isUserHome && !isAdminHome && (
          <div>
            <h1>Generation Thailand Home- User Section</h1>
            <ButtonHome
              handleUserHome={handleUserHome}
              handleAdminHome={handleAdminHome}
            />
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {itemList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!isUserHome && isAdminHome && (
          <div>
            <h1>Generation Thailand Home- Admin Section</h1>
            <ButtonHome
              handleUserHome={handleUserHome}
              handleAdminHome={handleAdminHome}
            />
            <p>Create User Here</p>
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
              <button type="submit">Save</button>
            </form>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {itemList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                    <td><button onClick={handleDelete(item.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}