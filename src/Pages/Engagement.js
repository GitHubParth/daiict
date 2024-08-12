import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const Engagement = () => {
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

	const mediaImages = [
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/yellow-light-nano-clean-room.jpg/jcr:content/renditions/cq5dam.web.800.1173.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/bms/_33i6564.jpg",
		"https://www.sydney.edu.au/content/dam/people/_33i7057-2.jpg/jcr:content/renditions/cq5dam.web.800.1105.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/libraries/_dsc4668-2.jpg/jcr:content/renditions/cq5dam.web.800.1047.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/Hala-new-2.JPG/jcr:content/renditions/cq5dam.web.440.296.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/corporate/ex/images/hero-crop/research/_33i0060.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/campus-facilities-and-amenities/research-facilities/associate-professor-michael-bowen.jpg/jcr:content/renditions/cq5dam.web.440.293.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/people/sam-banister-(right)-josh-ismin-(left)-psylo-high-res.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
		"https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-arts-and-social-sciences/research/research-centres/sssharc/new-law-school-building.jpg/jcr:content/renditions/cq5dam.web.800.533.2x.jpeg",
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

	return (
		<div className="w-full">
			<div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://www.sydney.edu.au/content/dam/bms/_33i6564.jpg')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">Engagement</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div>
			<div className="max-w-6xl h-full mx-auto py-20">
				<div id="media" className="flex flex-col gap-10 py-24">
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-4">
							<p className="text-5xl font-semibold font-Open-sans">
								Media
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
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						loop={true}
						modules={[Autoplay]}
						className="mySwiper w-full px-8"
					>
						{mediaImages.map((item, index) => (
							<SwiperSlide
								className="w-full flex flex-col gap-3 group"
								key={index}
							>
								<img
									src={item}
									alt=""
									className="w-full h-96 object-cover"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div id="events" className="flex flex-col gap-10 py-24">
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-4">
							<p className="text-5xl font-semibold font-Open-sans">
								Events
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
								slidesPerView: 2,
							},
						}}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						loop={true}
						modules={[Autoplay]}
						className="mySwiper w-full px-8"
					>
						{newsData.map((item, index) => (
							<SwiperSlide
								className="w-full flex flex-col gap-3 group"
								key={index}
							>
								<div
									key={index}
									className="w-full min-h-[500px] max-h-[500px] group"
								>
									<div className="w-full h-[80%] overflow-hidden">
										<img
											src={item.image}
											alt=""
											className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
										/>
									</div>
									<div className="h-[20%] flex flex-col justify-evenly">
										<div className="flex flex-col gap-0.5 mt-4">
											<p className="text-2xl font-semibold group-hover:text-primary-500 truncate transition-all duration-300">
												{item.name}
											</p>
											<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300"></div>
										</div>
										<p className="line-clamp-2 mt-3">
											{item.desc}
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div id="resources" className="flex flex-col gap-10 py-24">
					<div className="flex flex-col gap-4">
						<p className="text-5xl font-semibold font-Open-sans capitalize">
							Resources
						</p>
						<div className="w-[12%] h-[4px] bg-primary-500" />
					</div>
					<div className="w-full grid grid-cols-4 gap-4">
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								1492
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								1492
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								1492
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
						<div className="w-full h-full aspect-square rounded-xl px-7 border flex flex-col gap-5 items-start justify-center group hover:border-primary-500 hover:shadow-[0_0_60px_0_rgba(0,0,0,.07)] transition-all duration-300">
							<p className="text-4xl font-bold group-hover:text-primary-500 transition-all duration-300">
								1492
							</p>
							<p>Laboratories in 100+ states</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Engagement;
