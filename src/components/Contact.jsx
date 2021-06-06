import { useState } from 'react';
import './Contact.css'

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
            <form id="contact-form"  method="POST" onSubmit={handleSubmit}>
                {submitted && valid ? <div>Thank you for contacting us</div> : null}

                <div className="form-group">
                    <label htmlFor="name">Your name</label>
                    <input type="text" className="form-name" value={values.name} onChange={handlename} />
                    {submitted && !values.name ? <span style={{color:'red'}}>Enter name</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your Telephone Number</label>
                    <input type="number" className="form-phone" aria-describedby="emailHelp" value={values.phone} onChange={handlephone} />
                    {submitted && !values.phone ? <span style={{color:'red'}}>Enter name</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your Email</label>
                    <input type="email" className={validEmail ? 'form-email' : null} aria-describedby="emailHelp" value={values.email} onChange={handleemail} />
                    {/*{validEmail ? <span style={{color:'red'}}>Enter valid email</span>: null}*/}
                    {submitted && !values.email ? <span style={{color:'red'}}>Enter name</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea className="form-message" rows="5" value={values.message} onChange={handlemessage}></textarea>
                    {submitted && !values.message ? <span style={{color:'red'}}>Enter name</span> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Contact;