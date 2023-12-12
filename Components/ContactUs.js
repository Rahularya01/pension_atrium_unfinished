import React from "react";
import FooterColumn from "./FooterColumn";
import text from "../public/text.json";
import imgAPI from "@/public/images/ImageApi";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { BookNowIcon, LocationIcon, PhoneIcon, SMSIcon } from "@/assets/icons";

const ContactUs = () => {
  return (
    <div className="py-8 lg:py-12">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-12 text-center">
        Contact Us
      </h1>

      <div className="flex flex-col-reverse lg:flex-row justify-center mb-20 items-stretch">
        {/* Left side with Google Map */}
        <div className="flex-1 w-full mt-6 lg:mt-0 lg:w-4/5 p-4">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed/v1/place?q=Žižkova+504,+541+01+Trutnov+1-Horní+Předměstí,+Czechia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right side with contact form */}
        <div className="flex-1 w-full lg:w-1/2 p-4 ">
          <div className="border rounded-lg shadow p-9 py-10">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Leave Us a Message
              </h2>
            </div>

            <form className="h-full flex flex-col justify-between" id="form">
              <div className="mb-4">
                <Label
                  className="text-gray-700 text-base font-medium pb-2"
                  htmlFor="name"
                >
                  Name
                </Label>
                <input
                  className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline"
                  id="name"
                  required
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <Label
                  className="text-gray-700 text-base font-medium pb-2"
                  htmlFor="email"
                >
                  Email
                </Label>
                <input
                  className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <Label
                  className="text-gray-700 text-base font-medium pb-2"
                  htmlFor="message"
                >
                  Message
                </Label>
                <textarea
                  className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline resize-none"
                  rows={4}
                  id="message"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>

              <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold w-full">
                Send
              </Button>
            </form>
          </div>

          <div className="mt-20 grid grid-cols-2 w-full">
            <div>
              <h2 className="text-black text-base font-bold leading-relaxed mb-3">
                Contact info
              </h2>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LocationIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    541 01 - Trutnov, Žižkova 504
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    tel.: (+420) 731 415 455
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-black text-base font-bold leading-relaxed mb-3">
                Emails
              </h2>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <SMSIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    penzionatrium@seznam.cz
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <SMSIcon className="w-5 h-5 text-[#253871]" />
                  <p className="text-neutral-500 text-base font-normal leading-relaxed">
                    plechac@zskomtu.cz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
