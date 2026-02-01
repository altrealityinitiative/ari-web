import "./JoinUs.css";

function JoinUs() {
  return (
    <section className="join-us">
      <h2>Join us</h2>
      <p>
        ARI usually meets on <u>Saturdays</u> 12:00 - 1:30 pm in room 1400
        (Visualization Lab) for workshops and game nights at the Duderstadt
        Center (2281 Bonisteel Blvd, Ann Arbor, MI 48109).
      </p>
      <p className="invite">Join our server for weekly updates:</p>
      <button
        className="discord-button"
        onClick={() => window.open("https://discord.gg/maYX9W6RH9", "_blank")}
      >
        Join Us on Discord
      </button>
    </section>
  );
}

export default JoinUs;
