import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar'
import Crousal from './Components/Crousal'
import Menu from './Components/Menu'
import Home from './Landing page/Landingpage'
import Footer from './Footer/Footer'
import CompanyProfile from './About/CompanyProfile'
import ContactUs from './ContactUs/Contactus'
import AwardCertification from './About/Award&Certification'
import CSR from './About/CSR'
import OurFounder from './About/OurFounder'
import OurTeam from './About/OurTeam'
import OurVisionMission from './About/OurVisionMission'
import MeteringDistribution from './ProductAndServices/MeteringDistribution'
import NetworkAudit from './ProductAndServices/NetworkAudit'
import PowerDistribution from './ProductAndServices/PowerDistribution'
import PowerTransmission from './ProductAndServices/PowerTransmission'
import SolarRenewalEnergy from './ProductAndServices/SolarRenewalEnergy'
import TrainingConsultancy from './ProductAndServices/TrainingConsultancy'
import Productlist from './ProductAndServices/Productlist'

function App() {
  return (
    <>
      {/* <Navbar/>
      {/* <Menu/> */}
      {/* <Crousal/>
      <Landingpage/> */}
      {/* <Footer/> */} 
      <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<CompanyProfile />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Award&Certification" element={<AwardCertification />} />
          <Route path="/CSR" element={<CSR />} />
          <Route path="/OurFounder" element={<OurFounder />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/OurVisionMission" element={<OurVisionMission />} />
          <Route path="/Metering&Distribution" element={<MeteringDistribution />} />
          <Route path="/NetworkAudit" element={<NetworkAudit />} />
          <Route path="/PowerDistribution" element={<PowerDistribution />} />
          <Route path="/PowerTransmission" element={<PowerTransmission />} />
          <Route path="/SolarRenewalEnergy" element={<SolarRenewalEnergy />} />
          <Route path="/TrainingConsultancy" element={<TrainingConsultancy />} />
          <Route path="/Productlist" element={<Productlist />} />


        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
