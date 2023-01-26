import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const form = useRef();

  const [contacted, setContacted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
          console.log(form.current.value);
          console.log(form.current.contact_name.value);
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };

  return (
    <div className="newletter-wrapper">
      Newsletter
      <div className="newletter-content">
        <h3>Subscribe to your mailing list</h3>
        <div className="newletter-inputs">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="contact_name" />
            <label>Email</label>
            <input type="email" name="contact_email" />
            <label>Mobile</label>
            <input
              type="tel"
              name="contact_number"
              pattern="(07[\d]{8,12}|447[\d]{7,11})"
            />

            <input
              type="checkbox"
              id="contacted-check"
              name="gdpr_check"
              aria-controls="agree to be contacted toggle"
              aria-expanded="agree to be contacted toggle"
              checked={contacted}
              onChange={() => setContacted(!contacted)}
            />
            <label htmlFor="contacted-check" className="newletter-label" />
            <button type="submit" value="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="newletter-logo">logo art stuff</div>
    </div>
  );
};

export default Newsletter;

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
