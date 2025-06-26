import Aos from "aos";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const serviceID = "service_0b25iah";
const templateID = "template_eyfxoc2";
const publicKey = "FBgsd2tyUH6sFTGJ1";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    Aos.init();
  }, []);

  const notify = (string: string, type: any) => {
    toast(string, {type: type})
  }

  const sendEmail = (e:any) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((_result) => {
        notify("Your message has been sent successfully", "success")
      }, (_error) => {
        notify("Your message hasn't been sent successfully", "error")
      })
    }
  }

  return (
    <div className="mt-[60px] md:mt-[80px]">
      <ToastContainer />
      <div>
        <h2
          className="text-[32px] font-semibold "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let's Work Together!
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 mt-[30px] lg:col-span-7">
          <form
            id="contact-form"
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid gap-[30px] md:flex">
              <input
                className="inputBox"
                placeholder="Enter Your Name"
                id="name"
                required
                type="text"
                name="name"
              />
              <input
                className="inputBox"
                id="email"
                required
                placeholder="Enter Your Email"
                type="email"
                name="email"
              />
            </div>
            <div className="mt-[30px]">
              <input
                className="inputBox"
                placeholder="Website Link: (optional)"
                id="website"
                type="url"
                name="website"
              />
            </div>
            <div className="mt-[30px]">
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
                rows={10}
                cols={50}
                className="w-full rounded-lg border bg-transparent p-[15px] pl-[10px] text-text focus:outline-none dark:border-btn"
              ></textarea>
            </div>
            <div className="wow fadeIn  animated mt-[30px]">
              <button className="btn" type="submit">SEND MESSAGE</button>
              <p className="mt-3 text-red-500"></p>
            </div>
          </form>
        </div>
        <div
          className="col-span-12 lg:col-span-5"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
      </div>
    </div>
  );
}
