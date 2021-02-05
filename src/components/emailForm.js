import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <form 
      // onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexBasis: '50%',
        flexWrap: 'wrap',
      }}
      method='post'
      name='contact'
      data-netlify='true'
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input 
        type="email" 
        name='email'
        style={{
          background: 'transparent',
          outline: 'none',
          borderStyle: 'solid',
          color: '#DDD',
          borderRadius: '2px',
          borderColor: '#DDD',
          flexBasis: '500px',
          margin: '10px 5px',
          // marginRight: '5px',
          // width: '500px',
          padding: '10px'
        }}
        placeholder='Enter your email...'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        style={{
          padding: '10px',
          flexGrow: '1',
          border: 'none',
          margin: '10px 5px',
          borderRadius: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}
      >
        Sign up
      </button>
    </form>
  );
}

export default EmailForm;