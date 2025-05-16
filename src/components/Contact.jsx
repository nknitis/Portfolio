// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ContactSection = styled.section`
//   padding: 3rem;
//   background: #333;
//   color: white;
//   text-align: center;
// `;

// const Form = styled.form`
//   display: inline-block;
//   margin-top: 2rem;
// `;

// const Input = styled.input`
//   margin: 10px;
//   padding: 10px;
//   font-size: 1rem;
//   width: 200px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const Textarea = styled.textarea`
//   margin: 10px;
//   padding: 10px;
//   font-size: 1rem;
//   width: 200px;
//   height: 100px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const Button = styled.button`
//   background: #f39c12;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
//   border-radius: 5px;
//   margin-top: 10px;

//   &:hover {
//     background: #e67e22;
//   }
// `;

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', message: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div>
//     <ContactSection>
//       <h2>Contact Me</h2>
//       <Form onSubmit={handleSubmit}>

//         <Input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//         />
//         <Textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//         />
//         <Button type="submit">Send Message</Button>
//       </Form>
//     </ContactSection>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f9f9f9;
  color: #333;

  &:focus {
    outline: none;
    border-color: #f39c12;
    background: #fff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f9f9f9;
  color: #333;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #f39c12;
    background: #fff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #f39c12;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #e67e22;
  }

  &:active {
    background-color: #d35400;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating a form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }, 1500);
  };

  return (
    <ContactSection>
      <FormContainer>
        <FormTitle>Contact Me</FormTitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Form>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
