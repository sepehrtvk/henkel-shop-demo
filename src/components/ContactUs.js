import React from 'react';

//Component
import ContactForm from './contactus/ContactForm';
import Address from './contactus/Address';

const ContactUs = () => {
    return (
        <div className="container">
            <ContactForm />
            <Address />
        </div>
    );
};

export default ContactUs;