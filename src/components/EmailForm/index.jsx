import React, { useState } from 'react';
import '../../app/globals.css';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailData = {
            subject,
            message: `From: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        };

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        if (response.ok) {
            console.log('Email sent successfully');
        } else {
            console.log('Error sending email');
        }
    };

    return (
        <div className="bg-darkgray p-2 mt-12 rounded-lg shadow-md max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-softmint font-medium mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Your Email"
                        className="w-full p-1 bg-transparent text-softmint outline-none border-b-2 border-cyanforce"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="phone" className="block text-softmint font-medium mb-1">
                        Phone:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="Your Phone Number"
                        className="w-full p-1 bg-transparent text-softmint outline-none border-b-2 border-cyanforce"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="subject" className="block text-softmint font-medium mb-1">
                        Subject:
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        placeholder="Your Subject"
                        className="w-full p-1 bg-transparent text-softmint outline-none border-b-2 border-cyanforce"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="message" className="block text-softmint font-medium mb-1">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="2"
                        placeholder="Your Message"
                        className="w-full p-1 bg-transparent text-softmint outline-none border-b-2 border-cyanforce"
                    />
                </div>

                <div className="mb-2">
                    <button
                        type="submit"
                        className="bg-cyanforce text-white font-bold py-1 px-2 rounded w-full"
                    >
                        Send Email
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;