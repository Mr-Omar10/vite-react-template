import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import axios from "axios";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

//Sweet alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//Google Analytics
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';







const Contact = () => {

  const form = useRef();
  const captchaRef = useRef(null);
  const MySwal = withReactContent(Swal)
  const siteKey = import.meta.env.VITE_SITE_KEY;
  const gaEvent = useAnalyticsEventTracker("Contact us");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  
  const sendEmail = async (e) => {
    e.preventDefault();
    const inputVal = e.target[0].value;
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    await axios.post(inputVal, token)
    .then(res =>  console.log(res))
    .catch((error) => {
    console.log(error);
    });

    // emailjs.sendForm('service_p6z6rmw', 'template_yfu1ucb', form.current, '_2OkrdvuusBZ8WX0G')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

   if (token === "") {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill the captcha!',
    })
   } else {
      if (name === "" || email === "" || message === "") {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill all the fields!',
        })
      } else {
        emailjs.sendForm('service_p6z6rmw', 'template_yfu1ucb', form.current, '_2OkrdvuusBZ8WX0G')
        .then((result) => {
            console.log(result.text);
            MySwal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Your message has been sent!',
            })
            window.location.reload();
        })
        , (error) => {
            console.log(error.text);
        }
      }
   }
  };

  
    
  axios.get("http://localhost:3000/contact").then((res) => {
    console.log(res.data);
  });
  return (
    <>
    <nav className="flex justify-between p-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 " />
        </Link>
        <h4 className="font-montserrat ">Omar Huseynov</h4>
      </div>
      <div className="flex items-center">
        <Link
          to="/"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          About me
        </Link>
        <Link
          to="/projects"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="font-montserrat bg-slate-200 text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
    <div className=" ">
        <h1 className="text-3xl font-montserrat text-center">I've been waiting for you.</h1>
        <h3 className="text-xl font-montserrat text-center">Let's get in touch.</h3>
        <div className="flex justify-center ">
            <form onSubmit={sendEmail} ref={form} className="flex flex-col w-1/2">
                <label className="font-montserrat">Name</label>
                <input type="text"  onChange={(e) => setName(e.target.value)} name="user_name" className="border-2 border-gray-300 rounded-md p-2 mb-2" />
                <label className="font-montserrat">Email</label>
                <input type="email"  onChange={(e) => setEmail(e.target.value)} name="user_email" className="border-2 border-gray-300 rounded-md p-2 mb-2" />
                <label className="font-montserrat">Message</label>
                <textarea name="message"  onChange={(e) => setMessage(e.target.value)} className="border-2 border-gray-300 rounded-md p-2 mb-2" />
                <ReCAPTCHA  
                sitekey={siteKey}
                ref={captchaRef}
                />
                <input type="submit" onClick={() => gaEvent("send")} value="Send" className="bg-slate-200 text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" />
            </form>
        </div>
    </div>
    
    </>
  );
};

export default Contact;
