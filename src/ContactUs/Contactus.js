import React from 'react'
// import './Contactus.css'
const Contactus = () => {
  return (
    <>
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <img src="path-to-your-image.jpg" alt="Contact Us" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="name" placeholder="Name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email Address" />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" id="message" placeholder="Leave a message here" style={{ height: '150px' }}></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
        </>
  )
}

export default Contactus