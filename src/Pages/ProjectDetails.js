import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
	const { project } = useParams();

	return (
		<div className="w-full min-h-screen bg-[#F1f1F1] py-20 px-4 lg:px-0">
			<div className="max-w-6xl h-full mx-auto py-20">
				<div className="flex flex-col lg:gap-4 gap-2">
					<p className="lg:text-5xl text-3xl font-semibold font-Open-sans capitalize">{project.replaceAll("-", " ")}</p>
					<div className="lg:w-[12%] w-[30%] h-[4px] bg-primary-500" />
				</div>
				<div className="flex flex-col gap-7">
					<div className="lg:mt-14 mt-8 w-full h-[400px] max-h-[400px] rounded-xl overflow-hidden">
						<img
							src="https://www.sydney.edu.au/content/dam/health-and-wellness/wellbeing-programs/man-on-treadmill.jpg/jcr:content/renditions/cq5dam.web.440.248.2x.jpeg"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col lg:gap-7 gap-5">
						<div className="flex flex-col gap-4">
							<p className="text-3xl font-semibold font-Open-sans">Background</p>
							<div className="md:w-[10%] w-[30%] h-[4px] bg-primary-500" />
						</div>
						<p className="text-justify lg:text-left">
							To ensure European independence and leadership in
							AI, and to unite a fragmented community, the AI4EU
							project sought to build a comprehensive European
							AI-on-demand platform to lower barriers to
							innovation, to boost technology transfer and
							catalyse the growth of start-ups and SMEs in all
							sectors.
						</p>
						<p className="text-justify lg:text-left">
							The challenge was to mobilise the broader AI
							Community to support and enrich the European
							AI-on-demand platform by sharing resources and
							success stories and using it as a tool to develop
							new research and innovations in AI.
						</p>
						<p className="text-justify lg:text-left">
							The project aimed to develop an AI on-demand
							platform that would act as a broker and one-stop
							shop providing and showcasing services, expertise,
							algorithms, software frameworks, development tools,
							components, modules, data, computing resources,
							prototyping functions, and access to funding. Built
							upon and interoperable with existing AI and data
							components and platforms, AI4EU sought to mobilise
							the whole European AI ecosystem of researchers and
							innovators and showcase leading scientific
							discoveries and technological innovations in AI.
						</p>
					</div>
					<div className="flex flex-col lg:gap-7 gap-5">
						<div className="flex flex-col gap-4">
							<p className="text-3xl font-semibold font-Open-sans">OUTCOME</p>
							<div className="md:w-[10%] w-[30%] h-[4px] bg-primary-500" />
						</div>
						<p className="text-justify lg:text-left">
							Insight led the transformation of the platform in
							the direction of an open development model,
							facilitating the bootstrapping of the technical
							development by the AI research community. This model
							provided transparency in the development roadmap and
							opened the platform to respond to the needs of
							target stakeholders.
						</p>
						<p className="text-justify lg:text-left">
							The AI-on-demand platform continues to represent a
							landmark initiative of the European Commission’s AI
							Research and Innovation Strategy. The AI4EU project
							developed the first iteration of the platform, and
							it continues to advance through the support of other
							funded projects, among them the €9m project
							AI4Europe, coordinated by Insight@UCC.
						</p>
						<p className="text-justify lg:text-left">
							Through the work initiated in AI4EU, the platform is
							now positioned to transform into a community-led
							initiative enriched for and by the European AI
							community. Over the forthcoming years, the
							expectation is that the platform will come to
							represent a core pillar of the research and
							innovation community, allowing researchers to
							experiment and test new solutions and for SMEs and
							public bodies to easily access and exploit the very
							best in AI research being undertaken in Europe.
						</p>
					</div>
					<div className="flex flex-col lg:gap-7 gap-5">
						<div className="flex flex-col gap-4">
							<p className="text-3xl font-semibold font-Open-sans">IMPACT</p>
							<div className="md:w-[8%] w-[30%] h-[4px] bg-primary-500" />
						</div>
						<p className="text-justify lg:text-left">
							The project established a minimum viable product of
							the on-demand platform that can further be developed
							and exploited by both Europe’s AI research community
							and SME/Public bodies seeking to integrate AI
							solutions. It continues to be supported by the EC
							and multiple connected projects and initiatives.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
