import React from "react";

const GridCards = ({ title, data, cols, bgColor, id }) => {
	const style = {
		backgroundColor: bgColor,
	};
	return (
		<div
			id={id ? id : ""}
			className={"w-full min-h-screen lg:py-24 py-20"}
			style={style}
		>
			<div className="lg:max-w-6xl w-full px-4 lg:px-0 mx-auto flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<p className="lg:text-5xl text-3xl font-semibold font-Open-sans">{title}</p>
					<div className="w-[12%] h-[4px] bg-primary-500" />
				</div>
				<div className={"grid " + (cols === "3" ? "lg:grid-cols-3" : "lg:grid-cols-2") + " md:grid-cols-2 grid-cols-1 gap-8"}>
					{/* {data.map((item, index) => (
						<div 
							key={index} 
							className="w-full min-h-[600px] max-h-[600px] group relative overflow-hidden border-b-4 border-primary-500"
							onClick={() => {
								if (title === "Research Projects") {
									window.location.href =
										"/project/project-scheme-" +
										(index + 1);
								}
							}}
						>
							<div className="w-full h-full overflow-hidden">
								<img
									src={item.image}
									alt=""
									className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
								/>
							</div>
							<div className="absolute -bottom-20 group-hover:bottom-0 left-0 w-full h-[30%] bg-[rgba(0,0,0,0.8)] flex flex-col justify-evenly px-8 text-white transition-all duration-300">
								<div className="flex flex-col gap-1">
									<p className="text-2xl font-semibold tracking-wide group-hover:text-primary-500 transition-all duration-300">
										{item.name}
									</p>
									<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300"></div>
								</div>
								<p className="line-clamp-2">
									{item.desc}
								</p>
							</div>
						</div>
					))} */}
					{data.map((item, index) => (
						<div
							key={index}
							className="w-full h-full lg:min-h-[550px] lg:max-h-[550px] group"
							onClick={() => {
								if (title === "Research Projects") {
									window.location.href = "/project/project-scheme-" + (index + 1);
								}
							}}
						>
							<div className="w-full h-96 overflow-hidden">
								<img
									src={item.image}
									alt=""
									className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
								/>
							</div>
							<div className="flex flex-col justify-evenly">
								<div className="flex flex-col gap-0.5 lg:mt-5 mt-3">
									<p className="lg:text-2xl text-xl font-semibold group-hover:text-primary-500 truncate transition-all duration-300">{item.name}</p>
									<div className="w-0 group-hover:w-[15%] h-[2px] bg-primary-500 transition-all duration-300"></div>
								</div>
								<p className="line-clamp-4 lg:mt-4 mt-3 text-xs lg:text-base">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GridCards;
