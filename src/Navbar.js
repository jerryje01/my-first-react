import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Navbar() {
  function handleLogout() {
    signOut(auth);
  }

  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "15px",
      backgroundColor: "rgba(255,255,255,0.15)",
      marginBottom: "20px"
    }}>
      <Link to="/" style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>
        🏠 Home
      </Link>
      <Link to="/feed" style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>
        📱 Feed
      </Link>
      <Link to="/profile" style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>
        👤 Profile
      </Link>
      <Link to="/settings" style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>
        ⚙️ Settings
      </Link>
      <Link to="/test" style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px"
      }}>
        🧪 Test
      </Link>
      <button
        onClick={handleLogout}
        style={{
          color: "white",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.6)",
          padding: "8px 14px",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "14px",
          cursor: "pointer"
        }}
      >
        🚪 Log out
      </button>
    </nav>
  );
}

export default Navbar;