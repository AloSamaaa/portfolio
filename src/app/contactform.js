'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xyyawvby");
    if (state.succeeded) {
        return <div className="container contactform text-white">
            <div className="p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="pb-4">Contact Details</h3>
                        <div className="p-3">Phone:</div>
                        <div className="p-3">Email:</div>
                        <div className="p-3">Phone:</div>

                        <hr className="text-white" />
                        <a className="atag" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100088506030945"> <FontAwesomeIcon icon={faFacebook} width="30px" /> </a>
                        <a className="atag" target="_blank" rel="noreferrer" href="https://github.com/AloSamaaa"> <FontAwesomeIcon icon={faLinkedin} className="ps-2" width="30px" /> </a>
                        <a className="atag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-dayot-6a60071b2/"> <FontAwesomeIcon icon={faGithub} className="ps-2" width="30px" /> </a>
                    </div>
                    <div className="col-md-6">
                        <h3 className="pb-4 lastName">Leave a Message</h3>
                        <div className="alert alert-success" role="alert">
                            Thanks for the message!
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                id="name"
                                type="name"
                                name="name"
                                className="form-control mb-3"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                                className="form-label"
                            />
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="form-control mb-4"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Leave a message."
                                className="form-control"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button className="btn btn-warning mt-3" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
    return (
        <div className="container contactform text-white">
            <div className="p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="pb-4">Contact Details</h3>
                        <div className="p-3">Phone:</div>
                        <div className="p-3">Email:</div>
                        <div className="p-3">Phone:</div>

                        <hr className="text-white" />
                        <a className="atag" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100088506030945"> <FontAwesomeIcon icon={faFacebook} width="30px" /> </a>
                        <a className="atag" target="_blank" rel="noreferrer" href="https://github.com/AloSamaaa"> <FontAwesomeIcon icon={faLinkedin} className="ps-2" width="30px" /> </a>
                        <a className="atag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-dayot-6a60071b2/"> <FontAwesomeIcon icon={faGithub} className="ps-2" width="30px" /> </a>
                    </div>
                    <div className="col-md-6">
                        <h3 className="pb-4">Leave a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                id="name"
                                type="name"
                                name="name"
                                className="form-control mb-3"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                                className="form-label"
                            />
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="form-control mb-4"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Leave a message."
                                className="form-control"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button className="btn btn-warning mt-3" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}