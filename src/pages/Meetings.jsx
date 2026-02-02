import "./Meetings.css";

function Meetings() {
  return (
    <div className="meetings-page">
      <div className="meetings-header">
        <h1>Upcoming Meetings</h1>
        <p>Join us for our regular meetings and events</p>
      </div>

      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=7b56973f82c8aeb7e50b6bfcf325bbc9f2e7c07d132f623811e9080c07250c85%40group.calendar.google.com&ctz=Europe%2FPrague"
          style={{ border: 0 }}
          width="800"
          height="600"
        ></iframe>
      </div>
      <section className="meeting-info">
        <p>
          All ARI meetings are on <u>Saturdays</u> 12:00 - 1:30 pm in room 1400
          (Visualization Lab) at the Duderstadt
          Center (2281 Bonisteel Blvd, Ann Arbor, MI 48109), unless specified otherwise.
        </p>
      </section>
    </div>
  );
}

export default Meetings;
