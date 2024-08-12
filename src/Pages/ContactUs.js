import React from "react";

const ContactUs = () => {
	return (
		<div className="mt-20 w-full font-Open-sans">
			<div className="w-full max-w-6xl mx-auto py-14">
                <h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-6 md:mb-10 relative before:w-[12%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">Contact Us</h2>
                <form className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="w-full h-12 relative">
                        <input type="text" id="contactFormName" name="contactFormName" placeholder=" " className="w-full h-full peer py-3 px-4 border  rounded-md focus:outline-none border-primary-500 placeholder-shown:border-gray-300 focus:border-primary-500" />
                        <label htmlFor="contactFormName" className="absolute -top-3 left-3 bg-white transition-all duration-300 px-1 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-primary-500 peer-placeholder-shown:text-gray-400 text-primary-500">Full Name</label>
                    </div>
                    <div className="w-full h-12 relative">
                        <input type="email" id="contactFormEmail" name="contactFormEmail" placeholder=" " className="w-full h-full peer py-3 px-4 border  rounded-md focus:outline-none border-primary-500 placeholder-shown:border-gray-300 focus:border-primary-500" />
                        <label htmlFor="contactFormEmail" className="absolute -top-3 left-3 bg-white transition-all duration-300 px-1 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-primary-500 peer-placeholder-shown:text-gray-400 text-primary-500">Email</label>
                    </div>
                    <div className="w-full h-28 col-span-2 relative">
                        <textarea id="contactFormMessage" name="contactFormMessage" placeholder=" "  className="w-full h-full peer py-3 px-4 border  rounded-md focus:outline-none border-primary-500 placeholder-shown:border-gray-300 focus:border-primary-500" />
                        <label htmlFor="contactFormMessage" className="absolute -top-3 left-3 bg-white transition-all duration-300 px-1 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-primary-500 peer-placeholder-shown:text-gray-400 text-primary-500">Message</label>
                    </div>
                    <div className="w-full relative flex items-center gap-2">
                        <input type="checkbox" id="contactFormAgree" name="contactFormAgree" className="w-4 h-4 accent-primary-500" />
                        <label htmlFor="contactFormAgree">I agree to privacy policy</label>
                    </div>
                    <button type="submit" className="bg-primary-500 w-fit text-white py-3 px-4 rounded-md col-span-2">Send Message</button>
                </form>
            </div>
		</div>
	);
};

export default ContactUs;
