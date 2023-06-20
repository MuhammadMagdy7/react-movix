import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";


const Footer = () => {
    return (
        <footer className="bg-[#020c1b] pt-10 pb-5">
            <ContentWrapper>
                <ul className="flex gap-4 justify-center py-3 mb-3">
                    <li className="hover:text-pink">Terms Of Use</li>
                    <li className="hover:text-pink">Privacy-Policy</li>
                    <li className="hover:text-pink">About</li>
                    <li className="hover:text-pink">Blog</li>
                    <li className="hover:text-pink">FAQ</li>
                </ul>
                <div className="text-center leading-5 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="flex gap-10 justify-center py-7">
                    <span className="hover:text-pink">
                        <FaFacebookF />
                    </span>
                    <span className="hover:text-pink">
                        <FaInstagram />
                    </span>
                    <span className="hover:text-pink">
                        <FaTwitter />
                    </span>
                    <span className="hover:text-pink">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
