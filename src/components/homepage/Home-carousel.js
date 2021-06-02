import '../../static/css/home-carousel.css'
import carousel_img_1 from '../../static/images/carousel-img-1.jpg'
import carousel_img_2 from '../../static/images/carousel-img-2.jpg'
import carousel_img_3 from '../../static/images/carousel-img-3.jpg'
import React from 'react'

function HomeCarousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel_img_1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Welcome to Free-Mind Publishers</h3>
                            <p>The most renowned and promising publishers you will ever find.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_img_2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Think-Rethink-Publish</h3>
                            <p>Our motto focuses on thinking through all aspects of anything.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_img_3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Collection of Diversity</h3>
                            <p>We present you a wide range of magazines, books, and daily newspapers.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default HomeCarousel;