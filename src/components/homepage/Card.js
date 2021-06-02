import React from 'react'
import '../../static/css/card.css'

const Card_item = ({ name, description, image, link }) => {
    return (
        <>
            <a href={link}>
                <div className='card mb-3'>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img class="card-image" src={image} alt="Image" />
                        </div>
                        <div className="col-md-8 text-container">
                            <div className="card-body">
                                <h2 className="card-title"><a href={link}>{name}</a></h2>
                                <p className="card-text"><a href={link}>{description}</a></p>
                            </div>
                        </div>
                    </div>
                </div></a>
        </>
    );
}

export default Card_item;