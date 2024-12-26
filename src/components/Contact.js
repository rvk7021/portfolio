import { useForm } from 'react-hook-form';
import LineGradient from './LineGradient';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import contactMeAnimation from '../assets/contactme.json';
import '../cssfiles//Contact.css'

// onsubmit typebox should be clear and error message should be automatically removed and also change the form method

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-20">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="text-center mb-10"
      >
        <p className="font-sans font-semibold text-purple-300 text-4xl">
          Any Message {''}<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {' '}
               ?{' '} 
            </span>
            Drop Here
        </p>
        <div className="flex justify-center my-5">
          <LineGradient width="w-1/2" />
        </div>
      </motion.div>

      {/* GRID LAYOUT FOR FORM & IMAGE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center items-center"
        >
          <Lottie animationData={contactMeAnimation} />
        </motion.div>

        {/* FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/3f1149bc977f140c43b3e9c1b7448e54"
            method="POST"
            className='formcolor'
          >
            <input
              className="w-full namebox mx-2 my-6 font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-gray-300 mt-1 ml-3">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full mx-2 my-2 emailbox text-black  font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-gray-300 mt-1 ml-3">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full message mx-2 my-2 font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="Your Message"
              rows="5"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-gray-300 mt-1 ml-3">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-3 sentmessage mx-2 my-2 font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              Sent Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
