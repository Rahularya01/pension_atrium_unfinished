// components/Footer.js
import React from 'react';
import text from '../public/text.json';
import imgAPI from '@/public/images/ImageApi';
import FooterColumn from './FooterColumn';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-neutral-700 w-full text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-y-5 justify-center items-center">
        {/* First Column */}
        <div className="md:w-1/4  justify-center w-full  mx-auto p-4 text-center md:text-left">
          <div className="mb-4 ">
            {/* Logo */}
            <Image width={160} height={70} src={imgAPI.home_vectors[12]} alt="Logo" className="w-auto h-16 mb-2 mx-auto md:mx-0" />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            {/* Icons */}
            <div className="mr-2">
              <Image width={35} height={35} src={imgAPI.home_vectors[13]} alt="Icon 1" className="w-8 h-8" />
            </div>
            <div>
              <Image width={35} height={35} src={imgAPI.home_vectors[14]} alt="Icon 2" className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <FooterColumn
          heading="Contact Info"
          row1Icon={imgAPI.home_vectors[15]}
          row1Text={text.footer_loc}
          row2Icon={imgAPI.home_vectors[16]}
          row2Text={text.footer_tel}
        />

        {/* Third Column */}
        <FooterColumn
          heading="Emails"
          row1Icon={imgAPI.home_vectors[17]}
          row1Text={text.mail_1}
          row2Icon={imgAPI.home_vectors[17]}
          row2Text={text.mail_2}
        />
      </div>
    </footer>
  );
};

export default Footer;
