import React from 'react'
import partnerLogo1 from './partner1.png'
import partnerLogo2 from './partner2.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import PowerDistribution from './PowerDistribution.jpeg'
import PowerTransmission from './PowerTransmission.jpeg'
import SolarRenewalEnergy from './SolarRenewalEnergy.jpeg'
import solarTraining from './solarTraining.jpeg'
import {Link} from 'react-router-dom'
import Crousal from '../Components/Crousal'

const Landingpage = () => {

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




    cardData.map((image)=>{
        return console.log(image.image);
    })
    // const partners = [
    //     { id: 1, logo: partnerLogo1, name: 'Partner 1' },
    //     { id: 2, logo: partnerLogo2, name: 'Partner 2' },
    //     { id: 3, logo: partnerLogo3, name: 'Partner 3' },
    //     // Add more partners as needed
    //   ];

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
      
        const brands = [
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/1.png', alt: 'Brand 1' },
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/2.png', alt: 'Brand 2' },
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/3.png', alt: 'Brand 3' },
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/4.png', alt: 'Brand 4' },
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/5.png', alt: 'Brand 5' },
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/6.png', alt: 'Brand 6' },
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/7.png', alt: 'Brand 7' },
          { src: 'https://www.mbhpower.com/wp-content/uploads/2022/12/8.png', alt: 'Brand 8' }
        ];

  return (
    <>
    <Crousal/>
    <p className='text-center fs-3 my-4 fw-bold'>Partners in Progress…..</p>
<div className='container'>
    <p className='text-start fs-4 my-4 py-2 fw-bold'> CROSSWORLD GLOBAL TECHNOLOGIES</p>

    <p className=''>Crossworld Global Technologies Limited is a versatile company
specializing in the areas of Energy, Construction, Real estate 
development, Electrical and Electronics equipment’s, Solar
power, ICT projects, Telecommunications and Renewable 
Energy Products and Services, providing both technical 
solutions and administrative services for small, medium and 
large businesses.</p>
<p>CROSSWORLD GLOBAL TECHNOLOGY Ltd., was incorporated in 2012 as a sequel 
to persistent interest shown by our clients. CWGT is aiming to be foremost turnkey 
contractor of Civil, Electrical and Mechanical equipment and system in Nigeria. 
</p>
<p>
CWGT’s main purpose of establishment is to provide a fast, reliable and trusted source to 
cater for clients-public and private sector, with us a new era in the supplies and Installation 
Business of unique products is born.</p>
</div>

{/* /////////////////////////Services section/////////////////////////////// */}
<div className='container bg-dark text-white'>
    <p className='text-center fs-3 py-4 fw-bold bg-gray'>Our Services</p>
</div>
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
      <div className='d-flex justify-content-center'>
      <Link type="button" to="/productlist" class="btn btn-secondary mb-5 justify-content-md-start">View More</Link>    
      </div>
{/* /////////////////////////Services section/////////////////////////////// */}
<div className='container bg-dark text-white'>
    <p className='text-center fs-3 py-4 fw-bold bg-gray'>Our Customer Capital</p>
</div>
<div className="container my-4">
      {/* <h2 className="text-center">Brand Partners</h2> */}
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="text-center">
            <img src={brand.src} alt={brand.alt} className="img-fluid" />
          </div>
        ))}
      </Slider>
    </div>

    </>
  )
}

export default Landingpage;