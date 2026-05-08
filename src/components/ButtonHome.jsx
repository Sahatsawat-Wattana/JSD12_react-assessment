

export default function ButtonHome({handleUserHome,handleAdminHome}) {
    return (
      <div>
        <button onClick={handleUserHome}>User Home Section</button>
        <button onClick={handleAdminHome}>Admin Home Section</button>
      </div>
    );
}