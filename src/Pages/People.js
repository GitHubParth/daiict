import React, { useEffect } from "react";

const People = () => {
	useEffect(() => {              
		const href = window.location.href.substring(
			window.location.href.lastIndexOf("#") + 1
		);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const peoples = [
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Project Leads",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Project Leads",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Project Leads",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Project Collaboration",
			email: "Project Collaboration",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Project Collaboration",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Project Collaboration",
			email: "Project Collaboration",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Project Collaboration",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Project Collaboration",
			email: "Project Collaboration",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Research Fellow",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Senior Leadership",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
	];

	const seniorLeadership = peoples.filter(
		(people) => people.designation === "Senior Leadership"
	);
	const projectLeads = peoples.filter(
		(people) => people.designation === "Project Leads"
	);
	const projectCollaborations = peoples.filter(
		(people) => people.designation === "Project Collaboration"
	);
	const researchFellow = peoples.filter(
		(people) => people.designation === "Research Fellow"
	);

	return (
		<div className="flex flex-col items-center mb-16 mt-12 px-8 w-full font-Open-sans">
			<div
				id="senior-leadership"
				className="flex flex-col items-start md:items-center max-w-6xl mx-auto w-full pt-16 pb-4"
			>
				<h1 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-2/3 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Senior Leadership
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
					{seniorLeadership.map((people, index) => (
						<div
							className="w-full flex relative group rounded-xl overflow-hidden"
							key={index}
						>
							<div className="w-full h-1 bg-primary-500 absolute bottom-0 left-0 z-10" />
							<img
								src={people.image}
								alt={people.name}
								className="w-96 h-80 object-cover"
							/>
							<div className="w-full text-white absolute bottom-0 group-hover:h-48 group-hover:py-5 transition-all duration-300 h-20 flex flex-col items-start justify-start gap-1 py-3 px-5 bg-[rgba(0,0,0,0.8)]">
								<h1 className="text-xl font-bold text-white">
									{people.name}
								</h1>
								<p className="mb-5">{people.designation}</p>
								<p>{people.degree}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div
				id="project-leads"
				className="flex flex-col items-start md:items-center max-w-6xl mx-auto w-full pt-16 pb-4"
			>
				<h1 className=" text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-2/3 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Project Leads
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
					{projectLeads.map((people, index) => (
						<div
							className="w-full flex relative group rounded-xl overflow-hidden"
							key={index}
						>
							<div className="w-full h-1 bg-primary-500 absolute bottom-0 left-0 z-10" />
							<img
								src={people.image}
								alt={people.name}
								className="w-96 h-80 object-cover"
							/>
							<div className="w-full text-white absolute bottom-0 group-hover:h-48 group-hover:py-5 transition-all duration-300 h-20 flex flex-col items-start justify-start gap-1 py-3 px-5 bg-[rgba(0,0,0,0.8)]">
								<h1 className="text-xl font-bold text-white">
									{people.name}
								</h1>
								<p className="mb-5">{people.designation}</p>
								<p>{people.degree}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div
				id="project-collabs"
				className="flex flex-col items-start md:items-center max-w-6xl mx-auto w-full pt-16 pb-4"
			>
				<h1 className=" text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-2/3 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Project Collaborations
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
					{projectCollaborations.map((people, index) => (
						<div
							className="w-full flex relative group rounded-xl overflow-hidden"
							key={index}
						>
							<div className="w-full h-1 bg-primary-500 absolute bottom-0 left-0 z-10" />
							<img
								src={people.image}
								alt={people.name}
								className="w-96 h-80 object-cover"
							/>
							<div className="w-full text-white absolute bottom-0 group-hover:h-48 group-hover:py-5 transition-all duration-300 h-20 flex flex-col items-start justify-start gap-1 py-3 px-5 bg-[rgba(0,0,0,0.8)]">
								<h1 className="text-xl font-bold text-white">
									{people.name}
								</h1>
								<p className="mb-5">{people.designation}</p>
								<p>{people.degree}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div
				id="research-fellow"
				className="flex flex-col items-start md:items-center max-w-6xl mx-auto w-full pt-16 pb-4"
			>
				<h1 className=" text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-2/3 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Research Fellow
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
					{researchFellow.map((people, index) => (
						<div
							className="w-full flex relative group rounded-xl overflow-hidden"
							key={index}
						>
							<div className="w-full h-1 bg-primary-500 absolute bottom-0 left-0 z-10" />
							<img
								src={people.image}
								alt={people.name}
								className="w-96 h-80 object-cover"
							/>
							<div className="w-full text-white absolute bottom-0 group-hover:h-48 group-hover:py-5 transition-all duration-300 h-20 flex flex-col items-start justify-start gap-1 py-3 px-5 bg-[rgba(0,0,0,0.8)]">
								<h1 className="text-xl font-bold text-white">
									{people.name}
								</h1>
								<p className="mb-5">{people.designation}</p>
								<p>{people.degree}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default People;
