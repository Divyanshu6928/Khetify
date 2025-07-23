import React from "react";
import images from "../../data/imageData";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide opacity-75" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={img.public_id}>
            <img src={img.secure_url} className="d-block w-100" alt={`Slide ${index + 1}`} height={800}/>

              <div className="overlay-card bg-white p-4 rounded shadow">
                <h4 className="carousel-card-title">{img.title}</h4>
                <p>{img.description}</p>
                <button className="btn carousel-btn">{img.buttonText}</button>
              </div>

          </div>

        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
