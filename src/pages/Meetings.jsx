import "./Meetings.css";
import PageTransition from "../components/PageTransition";
import { useEffect } from "react";

function Meetings() {
  useEffect(() => {
    document.title = "Meetings | ARI";
  }, []);

  return (
    <PageTransition>
      <div className="meetings-page">
        <div className="meetings-header">
          <h1>Upcoming Meetings</h1>
          <p>Join us for our regular meetings and events</p>
        </div>

        <div className="calendar-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDetroit&showPrint=0&showTz=0&src=YWx0cmVhbGl0eWluaXRpYXRpdmVAZ21haWwuY29t&src=N2I1Njk3M2Y4MmM4YWViN2U1MGI2YmZjZjMyNWJiYzlmMmU3YzA3ZDEzMmY2MjM4MTFlOTA4MGMwNzI1MGM4NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19mMGY4OGFhNTMxNjVjNDljZDZhMTFjZDgwOTAzNTU5YWZkN2EyOGU1YTJmNDgxMGIyZTVhNzRmOGFlOTc5N2Y5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%237986cb&color=%23009688"
            style= {{ border: 0 }}
            width="800"
            height="600"
          ></iframe>
        </div>
        <section className="meeting-info">
          <p>
            All ARI meetings are on <u>Saturdays</u> 1:00 - 2:30 pm in room
            1400 (Visualization Lab) at the Duderstadt Center (2281 Bonisteel
            Blvd, Ann Arbor, MI 48109), unless specified otherwise.
          </p>
        </section>
      </div>
    </PageTransition>
  );
}

export default Meetings;
