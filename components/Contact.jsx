import React, { useState } from 'react'
import Link from "next/link"

const Contact = () => {
    // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };



    //   Handling form submit

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                // Reset form fields
                setFullname("");
                setEmail("");
                setMessage("");
                setSubject("");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
            // Reset form fields
            setFullname("");
            setEmail("");
            setMessage("");
            setSubject("");
        }
        console.log(fullname, email, subject, message);
    };


    return (
        <div>
            <section className="mb-4">


                {/* <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>  */}

                <p className="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? Por favor, no dudes en contactarme directamente. Te responderé lo antes posible para ayudarte.</p>

                <div className="row">


                    <div className="col-md-12 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                            <div className="row mb-3">


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="name" className="">Nombre:</label>
                                        <input type="text" id="name" name="name" className="form-control" value={fullname}
                                            onChange={(e) => {
                                                setFullname(e.target.value);
                                            }} />
                                        {errors?.fullname && (
                                            <p className="text-red-500">Por favor, completa este campo.</p>
                                        )}

                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="email" className="">E-mail:</label>
                                        <input type="text" id="email" name="email" className="form-control" value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }} />
                                        {errors?.email && (
                                            <p className="text-red-500">Email cannot be empty.</p>
                                        )}
                                    </div>
                                </div>


                            </div>



                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label htmlFor="subject" className="">Asunto:</label>
                                        <input type="text" id="subject" name="subject" className="form-control" value={subject}
                                            onChange={(e) => {
                                                setSubject(e.target.value);
                                            }} />
                                        {errors?.subject && (
                                            <p className="text-red-500">Subject cannot be empty.</p>
                                        )}
                                    </div>
                                </div>
                            </div>



                            <div className="row">


                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label htmlFor="message">Mensaje:</label>
                                        <textarea type="text" id="message" name="message" rows="3" className="form-control md-textarea" value={message}
                                            onChange={(e) => {
                                                setMessage(e.target.value);
                                            }}></textarea>
                                        {errors?.message && (
                                            <p className="text-red-500">Message body cannot be empty.</p>
                                        )}
                                    </div>

                                </div>
                            </div>


                        </form>
                        <hr className="mt-5 mb-5"></hr>

                        <div className="col-md-12 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Madrid, España  </p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>Link a Etsy: <Link href="https://www.etsy.com/shop/estiestamacrame">etsy.com/shop/EstiestaMacrame</Link></p>


                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@correo.com</p>
                                </li>
                            </ul>
                        </div>


                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" onClick={handleSubmit}>{buttonText}</a>
                        </div>
                        <div className="status"></div>
                    </div>





                </div>

                <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>





            </section>


        </div>
    )
}

export default Contact