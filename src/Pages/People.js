import React, { useEffect, useState } from "react";

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

	const designation = ["All", "Senior Leadership", "Principal Investigator", "Co-Principal Investigator", "Research Fellows", "Research Interns"];

	const peoplesList = [
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
			designation: "Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Co-Principal Investigator",
			email: "Co-Principal Investigator",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Co-Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Co-Principal Investigator",
			email: "Co-Principal Investigator",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Co-Principal Investigator",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Co-Principal Investigator",
			email: "Co-Principal Investigator",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Research Fellows",
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
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Research Interns",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Female",
			designation: "Research Interns",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			name: "John Doe",
			age: 30,
			gender: "Male",
			designation: "Research Interns",
			email: "johndoe@example.com",
			degree: "Phd in Artificial Intelligence, Phd in Machine Learning, Masters in Data Science",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
		},
	];

	const [currDesignation, setCurrDesignation] = useState("All");
	
	const peoples = peoplesList.filter(filterDesignation);

	function filterDesignation(people) {
		if (people.designation === currDesignation || currDesignation === "All") {
			return people;
		}
	}

	return (
		<div className="flex flex-col items-center mb-16 w-full font-Open-sans pt-10">
			{/* <div className="fixed w-screen h-screen top-0 left-0 bg-blob -z-0" /> */}
			{/* <div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://exe-coll.ac.uk/wp-content/uploads/2021/11/CMI-header.png')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">People</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div> */}
			<div className="flex flex-col items-start md:items-center max-w-6xl mx-auto w-full pt-16 pb-4">
				<ul className="flex items-center justify-center flex-wrap gap-4">
					{designation.map((des, i) => (
						<li
							key={i}
							onClick={() => setCurrDesignation(des)}
							className={`p-2 px-4 text-lg font-medium font-Inter rounded-lg transition-colors duration-300 cursor-pointer hover:bg-primary-200 ${
								currDesignation === des
									? "bg-primary-200 text-primary-800"
									: ""
							} `}
						>
							{des}
						</li>
					))}
				</ul>
				<h1 className="text-4xl leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-2/3 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Our Team
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
					{peoples.map((people, index) => (
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
			{/* <div
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
					Principal Investigator
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
					Co-Principal Investigators
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
					Research Fellows
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
			</div> */}
		</div>
	);
};

export default People;
