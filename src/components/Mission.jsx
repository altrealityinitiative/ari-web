import "./Mission.css";
import missionImg from "../assets/images/img5.jpg";

function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Left Column - Text Content */}
        <div className="mission-text">
          <h1>Our Mission</h1>

          <p>
            We started the Alternate Reality Initiative to foster the next
            generation of extended reality (XR) innovators at the University of
            Michigan and in the Midwest. We host weekly development workshops,
            talks, and social events to help you explore, learn, build, and
            connect with virtual, augmented, and mixed reality technology.
          </p>

          <p>
            Check out our <a href="/blog">blog</a> for further details and
            tutorial walkthroughs!
          </p>

          <p>
            Whether you're an aspiring XR developer, or curious about XR, we
            would love to have you participate and learn something new!
          </p>
        </div>

        {/* Right Column - Single Image */}
        <div className="mission-image">
          <img
            src={missionImg}
            alt="Students working on their XR projects"
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
