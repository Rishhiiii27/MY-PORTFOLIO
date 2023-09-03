import React from "react";

import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";
import emailLogo from "../assets/email.png"; // Import your email logo image
import githubLogo from "../assets/github.png"; // Import your GitHub logo image
import phoneLogo from "../assets/phone.png"; // Import your phone logo image
import linkedinLogo from "../assets/linkedin.png"; // Import your LinkedIn logo image

const Contact = () => {

    const emailURL = "mailto:rishigupta88616@gmail.com";
    const githubURL = "https://github.com/Rishhiiii27";
    const phoneURL = "tel:+91 7302323391";
    const linkedinURL = "https://www.linkedin.com/in/rishhiiii27/";

    return (
        <div
            id="contact"
            className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
        >
            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                        Connect With me 
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
                       
                    Feel free to contact me through email,
                    connect on LinkedIn, explore my GitHub projects, 
                    or give me a call. Let's connect and discuss exciting opportunities!
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                  {/* CONTACT DETAILS START */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* EMAIL LOGO */}
                    <a href={emailURL} target="_blank" rel="noopener noreferrer">
                        <img src={emailLogo} alt="Email" className="cursor-pointer" />
                    </a>

                    {/* GITHUB LOGO */}
                    <a href={githubURL} target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="cursor-pointer" />
                    </a>

                    {/* PHONE LOGO */}
                    <a href={phoneURL} target="_blank" rel="noopener noreferrer">
                        <img src={phoneLogo} alt="Phone" className="cursor-pointer" />
                    </a>

                    {/* LINKEDIN LOGO */}
                    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" className="cursor-pointer" />
                    </a>
                </div>
                {/* CONTACT DETAILS END */}

                <Form />
            </Wrapper>
        </div>
    );
};

export default Contact;
