import React from 'react'
import aboutcompanywork from './AboutCompany.png'
const CompanyProfile = () => {
    return (
        <>
            <p className='text-center fs-4 my-4 py-2 fw-bold' style={{
                background: 'linear-gradient(to right, #ff3a00, orange)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                // display: 'inline-block',         
            }}>CROSSWORLD GLOBAL TECHNOLOGIES LIMITED</p>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-6 align-items-center">

<p><strong>CROSSWORLD GLOBAL TECHNOLOGY Ltd</strong>, was incorporated in 2012 as a sequel
    to persistent interest shown by our clients. CWGT is aiming to be foremost turnkey
    contractor of Civil, Electrical and Mechanical equipment and system in Nigeria.
    
    CWGT’s main purpose of establishment is to provide a fast, reliable and trusted source to
    cater for clients-public and private sector, with us a new era in the supplies and Installation
    Business of unique products is born.
    </p>
    <ul>
        <li><p>
        In CWGT Limited we want to be a single point of contact for all kind of customer 
requirement starting from consulting to delivery. The company markets all kind 
of office related equipment’s, interior infrastructure, supply of chemicals, supply 
of electric and electronic equipment’s, all kind of ACs, all kind of Cables.
</p>  </li>
<li>
<p>We have strong presence in Power Transmission, Distribution and Rural 
   Electrification solutions.
</p> 
</li>
<li>
<p>Personnel at CWG Technologies have been engaged in various business activities in Nigeria 
through various partners.
</p> 
</li>
<li>
<p> Our strength comes from our associations with many global manufacturing & service 
companies with local presence.
</p> 
</li>

    </ul>
</div>
<div className="col-md-6 d-flex justify-content-center align-items-center">
  <img 
    src={aboutcompanywork} 
    alt="company work"
    className="img-fluid rounded"
    style={{
      maxWidth: '100%', 
      height: 'auto',
      background: 'transparent'
    }}
  />
</div>

                    
                </div>
            </div>
        </>
    )
}

export default CompanyProfile