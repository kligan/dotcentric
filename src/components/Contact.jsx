import { useState } from 'react';
import './contact/Contact.css';
import {contactData} from './Data';
import ValidateEmail from './contact/ValidateEmail';
import ContactTitle from './contact/ContactTitle';
import Form from './contact/Form';

function Contact () {

    const {validate, error, validateEmail, validateTextarea} = contactData;

    const[values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const handleemail = (e) =>{
        setValues({...values, email: e.target.value});

        (ValidateEmail(e.target.value))
            ? setValidEmail(false)
            : (e.target.value === "")
            ? setValidEmail(false)
            : setValidEmail(true);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(`${values.name} ${values.phone} ${values.email} ${values.message}`)
        if (values.name && values.phone && values.email && values.message){
            setValid(true)
        }
        setSubmitted(true)
    }

    return (
        <div>
            <ContactTitle title={contactData.title} subtitle={contactData.subtitle}/>
            <Form {...{submitted, valid, validEmail, handleSubmit, handleemail,
                        error, validate, validateEmail, validateTextarea
                }}
                  name={values.name}
                  phone={values.phone}
                  email={values.email}
                  message={values.message}
                  handlename={(e)=>setValues({...values, name: e.target.value})}
                  handlephone={(e)=>setValues({...values, phone: e.target.value})}
                  handlemessage={(e)=>{setValues({...values, message: e.target.value})}}
            />
        </div>

    )
}

export default Contact;