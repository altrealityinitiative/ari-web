import "./Gallery.css";

import img1 from "../assets/images/img1.JPG";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img6 from "../assets/images/img6.JPG";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.png";

function Gallery() {
  const images = [
    { id: 1, src: img1, alt: "ARI Event 1" },
    { id: 2, src: img2, alt: "ARI Event 2" },
    { id: 3, src: img3, alt: "ARI Event 3" },
    { id: 4, src: img4, alt: "ARI Event 4" },
    { id: 6, src: img6, alt: "ARI Event 6" },
    { id: 7, src: img7, alt: "ARI Event 7" },
    { id: 8, src: img8, alt: "ARI Event 8" },
    { id: 9, src: img9, alt: "ARI Event 9" },
  ];

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;