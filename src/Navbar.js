import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
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
    </nav>
  );
}

export default Navbar;