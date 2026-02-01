import './Gallery.css'

function Gallery() {
  const images = [
    { id: 1, src: "/src/assets/images/img1.JPG", alt: "ARI Event 1" },
    { id: 2, src: "/src/assets/images/img2.jpg", alt: "ARI Event 2" },
    { id: 3, src: "/src/assets/images/img3.jpg", alt: "ARI Event 3" },
    { id: 4, src: "/src/assets/images/img4.jpg", alt: "ARI Event 4" },
    { id: 5, src: "/src/assets/images/img5.jpg", alt: "ARI Event 5" },
    { id: 6, src: "/src/assets/images/img6.JPG", alt: "ARI Event 6" },
    { id: 7, src: "/src/assets/images/img7.jpg", alt: "ARI Event 7" },
    { id: 8, src: "/src/assets/images/img8.jpg", alt: "ARI Event 8" },
    { id: 9, src: "/src/assets/images/img9.png", alt: "ARI Event 9" },
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
  )
}

export default Gallery
