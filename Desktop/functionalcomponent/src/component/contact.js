import React, { useState } from 'react';

function ContactForm() {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
email: '',
country: '',
subject: '',
});
const [isSubmitted, setIsSubmitted] = useState(false);

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
setIsSubmitted(true);
};

return (
<div>
<h3>Contact Us</h3>
  <div className="container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstName"
        placeholder="Your name.."
        value={formData.firstName}
        onChange={handleChange}
        required
      />
     <br></br>
      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastName"
        placeholder="Your last name.."
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <br></br>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email.."
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br></br>
      <label htmlFor="country">Country</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      >
        <option value="">Select a country</option>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
        <option value="india">India</option>
      </select>
      <br></br>
      <label htmlFor="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style={{ height: '200px' }}
        value={formData.subject}
        onChange={handleChange}
        required
      />
    <br></br>
      <button type="submit">Submit</button>
    </form>

    {isSubmitted && (
      <div>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Country: {formData.country}</p>
        <p>Subject: {formData.subject}</p>
      </div>
     
    )}
      
  </div>
</div>
);
}

export default ContactForm;




