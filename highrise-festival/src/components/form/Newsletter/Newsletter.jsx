import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import LoadingLogo from "../../helpers/LoadingLogo/LoadingLogo";

import "./newsletter.css";

const Newsletter = () => {
  const form = useRef();

  const [contacted, setContacted] = useState(false);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailLabel, setEmailLabel] = useState("example@example.co.uk");
  const [mobileLabel, setMobileLabel] = useState("07123 456 789");

  const onEmailFocus = () => {
    setEmailLabel("email");
  };

  const onEmailBlur = () => {
    setEmailLabel("example@example.co.uk");
  };

  const onMobileFocus = () => {
    setMobileLabel("Mobile");
  };

  const onMobileBlur = () => {
    setMobileLabel("07123 456 789");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("this function is running");
    emailjs
      .sendForm(
        // service_id
        "service_1d6g12f",
        // template_id
        "template_oy0he1o",
        form.current,
        // public_key
        "F1mZzhNrhdSeO0HKt"
      )
      .then(
        (result) => {
          setLoading(false);
          console.log("SUCCESS!", result.status, result.text);
          setAlert(true);
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error);
          setAlert(true);
        }
      );
    e.target.reset();
  };

  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-grid grid grid-cols-1 md:grid-cols-2">
        <div className="newsletter-content pt-12 pb-32">
          <h4>Join the mailing list!</h4>
          <p>
            Keep up to speed with the latest announcements, news and ticket
            information straight to your inbox!
          </p>
          <div className="newsletter-inputs">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-8 gap-4 mt-6"
            >
              <div className="input-box col-span-4">
                <input
                  className="newsletter-input"
                  type="text"
                  name="contact_firstname"
                  placeholder=" "
                />
                <label className="input-label" htmlFor="contact-firstname">
                  name
                </label>
              </div>

              <div className="input-box col-span-4">
                <input
                  className="newsletter-input"
                  type="text"
                  name="contact_lastname"
                  placeholder=" "
                />
                <label className="input-label" htmlFor="contact-lastname">
                  surname
                </label>
              </div>

              <div className="input-box col-span-8">
                <input
                  className="newsletter-input"
                  type="email"
                  name="contact_email"
                  onFocus={onEmailFocus}
                  onBlur={onEmailBlur}
                  pattern="([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))"
                  placeholder=" "
                />
                <label
                  className="input-label"
                  id="email-label"
                  htmlFor="contact-email"
                >
                  {emailLabel}
                </label>
              </div>

              <div className="input-box col-span-8">
                <input
                  className="newsletter-input"
                  type="tel"
                  name="contact_number"
                  onFocus={onMobileFocus}
                  onBlur={onMobileBlur}
                  pattern="(07[\d]{8,12}|447[\d]{7,11})"
                  placeholder=" "
                />
                <label className="input-label" htmlFor="contact-number">
                  {mobileLabel}
                </label>
              </div>

              <div className="checkbox-box col-span-4 lg:col-span-5 flex justify-between items-center">
                {/* <label for="gdpr_check"></label> */}

                <label className="checkbox-label">
                  I agree to receive the latest updates from Highrise Festival
                  and have read our{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </label>
                <input
                  className="newsletter-input"
                  type="checkbox"
                  id="contacted-check"
                  name="gdpr_check"
                  aria-controls="agree to be contacted toggle"
                  aria-expanded="agree to be contacted toggle"
                  checked={contacted}
                  onChange={() => setContacted(!contacted)}
                  required={true}
                />
              </div>
              <div className="submit-box col-span-4 lg:col-span-3 flex justify-center items-center ">
                {!loading && (
                  <>
                    <button type="submit" value="submit" id="subscribe-button">
                      <span data-glitch={"Subscribe"}>Subscribe</span>
                    </button>
                  </>
                )}
                {loading && <LoadingLogo />}
              </div>
            </form>
          </div>
        </div>
        <div className="newsletter-image-box hidden md:block"></div>
      </div>
    </div>
  );
};

export default Newsletter;
