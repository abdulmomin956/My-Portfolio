import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_plmg0ws',
            'template_lhtdd3f',
            form.current,
            '7UHd1JsNtmzGFUsnP'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };


    return (
        <section className='py-5'>
            <h3 className='text-center'>Contact Me</h3>
            <Form ref={form} onSubmit={sendEmail} className='container'>
                <div className='d-flex w-100 gap-4 my-4'>
                    <div className='d-flex flex-column w-50 justify-content-between gap-4'>
                        <Form.Control name="user_name" placeholder='First Name:' type="text" />
                        <Form.Control name="user_email" placeholder='Your Email:' type="email" />
                        <Form.Control name="subject" placeholder='Your Subject:' type="text" />
                    </div>
                    <div className='w-50'>
                        <textarea placeholder='Your Message:' name="message" id="" className='w-100 h-100 border rounded p-1' ></textarea>
                    </div>
                </div>
                <Button className='ms-auto d-flex px-5' variant="primary" value="Send" type="submit">
                    Send Message
                </Button>
            </Form>


        </section>
    );
};

export default ContactMe;