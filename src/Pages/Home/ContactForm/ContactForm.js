import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactForm = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col my-10">
          <div className="text-center mb-5">
            <h4 className="text-lg text-secondary text-center font-bold">Contact Us</h4>
            <h1 className="text-white text-4xl font-bold">Stay connected with us</h1>
          </div>
          <form>
            <div className="form-control w-full lg:w-96 mb-3">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full lg:w-96">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full mb-3"
              />
              <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
            </div>
          </form>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
