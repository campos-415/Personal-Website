import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsFilePdf, BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import contactus from "../public/assets/programming.svg";
import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

interface Props {

}


export const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const templateParams = {
      user_name: name,
      user_number: number,
      user_email: email,
      subject: subject,
      message: message,
      reply_to: "camposss.415@gmail.com",
    };

    emailjs.send(
      "service_litwiq6",
      "template_nltfluk",
      templateParams,
      "XLo66Pj42bzrGVQqR"
    );

    setName("");
    setNumber("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  

  return (
    <section id="contact">
      <div className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
          <p className="text-xl trackiing-widest uppercase text-[#46a0ff] ">
            <span className="text-gray-400">// </span>Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}

            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl">
              <div className="flex flex-col items-center justify-center lg:p-4 h-full rounded-xl p-4 ">
                <div>
                  <Image width={500} height={500} src={contactus} alt="" />
                </div>
                <div className="pt-8">
                  <h2 className="py-2">Cesar Campos</h2>
                  <p>Frontend Developer</p>
                  <p className="py-4">
                    I am open for new opportunities whether you're looking to
                    build a new website or improve an existing one, I'm
                    committed to delivering solutions that meet your needs and
                    exceed your expectations. Contact me today to discuss further opportunities and learn more about how I can help bring your
                    vision to life.{" "}
                  </p>
                </div>
                <div className="pt-8">
                  <p className="uppercase tracking-widest text-center pt-8">
                    Connect with me
                  </p>
                  <div className="flex  justify-between  gap-2 max-w-[330px] m-auto py-4 ">
                    <Link
                      href="https://www.linkedin.com/in/campos415/"
                      target="_blank">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link href="https://github.com/campos-415" target="_blank">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>

                    <Link href="/CesarCamposResume.pdf" target="_blank">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                        <BsFilePdf />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-semibold">
                      email
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-semibold">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="border-2 rounded-lg py-3 border-gray-300"
                      rows={10}
                    />
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12 ">
            <Link href="/#home">
              <div
                className="rounded-full shadow-lg animate-[bounce_1s_ease-in-out_infinite]
             shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  size={25}
                  className="text-[#46a0ff]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
