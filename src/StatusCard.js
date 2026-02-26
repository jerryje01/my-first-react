import { useState } from "react";

function StatusCard(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);

  function sendReply() {
    if (reply.trim() === "") return;
    setReplies([...replies, reply]);
    setReply("");
  }

  return (
    <div style={{
      background: "white",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
      maxWidth: "500px",
      width: "90%",
      margin: "0 auto 20px auto"
    }}>

      {/* User info row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "12px"
      }}>
        <div style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          backgroundColor: props.color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px"
        }}>
          {props.emoji}
        </div>
        <div>
          <div style={{ fontWeight: "bold", color: "#333" }}>{props.username}</div>
          <div style={{ fontSize: "12px", color: "#999" }}>Just now</div>
        </div>
      </div>

      {/* Status text */}
      <p style={{ color: "#444", marginBottom: "15px", lineHeight: "1.6" }}>
        {props.text}
      </p>

      {/* Star rating */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "15px" }}>
        <span style={{ fontSize: "13px", color: "#999" }}>Rate:</span>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: star <= (hover || rating) ? "#f5a623" : "#ddd",
              transition: "color 0.2s"
            }}
          >
            ★
          </span>
        ))}
        {rating > 0 && (
          <span style={{ fontSize: "12px", color: "#999" }}>{rating} / 5 ⭐</span>
        )}
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div style={{ marginBottom: "12px" }}>
          {replies.map((r, index) => (
            <div key={index} style={{
              background: "#f0f0f0",
              borderRadius: "10px",
              padding: "8px 12px",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#555"
            }}>
              <strong>You:</strong> {r}
            </div>
          ))}
        </div>
      )}

      {/* Reply input */}
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          value={reply}
          onChange={e => setReply(e.target.value)}
          onKeyPress={e => e.key === "Enter" && sendReply()}
          placeholder="Write a reply..."
          style={{
            flex: 1,
            padding: "8px 14px",
            border: "2px solid #eee",
            borderRadius: "20px",
            fontSize: "13px",
            outline: "none"
          }}
        />
        <button
          onClick={sendReply}
          style={{
            padding: "8px 16px",
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "13px"
          }}
        >
          Reply
        </button>
      </div>

    </div>
  );
}

export default StatusCard;