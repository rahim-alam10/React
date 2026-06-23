function Card() {
  const cardStyle: React.CSSProperties = {
    width: "190px",
    height: "254px",
    backgroundColor: "#000",
    color: "white",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "12px",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(232, 28, 255, 0.5)",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "700",
    textTransform: "capitalize",
  };

  const authorStyle: React.CSSProperties = {
    color: "#e81cff",
    fontWeight: "600",
  };

  return (
    <div style={cardStyle}>
        <p style={{...headingStyle, textAlign: "center"}}>Popular this month</p>
        <p style={{textAlign: "center"}}>Powered By</p>
        <p style={{...authorStyle, textAlign: "center"}}>Uiverse</p>
    </div>
  );
}

export default Card;