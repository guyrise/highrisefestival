import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import axios from "axios";

import { useInView } from "react-intersection-observer";

import LoadingLogo from "../../helpers/LoadingLogo/LoadingLogo";

// images
import firebreather from "../../../assets/images/highrise-firebreather.jpeg";

import "./newsletter.css";

const Newsletter = () => {
  const form = useRef();

  const { ref: newsletterRef, inView: visible } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-150px",
    fallbackInView: true,
  });

  const [contacted, setContacted] = useState(false);

  const [error, setError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
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

  const submitForm = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);

    const url =
      "https://assets.mailerlite.com/jsonp/322060/forms/79631453669819520/subscribe";
    axios({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        //handle success
        if (response.status == 200 && response.data.success) {
          console.log("user was successfully subscribed");
          setSubscribed(true);
        } else if (response.status == 200 && !response.data.success) {
          console.log("error");
          console.log(response.data.errors);
          setError(true);
        }
        console.log(response);
      })
      .catch((error) => {
        //handle error
        console.log(error);
      });
  };

  return (
    <div
      ref={newsletterRef}
      className={`${visible ? "show-newsletter" : ""} newsletter-wrapper`}
    >
      <div className="newsletter-grid grid grid-cols-1 md:grid-cols-2">
        {!subscribed && (
          <div className="newsletter-content pt-12 pb-32 xl:px-12">
            <h4>Join our mailing list!</h4>
            <p>
              Keep up to speed with the latest announcements, news and ticket
              information straight to your inbox!
            </p>
            <div className="newsletter-inputs">
              <iframe
                id="ifrm1"
                name="ifrm1"
                style={{ display: "none" }}
              ></iframe>

              <form
                ref={form}
                id="newsletter-form"
                onSubmit={submitForm}
                className="grid grid-cols-8 gap-4 mt-6"
                data-code=""
                target="ifrm1"
              >
                <div className="input-box col-span-4">
                  <input
                    className="newsletter-input"
                    type="text"
                    name="fields[name]"
                    required
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
                    name="fields[last_name]"
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
                    name="fields[email]"
                    required
                    onFocus={onEmailFocus}
                    onBlur={onEmailBlur}
                    pattern="([A-Za-z0-9][-A-Za-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))"
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
                    name="fields[phone]"
                    onFocus={onMobileFocus}
                    onBlur={onMobileBlur}
                    pattern="(07[\d]{8,12}|447[\d]{7,11})"
                    placeholder=" "
                  />
                  <label className="input-label" htmlFor="contact-number">
                    {mobileLabel}
                  </label>
                </div>

                <input type="hidden" name="anticsrf" value="true" />

                <div className="checkbox-box col-span-4 lg:col-span-5 flex justify-between items-center">
                  <label
                    htmlFor="gdpr_check"
                    className="checkbox-label md:pr-12 md:pl-2"
                  >
                    I agree to receive the latest updates from Highrise Festival
                    and have read our{" "}
                    <Link to="/privacy-policy" className="privacy-policy-link">
                      Privacy Policy
                    </Link>
                  </label>
                  <input
                    className="newsletter-input md:mr-3"
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
                  {!subscribed && (
                    <>
                      <button
                        type="submit"
                        value="submit"
                        id="subscribe-button"
                      >
                        <span data-glitch={"Subscribe"}>Subscribe</span>
                      </button>
                    </>
                  )}
                  {subscribed && (
                    <>
                      <button
                        type="submit"
                        value="submit"
                        disabled
                        id="subscribe-button"
                      >
                        <span>Thank you</span>
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
        {subscribed && (
          <div className="subscribe-confirtmation flex justify-center items-center p-12 mb-24">
            <h3>
              <span data-glitch={"Thank you for subscribing!"}>
                Thank you for subscribing!
              </span>
            </h3>
          </div>
        )}
        <div className="newsletter-image-box hidden md:block"></div>
      </div>
    </div>
  );
};

export default Newsletter;
