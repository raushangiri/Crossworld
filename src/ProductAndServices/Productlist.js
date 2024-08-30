import React from 'react'
import PowerDistribution from '../Landing page/PowerDistribution.jpeg'
import PowerTransmission from '../Landing page/PowerTransmission.jpeg'
import SolarRenewalEnergy from '../Landing page/SolarRenewalEnergy.jpeg'
import solarTraining from '../Landing page/solarTraining.jpeg'

const Productlist = () => {

    const cardData= [
        {
          "id": 1,
          "title": "Power Distribution",
          "description": "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
          "image": PowerDistribution,
          "altText": "green iguana"
        },
        {
          "id": 2,
          "title": "Power Transmission",
          "description": "Chameleons are known for their ability to change color and their long, sticky tongues used for catching insects.",
          "image": PowerTransmission,
          "altText": "colorful chameleon"
        },
        {
          "id": 3,
          "title": "Solar Renewal Energy",
          "description": "Geckos are unique among lizards in their vocalizations, which they use to communicate with other geckos.",
          "image": SolarRenewalEnergy,
          "altText": "speckled gecko"
        },
        {
          "id": 4,
          "title": "Solar Training",
          "description": "Iguanas are large herbivorous lizards native to Central and South America, known for their distinctive appearance.",
          "image": solarTraining,
          "altText": "large iguana"
        }
        
      ]

  return (
    <>
    <div className="container mt-5">
    <div className="row">
      {cardData.map(card => (
        <div className="col-sm-6 col-md-3 mb-4" key={card.id}>
          <div className="card fixed-height-card">
            <img src={card.image} className="card-img-top" alt={card.altText} />
            <div className="card-body">
              <h4>{card.title}</h4>
              <p className="card-text">
                {card.description}
              </p>
              <div>
                <button className="btn btn-primary" type="button">Share</button>
                <button className="btn btn-link" type="button">Read More</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    {/* <div className='d-flex justify-content-center'>
    <button type="button" class="btn btn-secondary mb-5 justify-content-md-start">View More</button>    
    </div> */}
    </>
  )
}

export default Productlist