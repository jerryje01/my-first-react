function StatusCard(props) {
  return (
    <div style={{
      background: "white",
      borderRadius: "15px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
      width: "460px"
    }}>
      <h3>{props.username} {props.emoji}</h3>
      <p style={{ color: "#555", marginTop: "8px" }}>{props.text}</p>
    </div>
  );
}

export default StatusCard;