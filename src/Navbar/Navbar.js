import React from 'react';
import logo from './logo2.ico';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "100px" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            width="60"
            height="54"
            className="d-inline-block align-text-center mx-4"
          />
          CROSSWORLD GLOBAL TECHNOLOGIES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-6" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownAbout"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                <li><Link className="dropdown-item" to="/about">Company Profile</Link></li>
                <li><a className="dropdown-item" href="/OurVisionMission">Our Vision, Mission and Core Value</a></li>
                <li><a className="dropdown-item" href="/CSR">CSR</a></li>
                <li><a className="dropdown-item" href="/OurFounder">Our Founders</a></li>
                <li><a className="dropdown-item" href="/OurTeam">Our Team</a></li>
                <li><a className="dropdown-item" href="/Award&Certification">Awards and Certifications</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product & Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/PowerTransmission">Power Transmission</a></li>
                <li><a className="dropdown-item" href="/PowerDistribution">Power Distribution</a></li>
                <li><a className="dropdown-item" href="/SolarRenewalEnergy">Solar & Renewable Energy</a></li>
                <li><a className="dropdown-item" href="/NetworkAudit">Network and Energy Audit</a></li>
                <li><a className="dropdown-item" href="/TrainingConsultancy">Training and Consultancy</a></li>
                <li><a className="dropdown-item" href="/Metering&Distribution">Metering & Distribution Equipment</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

