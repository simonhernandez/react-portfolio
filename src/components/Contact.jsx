import React from "react";

import { Wrapper, Form } from "../components";
import { typography, layout, spacing } from "../styles/style";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${spacing.paddingY} bg-primary_very_light text-center md:text-left dark:bg-dark_200`}
    >
      <Wrapper styles={`${layout.wrapper} space-y-8 md:space-y-24`}>
        <header className="text-center">
          <h2 className={`${typography.heading2} heading-underline`}>Contact</h2>
        </header>

        <div className="space-y-6 md:flex md:space-y-0">
          <div className="space-y-2 flex-1">
            <h2 className={`${typography.heading2} text-primary`}>
              Get in touch
            </h2>
            <p>
              If you are interested in working together, please feel free to
              shoot me an email or send me a message to my Whatsapp or Telegram,
              anytime. I will get back to you as soon as possible.
            </p>
            <address className="space-y-4 text-left">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FF5353"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                </svg>
                <div className="flex flex-col">
                  <a
                    href="mailto:hello@simon-hernandez.com"
                    className="contact__email"
                  >
                    hello@simon-hernandez.com
                  </a>
                  <a
                    href="mailto:simonhernandezbarboza@gmail.com"
                    className="contact__email"
                  >
                    simonhernandezbarboza@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FF5353"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
                <div>
                  <a href="tel:+584142905911" className="contact__phone">
                    +(58) 414 - 2905911
                  </a>
                </div>
              </div>
            </address>
          </div>

          <div className="flex-1">
            <Form styles={`mx-auto md:mx-0 md:ml-auto shadow-md`} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
