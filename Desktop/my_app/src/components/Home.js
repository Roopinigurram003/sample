import React from 'react';
import './styles/home.css';

const Home = () => {
  return (
    <div>
        <div className="upper_container">
        <p className="Scholarsey">Scholarsey</p>
        <a className="home " href="/components/home">Home</a>
        <a className="about" href="/components/about">About Us</a>
        <a className="contact" href="/components/contact" >Contact Us</a>
        </div>
        <div class="navbar">
          <a  href=" "class="explore">Explore</a>
          <a href=" "class="financial_aid">Financial Aid</a>
          <a href=" "class="history">History</a>
          <a href=" "class="applied">Applied Scholarships</a>
        </div>

      <h1 className="head_line">New Opportunities</h1>
      <p class="sub_line">Find and apply for scholarships easily.</p>

      <div>
        <div class= " scholarship bg-white border-gray-light border-thin rounded-lg shadow-lg" style={{ backgroundColor: 'FEFAE0' ,paddingTop: 5, paddingRight: 25, paddingBottom: 5, paddingLeft: 25 }}>
            <h3>
            <a  class="heading "href="https://www.zonta.org/Web/Our_Programs/Education/Women_in_Technology_Scholarship/Web/Programs/Education/Women_in_Technology_Scholarship.aspx?hkey=93b52ab5-ef2f-401b-8774-b6143ad02da1" 
        target="_blank"
         rel="noreferrer">Zonta International Women in Technology Scholarship</a>
            </h3>
        
         <p>
            <strong>Who Is Eligible</strong>
            ": Women pursuing STEM degrees at accredited undergraduate 
            or master's programs. Applicants must be living or 
            studying in a Zonta district/region."
            <br></br>
            <strong>Application Deadline</strong>
            ": Applications will be available in December 2022"
            <br></br>
            <strong>Scholarship Amount</strong>
            ": $5,000"
            </p>
        <p>Zonta International created this scholarship to
         encourage women to pursue education, career opportunities, and leadership roles in information technology.</p>
        </div>
        <br></br>
        <div class=" scholarship  bg-white border-gray-light border-thin rounded-lg shadow-lg" style={{ backgroundColor: 'FEFAE0',paddingTop: 5, paddingRight: 25, paddingBottom: 5, paddingLeft: 25 }}>
            <h3>
                <a class="heading"href="https://gkccf.academicworks.com/opportunities/4719" target="_blank" rel="noreferrer">Kris Paper Legacy Scholarship for Women in Technology Fund</a></h3>

            <p>
                <strong>Who Is Eligible</strong>
                ": Graduating female high school seniors or returning female college students from the greater Kansas City area with a minimum 3.2 GPA who are seeking a degree in a technology-related field"
                <br></br>
                <strong>Application Deadline</strong>
                ": April 2023"
                <br></br>
                <strong>Scholarship Amount</strong>
                ": Varies"
            </p>
            <p>This scholarship prioritizes students with financial need and a community service background.</p>
        </div>
        <div class=" scholarship bg-white border-gray-light border-thin rounded-lg shadow-lg" style={{backgroundColor: 'FEFAE0', paddingTop: 5, paddingRight: 25, paddingBottom: 5, paddingLeft: 25 }}>
            <h3>
                <a class="heading" href="https://dar.academicworks.com/opportunities/411" target="_blank" rel="noreferrer">Leslie Andree Hanna Medical Scholarship</a>
            </h3>
                <p>
                    <strong>Who Is Eligible</strong>
                    ": Female students attending medical school in the U.S. Applicants must have a minimum 3.25 GPA"
                    <br></br>
                    <strong>Application Deadline</strong>
                    ": January 2023"
                    <br></br>
                    <strong>Scholarship Amount</strong>
                    ": $5,000"
                </p>

                <p>Past recipients may reapply for the scholarship each year but are not guaranteed the award.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;