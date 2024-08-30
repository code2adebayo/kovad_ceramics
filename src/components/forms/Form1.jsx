import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Fade from 'react-reveal/Fade';
import MdTime from 'react-ionicons/lib/MdTime';
// import ReCAPTCHA from "react-google-recaptcha";
import EnquiryService from '../httpService/EnquiryService';
import mail from '../../assets/mail.svg';
import location from '../../assets/location.svg';
import phone from '../../assets/phone.svg';
import './form1.css';

const enquiryService = new EnquiryService();

const Form1 = ({ contact }) => {
  let _isMounted = false;
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  // Handler function for the email button click
  const handleEmailButtonClick = (e) => {
    e.preventDefault();
    if (message && name) {
      const mailtoLink = `mailto:info@kovadceramics.com?subject=${encodeURIComponent(
        `Enguiry from ${name}`
      )}&body=${encodeURIComponent(message)}`;

      try {
        window.location.href = mailtoLink;
      } catch (err) {
        setError(err.message);
      }
    } else {
      alert('No email account found. Cannot trigger email.');
    }
    setMessage('');
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });

    const serverData = {
      token: 1234,
      subject: 'Enquiry',
      message: `<html><div><p style="font-size: 1.5rem;">Client Name: ${name}</p>
     
      <p style="font-size: 1.5rem;">${message}</p></div></html>`,
      name: name,
      email: 'info@kovadceramics.com',
      email2: email,
    };

    _isMounted = true;
    if (_isMounted === true) {
      enquiryService
        .create(serverData)
        .then(
          (response) => {
            if (response) {
              toast.success(`Enquiry submitted ${name} we will be in touch`);
              // POST REQUEST HERE
              setName('');
              setEmail('');
              setMessage('');
            }
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((error) => {
          toast.error('Enquiry was not sent');
        });
    }
  };

  useEffect(() => {
    return () => {
      _isMounted = false;
    };
  }, []);

  console.warn('_isMounted', _isMounted);
  return (
    <>
      <section className="quick-contact-1" id={contact}>
        <h3 className="section-title">Quick Contact</h3>
        <Fade bottom>
          <div className="quick-contact-container">
            <div className="contact-info">
              <h2 className="pb-5">Contact Us</h2>
              <div className="contact-location">
                <img src={location} alt="location icon" />
                <p>
                  142, Lawanson Road, Otun-Oba Bus-stop, <br /> Itire, Lagos,
                  Nigeria.
                </p>
              </div>
              <div className="contact-location">
                <img src={phone} alt="location icon" />
                <p href="tel:234-703-484-9938">07034849938</p>
              </div>
              <div className="contact-location">
                <img src={mail} alt="location icon" />
                <p>info@kovadceramics.com</p>
              </div>
              <div className="contact-location special">
                <MdTime
                  fontSize="2rem"
                  color="#fafafa"
                  style={{
                    backgroundColor: 'transparent',
                    marginRight: '7px',
                    textAlign: 'center',
                  }}
                />
                <p>Mon - Friday 8am - 5pm</p>
              </div>
            </div>

            <div className="form-1">
              <div className="form1-container">
                <div className="inner-container">
                  <form id="contact" onSubmit={handleEmailButtonClick}>
                    <h3>Get in touch</h3>
                    <h4>Feel free to drop us a message</h4>
                    <div className="fields-container">
                      <fieldset>
                        <input
                          placeholder="Your name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          placeholder="Message title"
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <textarea
                          placeholder="Type your message here...."
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </fieldset>
                      <fieldset>
                        {/* <ReCAPTCHA
    sitekey="Your client site key"
    onChange={onChange}
  /> */}
                      </fieldset>
                      <fieldset className="shake-button">
                        <button name="submit" type="submit">
                          Send
                        </button>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Form1;
