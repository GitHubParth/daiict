import React from 'react'

const WorkWithUs = () => {

    const researchFellowData = [
        {
            title: "Research Assistant – Program synthesis Data Science Institute/Insight SFI Research Centre for Data Analytics",
            posted_on: "24 JULY 2024",
            closes_on: "15 AUGUST 2024",
            location: "Gandhinagar"
        },
        {
            title: "Postdoctoral Researcher/Research Associate – Program synthesis Data Science Institute/Insight SFI Research Centre for Data Analytics",
            posted_on: "24 JULY 2024",
            closes_on: "15 AUGUST 2024",
            location: "Gandhinagar"
        },
        {
            title: "Research Assistant – Program synthesis Data Science Institute/Insight SFI Research Centre for Data Analytics",
            posted_on: "24 JULY 2024",
            closes_on: "15 AUGUST 2024",
            location: "Gandhinagar"
        },
        {
            title: "Postdoctoral Researcher – ATU-IoT-Collaboration-Project Insight SFI Research Centre for Data Analytics",
            posted_on: "24 JULY 2024",
            closes_on: "15 AUGUST 2024",
            location: "Gandhinagar"
        },
    ]

	return (
		<div className="w-full font-Open-sans pt-10">
			{/* <div className="w-full h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=1080&lazy=load')] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-end border-b-4 border-primary-500">
				<div className="py-20 max-w-6xl mx-auto flex flex-col gap-8">
					<p className="text-6xl italic font-Nunito">Work With Us</p>
					<div className="h-[5px] w-[12%] bg-primary-500"></div>
					<p className="text-2xl font-normal leading-10 w-[50%]">
						Our researchers are tackling the world’s greatest
						problems, from creating a more sustainable world to
						developing new treatments for chronic diseases.
					</p>
				</div>
			</div> */}
            {/* <h1 className="w-full max-w-6xl mx-auto text-7xl font-bold mt-20 pt-20 text-primary-600">Work With Us</h1> */}
			<div id="research-fellows" className="max-w-6xl w-full h-full mx-auto md:pt-14 lg:px-0 md:px-12 sm:px-10 px-8">
                <h1 className="text-4xl w-full leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-32 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Research Fellows
				</h1>
                <div className="w-full last:border-b last:border-gray-400">
                    { researchFellowData.map((item, idx) => {
                        return (
                            <div className="w-full border-t border-gray-400 py-4 md:px-3" key={idx}>
                                <h2 className="md:text-2xl text-xl cursor-pointer transition-all duration-300 hover:text-primary-700">{item.title}</h2>
                                <div className="w-full text-sm mt-4 flex md:flex-row flex-col md:items-center items-start justify-between gap-4">
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Posted :<span className="text-black font-normal">{item.posted_on}</span></p>
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Closes :<span className="text-black font-normal">{item.closes_on}</span></p>
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Location :<span className="text-black font-normal">{item.location}</span></p>
                                </div>
                            </div>
                        )}) 
                    }
                </div>
			</div>
			<div id="project-interns" className="max-w-6xl w-full h-full mx-auto md:pt-14 pt-12 lg:px-0 md:px-12 sm:px-10 px-8">
                <h1 className="text-4xl w-full leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-32 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Project Interns
				</h1>
                <div className="w-full last:border-b last:border-gray-400">
                    { researchFellowData.map((item, idx) => {
                        return (
                            <div className="w-full border-t border-gray-400 py-4 md:px-3" key={idx}>
                                <h2 className="md:text-2xl text-xl cursor-pointer transition-all duration-300 hover:text-primary-700">{item.title}</h2>
                                <div className="w-full text-sm mt-4 flex md:flex-row flex-col md:items-center items-start justify-between gap-4">
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Posted :<span className="text-black font-normal">{item.posted_on}</span></p>
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Closes :<span className="text-black font-normal">{item.closes_on}</span></p>
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Location :<span className="text-black font-normal">{item.location}</span></p>
                                </div>
                            </div>
                        )}) 
                    }
                </div>
			</div>
			<div id="staff" className="max-w-6xl w-full h-full mx-auto md:pt-14 pt-12 mb-20 lg:px-0 md:px-12 sm:px-10 px-8">
                <h1 className="text-4xl w-full leading-tight sm:leading-normal sm:text-5xl font-bold mt-7 mb-10 md:mb-14 relative before:w-12 before:absolute before:h-1 before:bg-primary-500 before:-bottom-3 before:left-1">
					Staff
				</h1>
                <div className="w-full last:border-b last:border-gray-400">
                    { researchFellowData.map((item, idx) => {
                        return (
                            <div className="w-full border-t border-gray-400 py-4 md:px-3" key={idx}>
                                <h2 className="md:text-2xl text-xl cursor-pointer transition-all duration-300 hover:text-primary-700">{item.title}</h2>
                                <div className="w-full text-sm mt-4 flex md:flex-row flex-col md:items-center items-start justify-between gap-4">
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Posted :<span className="text-black font-normal">{item.posted_on}</span></p>
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Closes :<span className="text-black font-normal">{item.closes_on}</span></p>
                                    <p className="font-medium text-primary-600 flex items-center gap-1">Location :<span className="text-black font-normal">{item.location}</span></p>
                                </div>
                            </div>
                        )}) 
                    }
                </div>
			</div>
		</div>
	)
}

export default WorkWithUs