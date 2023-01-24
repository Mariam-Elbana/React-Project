import React from 'react';
import Footer from '../Footer/index.js';
import {ContactSection, ContactTitle, Span, Form, FormInput, InputText, InputEmail, InputSub, Textarea, InputSubmit} from './style.js';

const Contact = () => {
    return (
      <>
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Contact </Span>Me A line</ContactTitle>
                <Form>
                    <FormInput>
                      <InputText type="text" placeholder="Your Name"/>
                      <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputSub type="text" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer/>
      </>
    );
};

export default Contact;
