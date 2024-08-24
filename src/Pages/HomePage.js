import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

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
	const heroSwiperRef = useRef();



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

	const heroSwiperData = [
		{
			image: "https://itbrief.com.au/uploads/story/2022/02/03/GettyImages-857015074.webp",
			title: "Research Theme 1",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
		},
		{
			image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1080",
			title: "Research Theme 2",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
		},
		{
			image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1080",
			title: "Research Theme 3",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
		},
		{
			image: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1080",
			title: "Research Theme 4",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
		},
		{
			image: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1080",
			title: "Research Theme 5",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
		},
	]

	const [currHeroIdx, setCurrHeroIdx] = useState(0)

	return (
		<div className="w-full font-Open-sans">
			<div className="w-full mt-20 h-[calc(100vh-5rem)] flex items-center justify-center border-b-4 border-primary-500">
				<Swiper
					onBeforeInit={(swiper) => {
						heroSwiperRef.current = swiper;
					}}
					onSlideChange={(swiper) => {
						setCurrHeroIdx(swiper.realIndex)
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					effect={'fade'}
					modules={[Autoplay, EffectFade]}
					loop={true}
					className="mySwiper w-full h-full px-8 relative">
					<div className="absolute bottom-5 left-1/2 translate-x-[-50%] flex gap-2 z-20">
						{[0, 1, 2, 3, 4].map((num, idx) => (
							<button key={idx} onClick={() => { heroSwiperRef.current.slideTo(num); setCurrHeroIdx(num) }} className={currHeroIdx === num ? "bg-primary-500 h-1.5 !outline-none lg:w-14 w-5 hover:bg-primary-500 rounded-full" : "bg-gray-500 h-1.5 !outline-none lg:w-14 w-5 hover:bg-primary-500 rounded-full"}></button>
						))}
					</div>
					{heroSwiperData.map((item, index) => (
						<SwiperSlide key={index} style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url(" + item.image + ")" }} className={"w-full h-full relative !flex bg-cover bg-no-repeat bg-center"}>
							<div className="py-20 lg:max-w-6xl mx-auto px-4 lg:px-0 flex flex-col justify-end lg:gap-8 gap-4 text-white">
								<p className="lg:text-6xl text-2xl italic font-Nunito">{item.title}</p>
								<div className="h-[5px] w-[14%] bg-primary-500"></div>
								<p className="lg:text-2xl font-normal lg:leading-10 lg:w-[50%] w-full">
									Our researchers are tackling the world’s greatest
									problems, from creating a more sustainable world to
									developing new treatments for chronic diseases.
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

			</div>
			{/* <GridCards
				cols="3"
				title="About Us"
				data={aboutUsData}
				bgColor="#F1F1F1"
			/> */}
			<div className="w-full flex items-center justify-center py-16 bg-[#F1F1F1]">
				<div className="w-full max-w-6xl px-4 lg:px-0 flex flex-col gap-8">
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-4">
							<p className="lg:text-5xl text-3xl font-semibold font-Open-sans">
								News
							</p>
							<div className="w-[50%] h-[4px] bg-primary-500" />
						</div>
						<div className="flex items-center gap-5 lg:hidden">
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								className="swiper-button-prev w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="currentColor"
									className="bi bi-chevron-left"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
									/>
								</svg>
							</button>
							<button
								onClick={() => swiperRef.current?.slideNext()}
								className="swiper-button-next w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="currentColor"
									className="bi bi-chevron-right"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="relative">
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
										className="w-full lg:h-80 h-64 object-cover"
									/>
									<div className="flex flex-col gap-1 lg:mt-5 mt-3">
										<p className="lg:text-2xl text-xl font-semibold group-hover:text-primary-500 truncate transition-all duration-300">
											{item.name}
										</p>
										<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300"></div>
									</div>
									<p className="line-clamp-2 lg:mt-4 mt-3 text-xs lg:text-base">{item.desc}</p>
								</SwiperSlide>
							))}
						</Swiper>
						<button
							onClick={() => swiperRef.current?.slidePrev()}
							className="swiper-button-prev hidden absolute top-1/2 -translate-y-1/2 -left-20 w-8 h-8 lg:w-12 lg:h-12 rounded-full lg:flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								fill="currentColor"
								className="bi bi-chevron-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
								/>
							</svg>
						</button>
						<button
							onClick={() => swiperRef.current?.slideNext()}
							className="swiper-button-next hidden absolute top-1/2 -translate-y-1/2 -right-20 w-8 h-8 lg:w-12 lg:h-12 rounded-full lg:flex items-center justify-center bg-primary-500/5 hover:bg-primary-500/50 shadow"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								fill="currentColor"
								className="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* <GridCards
				cols="2"
				title="Recent news"
				data={newsData}
				bgColor="#FFF"
			/> */}
			<div className="w-full flex items-center justify-center gap-10 py-16">
				<div className="w-full max-w-6xl flex flex-col gap-8 px-4 lg:px-0">
					<div className="flex flex-col gap-4">
						<p className="text-5xl font-semibold font-Open-sans capitalize">
							Resources
						</p>
						<div className="w-[9%] h-[4px] bg-primary-500" />
					</div>
					<div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-4">
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								1492
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								52
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								1256
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								560
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
					</div>
				</div>
			</div>
			<GridCards
				id="research-project"
				cols="3"
				title="Research Projects"
				data={ourImpactData}
				bgColor="#F1F1F1"
			/>
		</div>
	);
};

export default HomePage;
