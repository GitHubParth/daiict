import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import People from "./Pages/People";
import ProjectDetails from "./Pages/ProjectDetails";
import AboutUs from "./Pages/AboutUs";
import Engagement from "./Pages/Engagement";
import WorkWithUs from "./Pages/WorkWithUs"
import ContactUs from "./Pages/ContactUs";

const App = () => {
	return (
        <Router>
			<Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/:role" element={<People />} />
                <Route path="/project/:project" element={<ProjectDetails />} />
                <Route path="/engagement" element={<Engagement />} />
                <Route path="/work-with-us" element={<WorkWithUs />} />
                <Route path="/work-with-us/:role" element={<WorkWithUs />} />
                <Route path="*" element={<h1 className="py-[7.25rem] mt-20 text-primary-600 text-center text-6xl font-bold font-Open-sans">Page not found</h1>} />
            </Routes>
			<Footer />
        </Router>
    );
};

export default App;
