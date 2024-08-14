import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import GridCards from "../Components/GridCards";

const HomePage = () => {
	useEffect(() => {              
		const href = window.location.href.substring(
			window.location.href.lastIndexOf("#") + 1
		);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);
	const swiperRef = useRef();

	const aboutUsData = [
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Facilities",
			desc: "Access 500+ cutting-edge instruments supported by more than 100 highly skilled technicians.",
		},
		// {
		// 	image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/libraries/_dsc4668-2.jpg/jcr:content/renditions/cq5dam.web.800.1047.2x.jpeg",
		// 	name: "Centres",
		// 	desc: "150+ research centres and networks focusing on some of the world's greatest challenges.",
		// },
		{
			image: "https://www.sydney.edu.au/content/dam/people/_33i7057-2.jpg/jcr:content/renditions/cq5dam.web.800.1105.2x.jpeg",
			name: "Find a researcher",
			desc: "Our academics are leaders in their fields, publishing thousands of papers each year.",
		},
	];

	const ourImpactData = [
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
			name: "Printing artificial bones",
			desc: "We're developing personalised 3D-printed ceramic bone implants that could revolutionise surgery for millions of people.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Rethinking agriculture",
			desc: "We're leveraging robotics to make agricultural more productive and sustainable, helping farmers thrive into the future.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Trialling psychiatric drugs",
			desc: "We're developing a new oxytocin-based drug for schizophrenia, depression and other psychiatric disorders.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Rethinking agriculture",
			desc: "We're leveraging robotics to make agricultural more productive and sustainable, helping farmers thrive into the future.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
			name: "Trialling psychiatric drugs",
			desc: "We're developing a new oxytocin-based drug for schizophrenia, depression and other psychiatric disorders.",
		},
	];

	const newsData = [
		{
			image: "https://www.sydney.edu.au/content/dam/people/sam-banister-(right)-josh-ismin-(left)-psylo-high-res.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
			name: "New psychedelic treatments for mental health",
			desc: "University of Sydney researchers have partnered with Psylo, a global biotechnology startup, to develop innovative treatments for psychiatric and neurological disorders.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-arts-and-social-sciences/research/research-centres/sssharc/new-law-school-building.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
			name: "ARC invests in research partnerships with industry",
			desc: "The Australian Research Council has awarded $5.15m to industry projects at the University, along with funding for an Industrial Transformation Training Centre to prepare leaders of Australia's future quantum computing industry.",
		},
	];

	const themesData = [
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Personalisation",
			desc: "Personalisation theme tailors experiences and services to individual preferences using data, enhancing relevance, engagement, and user satisfaction",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Automating Governance",
			desc: "It uses technology to streamline compliance and oversight, enhancing efficiency, transparency, and real-time management of regulations.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Algorithmic Ethics",
			desc: "The Algorithmic Ethics theme ensures fairness, transparency, and accountability in algorithms, addressing biases and ethical concerns in AI-driven decisions.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Human-AI Interaction",
			desc: "The Human-AI Interaction theme explores seamless, intuitive collaboration between humans and AI, emphasizing trust, user control, and design.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Automating Governance",
			desc: "It uses technology to streamline compliance and oversight, enhancing efficiency, transparency, and real-time management of regulations.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Algorithmic Ethics",
			desc: "The Algorithmic Ethics theme ensures fairness, transparency, and accountability in algorithms, addressing biases and ethical concerns in AI-driven decisions.",
		},
		{
			image: "https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
			name: "Human-AI Interaction",
			desc: "The Human-AI Interaction theme explores seamless, intuitive collaboration between humans and AI, emphasizing trust, user control, and design.",
		},
	];

	return (
		<div className="w-full font-Open-sans">
			<div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://accilium.com/wp-content/uploads/2023/07/environmental-technology-green-computing-green-technology-green-it-csr-it-ethics-concept.jpg')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">Research</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div>
			<GridCards
				cols="3"
				title="About Us"
				data={aboutUsData}
				bgColor="#F1F1F1"
			/>
			<div className="w-full flex items-center justify-center py-16">
				<div className="w-full max-w-6xl flex flex-col gap-8">
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-4">
							<p className="text-5xl font-semibold font-Open-sans">
								Themes
							</p>
							<div className="w-[70%] h-[4px] bg-primary-500" />
						</div>
						<div className="flex items-center justify-center gap-3">
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								className="swiper-button-prev w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/50 hover:bg-primary-500"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									fill="currentColor"
									className="bi bi-arrow-left"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
									/>
								</svg>
							</button>
							<button
								onClick={() => swiperRef.current?.slideNext()}
								className="swiper-button-next w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/50 hover:bg-primary-500"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									fill="currentColor"
									className="bi bi-arrow-right"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
									/>
								</svg>
							</button>
						</div>
					</div>
					<Swiper
						spaceBetween={30}
						breakpoints={{
							576: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						loop={true}
						className="mySwiper w-full px-8"
					>
						{themesData.map((item, index) => (
							<SwiperSlide
								className="w-full flex flex-col gap-3 group"
								key={index}
							>
								<img
									src={item.image}
									alt=""
									className="w-full h-80 object-cover"
								/>
								<div className="flex flex-col gap-1 mt-4">
									<p className="text-2xl font-semibold group-hover:text-primary-500 truncate transition-all duration-300">
										{item.name}
									</p>
									<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300"></div>
								</div>
								<p className="line-clamp-2 mt-4">{item.desc}</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<GridCards
				id="research-project"
				cols="3"
				title="Research Projects"
				data={ourImpactData}
				bgColor="#F1F1F1"
			/>
			<GridCards
				cols="2"
				title="Recent news"
				data={newsData}
				bgColor="#FFF"
			/>
		</div>
	);
};

export default HomePage;
