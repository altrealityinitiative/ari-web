import "./TimeLine.css";
import { timeline } from "../data/timeline";

function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Our History</h2>

      <div className="timeline">
        {timeline.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-content">
              <span className="timeline-date">{event.date}</span>
              <h3>{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
