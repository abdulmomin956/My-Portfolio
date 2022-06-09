import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();

    const [success, setSuccess] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_plmg0ws',
            'template_lhtdd3f',
            form.current,
            '7UHd1JsNtmzGFUsnP'
        )
            .then((response) => {
                console.log(response);
                console.log('SUCCESS!', response.status, response.text);
                form.current.reset();
                setSuccess(true)
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };


    return (
        <section className='py-5'>
            <h3 className='text-center'>Contact Me</h3>
            <Form ref={form} onSubmit={sendEmail} className='container'>
                <div className='d-flex flex-column flex-lg-row w-100 gap-4 my-4'>
                    <div className='d-flex flex-column w-100 justify-content-between gap-4'>
                        <Form.Control required name="user_name" placeholder='First Name:' type="text" />
                        <Form.Control required name="user_email" placeholder='Your Email:' type="email" />
                        <Form.Control required name="subject" placeholder='Your Subject:' type="text" />
                    </div>
                    <div className='w-100'>
                        <textarea required placeholder='Your Message:' name="message" id="" className='w-100 h-100 border rounded p-1' ></textarea>
                    </div>
                </div>
                <Button className='ms-auto d-flex px-5' variant="primary" value="Send" type="submit">
                    Send Message
                </Button>
                {
                    success && <p className='text-primary text-center'>Message sent successfully!</p>
                }
            </Form>


        </section>
    );
};

export default ContactMe;