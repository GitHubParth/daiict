import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay } from 'swiper/modules';

const AboutUs = () => {
	return (
		<div className="w-full font-Open-sans mt-20">
			{/* <div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://www.sydney.edu.au/content/dam/corporate/images/lambert-initiative/about/quad-emtpy.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">About Us</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div> */}
			<div className="w-full max-w-6xl mx-auto py-14 px-4 lg:px-0">
				<div className="w-full">
					<h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-6 md:mb-10 relative lg:before:w-[12%] before:w-[30%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">About Us</h2>
					<p className="text-lg mb-5 text-justify lg:text-left">At Insight SFI Research Centre for Data Analytics, we undertake high impact research in data analytics that has significant benefits for the individual, industry and society by enabling better decision making. All of our research is informed by our vision; Empowering Citizens. Smarter Societies.</p>
					<p className="text-lg text-justify lg:text-left">Making good decisions is dependent on having the best and most accurate information at your fingertips. Our research helps to transform data into knowledge.</p>
				</div>
				<div id="who-are-we" className="w-full py-20">
					<h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-6 md:mb-10 relative lg:before:w-[12%] before:w-[30%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">Who Are We</h2>
					<p className="text-lg mb-5 text-justify lg:text-left">SELC is one of the largest data analytics centres in Europe. It seeks to derive value from Big Data and provides innovative technology solutions for industry and society by enabling better decision-making.</p>
					<p className="text-lg mb-5 text-justify lg:text-left">We support 450 researchers across areas such as the Fundamentals of Data Science, Sensing and Actuation, Scaling Algorithms, Model Building, Multi Modal Analysis, Data Engineering and Governance, Decision Making and Trustworthy AI.</p>
					<p className="text-lg text-justify lg:text-left">Their research can be applied across four broad areas:</p>
					<ul className="list-disc ml-8">
						<li className="text-base my-2">Augmented Human</li>
						<li className="text-base my-2">Smart Enterprise</li>
						<li className="text-base my-2">Smart Communities</li>
						<li className="text-base mt-2">Sustainability</li>
					</ul>
				</div>
				<div id="governance" className="w-full py-20">
					<h2 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mb-6 md:mb-10 relative lg:before:w-[12%] before:w-[30%] before:absolute before:h-1 before:bg-primary-500 before:-bottom-1 before:left-0">Governance</h2>
					<Swiper
						spaceBetween={30}
						breakpoints={{
							576: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 3,
							},
							1024: {
								slidesPerView: 5,
							},
						}}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						loop={true}
						className="mySwiper w-full px-8 select-none"
					>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
						<SwiperSlide className="w-full flex flex-col gap-3 group">
							<img src="/images/daiict-logo.jpg" alt="" className="w-full h-full object-cover" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
