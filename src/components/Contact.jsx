import { useState } from 'react';
import './Contact.css';
import {contactData} from "./Data";

function Contact () {

    const[values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const handlename = (e) =>{
        setValues({...values, name: e.target.value});
    }

    const handlephone = (e) =>{
        setValues({...values, phone: e.target.value});
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const handleemail = (e) =>{
        setValues({...values, email: e.target.value});

        if(validateEmail(e.target.value)){
            setValidEmail(false);
        }
        else if (e.target.value == ""){
            setValidEmail(false);
        }
        else {
            setValidEmail(true);
        }
    }

    const handlemessage = (e) =>{
        setValues({...values, message: e.target.value});
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${values.name}`)
        console.log(`${values.name} ${values.phone} ${values.email} ${values.message}`)
        if (values.name && values.phone && values.email && values.message){
            setValid(true)
        }
        setSubmitted(true)
    }

    return (
        <div>
            <div className="contact-content">
                <h1>{contactData.title}</h1>
                <h3 className="contact-sub">{contactData.subtitle}</h3>
            </div>
            <div>
                <form id="contact-form"  method="POST" onSubmit={handleSubmit}>
                    {submitted && valid ? <h3 className="success">Thank you for contacting us</h3> : null}
                    <div>
                        <p>Your name</p>
                        <div className="form-input">
                            <input type="text" className="form-name" value={values.name} onChange={handlename} placeholder="Please enter your name" />
                        </div>
                        <p>{submitted && !values.name ? <span style={{color:'red'}}>{contactData.validate}</span> : null}</p>
                    </div>
                    <div>
                        <p>Your Telephone Number</p>
                        <div className="form-input">
                            <input type="number" className="form-phone" aria-describedby="emailHelp" value={values.phone} onChange={handlephone} placeholder="Please enter your phone umber" />
                        </div>
                        <p>{submitted && !values.phone ? <span style={{color:'red'}}>{contactData.validate}</span> : null}</p>
                    </div>
                    <div>
                        <p>Your Email</p>
                        <div className="form-input">
                            <input type="email" className={validEmail ? 'form-email' : null} aria-describedby="emailHelp" value={values.email} onChange={handleemail} placeholder="Please enter your email"/>
                            <img className= 'email-error-icon' src={validEmail ? contactData.error : null}/>
                        </div>
                        <p>{validEmail ? <span style={{color:'red'}}>{contactData.validateEmail}</span> : null}</p>
                        <p>{submitted && !values.email ? <span style={{color:'red'}}>{contactData.validate}</span> : null}</p>
                    </div>
                    <div>
                        <p>Your Message</p>
                        <div className="form-input">
                            <textarea className="form-message" rows="5" value={values.message} onChange={handlemessage} placeholder="Please enter your name"></textarea>
                        </div>
                        <p>{submitted && !values.message ? <span style={{opacity:'0.4'}}>{contactData.validateTextarea}</span> : null}</p>
                    </div>
                    <div className="submit-block">
                        <button type="submit" className="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact;