
function Form (props){
    const {submitted, valid, name, validate, phone, email, error, message} = props;
    const {handleSubmit, handlename, handlephone, handleemail, handlemessage} = props;
    const {validEmail, validateEmail, validateTextarea} = props;

    return(
        <>
            <div>
                <form id="contact-form"  method="POST" onSubmit={handleSubmit}>
                    {submitted && valid ? <h3 className="success">Thank you for contacting us</h3> : null}
                    <div>
                        <p>Your name</p>
                        <div className="form-input">
                            <input type="text" className="form-name" value={name} onChange={handlename} placeholder="Please enter your name" />
                        </div>
                        <p>{submitted && !name ? <span style={{color:'red'}}>{validate}</span> : null}</p>
                    </div>
                    <div>
                        <p>Your Telephone Number</p>
                        <div className="form-input">
                            <input type="number" className="form-phone" aria-describedby="emailHelp" value={phone} onChange={handlephone} placeholder="Please enter your phone umber" />
                        </div>
                        <p>{submitted && !phone ? <span style={{color:'red'}}>{validate}</span> : null}</p>
                    </div>
                    <div>
                        <p>Your Email</p>
                        <div className="form-input">
                            <input type="email" className={validEmail ? 'form-email' : null} aria-describedby="emailHelp" value={email} onChange={handleemail} placeholder="Please enter your email"/>
                            <img alt="" className='email-error-icon' src={validEmail ? error : null}/>
                        </div>
                        <p>{validEmail ? <span style={{color:'red'}}>{validateEmail}</span> : null}</p>
                        <p>{submitted && !email ? <span style={{color:'red'}}>{validate}</span> : null}</p>
                    </div>
                    <div>
                        <p>Your Message</p>
                        <div className="form-input">
                            <textarea className="form-message" rows="5" value={message} onChange={handlemessage} placeholder="Please enter your name"></textarea>
                        </div>
                        <p>{submitted && !message ? <span style={{opacity:'0.4'}}>{validateTextarea}</span> : null}</p>
                    </div>
                    <div className="submit-block">
                        <button type="submit" className="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;