import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import "./Meetings.css";

const API_KEY = import.meta.env.VITE_MAP_API_KEY;

function Meetings() {
  // Duderstadt Center location
  const duderstadtCenter = { lat: 42.29119670802476, lng: -83.71573319015357 };

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
          title="ARI Calendar"
        ></iframe>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <APIProvider
          apiKey={API_KEY}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <Map
            style={{ width: "100%", height: "400px" }}
            defaultZoom={16}
            defaultCenter={duderstadtCenter}
            mapId="DEMO_MAP_ID"
          >
            {/* Add Marker */}
            <AdvancedMarker position={duderstadtCenter}>
              <Pin
                background={"#0f9d58"}
                borderColor={"#006425"}
                glyphColor={"#60d98f"}
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>

      <section className="meeting-info">
        <p>
          All ARI meetings are on <u>Saturdays</u> 12:00 - 1:30 pm in room 1400
          (Visualization Lab) at the Duderstadt Center (2281 Bonisteel Blvd, Ann
          Arbor, MI 48109), unless specified otherwise.
        </p>
      </section>
    </div>
  );
}

export default Meetings;
