import React from 'react'
import '../../static/css/card.css'

const Card_item = ({ name, description, image, link }) => {
    return (
        <>
            <div className='card mb-3'>
                <a href={link}>
                    <div className="row g-0">
                        <div className="col-md-4 card-image-container">
                            <img class="card-image" src={image} alt="Image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title"><a href={link}>{name}</a></h2>
                                <p className="card-text"><a href={link}>{description}</a></p>
                            </div>
                        </div>
                    </div>
                </a></div>
        </>
    );
}

export default Card_item;