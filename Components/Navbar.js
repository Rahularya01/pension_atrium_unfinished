// components/Navbar.js
"use client";
import { BookNowIcon } from "@/assets/icons";
import imgAPI from "@/public/images/ImageApi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import images from "../public/images/ImageApi.js";
import content from "../public/text.json";
import LanguageDrop from "./LanguageDrop";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Navbar = () => {
  const headerRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: imgAPI.home_vectors[22] },
    { code: "cz", name: "CZECH", flag: imgAPI.home_vectors[23] },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="container flex items-center justify-between pb-6 pt-8"
    >
      {/* Left side with icon */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={180}
            height={40}
            src={images.home_vectors[0]}
            alt="Icon"
          />
        </Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="lg:hidden relative">
        <button
          type="button"
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <Image
            src={images.home_vectors[18]}
            alt="image"
            className="h-auto"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen ? (
          <motion.div
            className={`absolute top-[111px] left-0 w-full h-[calc(100vh-111px)] bg-white z-50 lg:hidden flex flex-col gap-16 items-center justify-center`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div className="mx-auto w-full max-w-[302px] flex flex-col gap-16">
              <nav className="gap-6 flex flex-col">
                <Link
                  className="text-xl font-bold text-[#414141]"
                  href="/accomodation"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_accom}
                </Link>
                <Link
                  className="text-xl font-bold text-[#414141]"
                  href="/services"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_ser}
                </Link>
                <Link
                  className="text-xl font-bold text-[#414141]"
                  href="/surroundings"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_surr}
                </Link>
                <Link
                  className="text-xl font-bold text-[#414141]"
                  href="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {content.nav_contact}
                </Link>
              </nav>

              <div className="space-y-4">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language, i) => (
                      <SelectItem
                        className="flex items-center"
                        key={i}
                        value={language.code}
                      >
                        <div className="flex items-center">
                          <Image
                            width={16}
                            height={16}
                            src={languages.flag}
                            alt={`Flag for ${languages.name}`}
                            className="w-4 h-4 mr-2"
                          />
                          {language.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="bg-primary-gradient w-full text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold">
                  <BookNowIcon className="w-4 h-4" />
                  {content.nav_btn}
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* Right side with language dropdown, links and button */}
      <div className="hidden lg:flex items-center gap-8 ">
        <nav className="hidden lg:flex gap-6">
          <Link
            className="text-base font-bold text-[#414141]"
            href="/accomodation"
          >
            {content.nav_accom}
          </Link>
          <Link className="text-base font-bold text-[#414141]" href="/services">
            {content.nav_ser}
          </Link>
          <Link
            className="text-base font-bold text-[#414141]"
            href="/surroundings"
          >
            {content.nav_surr}
          </Link>
          <Link className="text-base font-bold text-[#414141]" href="/contact">
            {content.nav_contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Your language dropdown code goes here */}
          <LanguageDrop />

          {/* Button */}
          <Button className="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold">
            <BookNowIcon className="w-4 h-4" />
            {content.nav_btn}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
