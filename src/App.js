import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { db } from "./firebase";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import StatusCard from "./StatusCard";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";
import Test from "./Test";

const allStatuses = [
  { id: 1, username: "Alex", emoji: "🧑", color: "#e74c3c", text: "Just had the best coffee of my life ☕" },
  { id: 2, username: "Sarah", emoji: "👩", color: "#9b59b6", text: "Finally finished my project after 3 sleepless nights 🎉" },
  { id: 3, username: "Mike", emoji: "👨", color: "#2ecc71", text: "Anyone else think Mondays should be optional? 😅" },
  { id: 4, username: "Emma", emoji: "👱", color: "#e67e22", text: "Just booked flights to Japan! Cannot wait 🌸" },
  { id: 5, username: "James", emoji: "🧔", color: "#1abc9c", text: "Cooked dinner from scratch. Only slightly burnt 🔥" },
];

function Feed() {
  const [posts, setPosts] = useState([]);

  // Load posts from Firebase when page opens
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const loadedPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(loadedPosts);
    });

    return () => unsubscribe();
  }, []);

  // Add random post to Firebase
  async function addRandomPost() {
    const remaining = allStatuses.filter(s => !posts.find(p => p.username === s.username));
    if (remaining.length === 0) return;
    const random = remaining[Math.floor(Math.random() * remaining.length)];
    
    await addDoc(collection(db, "posts"), {
      username: random.username,
      emoji: random.emoji,
      color: random.color,
      text: random.text,
      timestamp: new Date()
    });
  }

  return (
    <div>
      <h1 style={{
        textAlign: "center",
        color: "white",
        marginBottom: "10px",
        fontSize: "24px"
      }}>
        📱 Status Feed
      </h1>

      <p style={{
        textAlign: "center",
        color: "rgba(255,255,255,0.7)",
        marginBottom: "20px",
        fontSize: "14px"
      }}>
        {posts.length} {posts.length === 1 ? "post" : "posts"} in your feed
      </p>

      <button
        onClick={addRandomPost}
        style={{
          display: "block",
          margin: "0 auto 25px auto",
          padding: "12px 25px",
          backgroundColor: "white",
          color: "#667eea",
          border: "none",
          borderRadius: "25px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
        }}
      >
        ＋ Generate New Status
      </button>

      {posts.map(post => (
        <StatusCard
          key={post.id}
          username={post.username}
          emoji={post.emoji}
          color={post.color}
          text={post.text}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;