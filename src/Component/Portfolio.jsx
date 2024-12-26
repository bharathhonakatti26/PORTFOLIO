'use client'
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from 'sweetalert2'
import './Portfolio.css';
import './Responsive_Portfolio.css';
import Hand_shake from '../assets/Hand_shake.svg';
import Bharath from '../assets/Bharath_photo_4.jpg';
import Bharath_logo from '../assets/BH_logo1.png';
import { RiGithubLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import Project from "./Project";
import ProjectModal from './ProjectModal';

// Project Password Generator images
import image1 from '../assets/Project_Images/password_generator/image1.png';
import image2 from '../assets/Project_Images/password_generator/image2.png';
import image3 from '../assets/Project_Images/password_generator/image3.png';

// Project Book My Movie images
import image4 from '../assets/Project_Images/Book_My_Movie/image1.png';
import image5 from '../assets/Project_Images/Book_My_Movie/image2.png';
import image6 from '../assets/Project_Images/Book_My_Movie/image3.png';
import image7 from '../assets/Project_Images/Book_My_Movie/image4.png';

// Project WEB DEVELOPMENT STUDIO images
import image8 from '../assets/Project_Images/WEB-DEVELOPMENT-STUDIO/image1.png';
import image9 from '../assets/Project_Images/WEB-DEVELOPMENT-STUDIO/image2.png';
import image10 from '../assets/Project_Images/WEB-DEVELOPMENT-STUDIO/image3.png';
import image11 from '../assets/Project_Images/WEB-DEVELOPMENT-STUDIO/image4.png';

// Project Encryption and Decryption images
import image12 from '../assets/Project_Images/Encryption-and-Decryption-System/image1.png';
import image13 from '../assets/Project_Images/Encryption-and-Decryption-System/image2.png';
import image14 from '../assets/Project_Images/Encryption-and-Decryption-System/image3.png';

// Project Event Calendar Application images
import image15 from '../assets/Project_Images/Event-Calendar-Application/image1.png';
import image16 from '../assets/Project_Images/Event-Calendar-Application/image2.png';

const Portfolio = () => {
    const [isShaking, setIsShaking] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            setIsSticky(window.scrollY > 400);

            const sections = document.querySelectorAll("[id]");
            let currentSection = "home";

            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (Math.abs(scrollPosition - pageHeight) < 50) {
                currentSection = "contact";
            } else {
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop - 50;
                    const sectionHeight = section.offsetHeight;

                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        currentSection = section.getAttribute("id");
                    }
                });
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const [selectedProject, setSelectedProject] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    const projects = [
        {
            image: image1,
            images: [image1, image2, image3],
            title: "Password Generator and Strength Analyzer",
            description: "This project is a Python-based application that provides users with two main....",
            fullDescription: "This project is a Python-based application that provides users with two main functionalities: generating secure passwords and analyzing the strength of those passwords. The application utilizes the Tkinter library for its graphical user interface (GUI), allowing for an interactive user experience.",
            Technologies_Used: ["Python", " Tkinter (for GUI)", " Random and String libraries", " Tkinter (for GUI)", " Tkinter (for GUI)"],
            github_link: "https://github.com/bharathhonakatti26/PASSWORD-GENERATER-PYTHON",
            live_link: "",
        },
        {
            image: image4,
            images: [image4, image5, image6, image7],
            title: "Book My Movie - Online Movie Ticket Booking",
            description: "The Book My Movie project is an innovative online movie ticket booking system....",
            fullDescription: "The Book My Movie project is an innovative online movie ticket booking system designed to enhance the user experience for movie enthusiasts. This project showcases my ability to develop a fully functional application that integrates user-friendly interfaces with robust backend functionalities.",
            Technologies_Used: ["C Programming", , "User Input Validation", "File Handling", "standard libraries for efficient data management", "user interaction"],
            github_link: "https://github.com/bharathhonakatti26/BOOK-MY-MOVIE",
            live_link: "",
        },
        {
            image: image1,
            images: [image1, image2, image3],
            title: "Password Generator and Strength Analyzer",
            description: "This project is a Python-based application that provides users with two main....",
            fullDescription: "This project is a Python-based application that provides users with two main functionalities: generating secure passwords and analyzing the strength of those passwords. The application utilizes the Tkinter library for its graphical user interface (GUI), allowing for an interactive user experience.",
            Technologies_Used: ["Python", " Tkinter (for GUI)", " Random and String libraries", " Tkinter (for GUI)", " Tkinter (for GUI)"],
            github_link: "https://github.com/bharathhonakatti26/PASSWORD-GENERATER-PYTHON",
            live_link: "",
        },
        {
            image: image8,
            images: [image8, image9, image10, image11],
            title: "Web Development Studio",
            description: "This project is a web development endeavor that showcases the use of HTML and ....",
            fullDescription: "This project is a web development initiative that showcases the use of HTML5 and CSS to create a structured and visually appealing website. By leveraging the features of HTML5, the project emphasizes semantic markup, improving accessibility and SEO. The incorporation of responsive design principles ensures that the website provides a consistent user experience across various devices. Overall, this project serves as a practical demonstration of front-end development skills, focusing on layout, design, and user interaction.",
            Technologies_Used: ["HTML5", "CSS"],
            github_link: "https://github.com/bharathhonakatti26/WEB-DEVELOPMENT-STUDIO",
            live_link: "https://bharathhonakatti26.github.io/WEB-DEVELOPMENT-STUDIO/",
        },
        {
            image: image12,
            images: [image12, image13, image14],
            title: "Encryption and Decryption System",
            description: "This project is based on encryption and decryption system implemented in C....",
            fullDescription: "This project is a simple command-line based encryption and decryption system implemented in C. It allows users to create encrypted files, edit existing encrypted files, and decrypt files to retrieve the original text. The system uses random file naming for the encrypted files, ensuring a unique identifier for each file created.",
            Technologies_Used: ["C Programming", "File Handling", "Data Security", "User Input Validation", "Binary EncoEncoding"],
            github_link: "https://github.com/bharathhonakatti26/ENCRYPTION-AND-DECRYPTION",
            live_link: "",
        },
        {
            image: image15,
            images: [image15, image16],
            title: "Event Calendar Application",
            description: "The Dynamic Calendar Application is a modern web application designed to help users manage their events efficiently. Built with React and Vite....",
            fullDescription: "The Dynamic Calendar Application is a modern web application designed to help users manage their events efficiently. Built with React and Vite, it features a user-friendly interface and robust event management capabilities. The application allows users to create, edit, and delete events while ensuring a seamless experience across various devices.",
            Technologies_Used: ["React", "JavaScript", "React Hooks", "Local Storage", "Vite", "Responsive Design", "Frontend Development", "User Interface Design", "Application Development"],
            github_link: "https://github.com/bharathhonakatti26/Event-Calendar-Application",
            live_link: "https://bharathhonakatti26.github.io/Event-Calendar-Application/",
        },
    ];

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append('access_key', '8276e737-fb07-4daf-9e81-37e3fa42e226');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {

                Swal.fire({
                    title: "Success!",
                    text: "Message Send Successfully!",
                    icon: "success"
                });

                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });

            }
            else {
                console.error('Form submission failed:', res);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.home-navbar');
            const menu = document.querySelector('.home-navbar-links.open');
            const toggleButton = document.querySelector('.home-navbar-menu-toggle');
            if (menu &&
                !menu.contains(event.target) &&
                !toggleButton.contains(event.target) &&
                !navbar.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <main>
                <div className="portfolio-container">
                    <section id="home" className="home">
                        <div className="home-container">
                            <div className="home-text-container">
                                <div className="greeting-container">
                                    <p className="greeting">Hey, there</p>
                                    <img
                                        src={Hand_shake}
                                        alt="Hand_shake"
                                        className={`hand_shake ${isShaking ? 'animate' : ''}`}
                                    />
                                </div>
                                <div className="delayed-text">
                                    <div className="name-container">
                                        <h1 data-aos="fade-right" data-aos-delay="2000" className="font">I'm</h1>
                                        <h1 className="font name">
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2150">B</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2200">h</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2250">a</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2300">r</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2350">a</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2400">t</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2450">h</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2500" style={{ marginLeft: '10px' }}>H</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2550">o</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2600">n</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2650">a</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2700">k</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2750">a</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2800">t</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2850">t</p>
                                            <p className="h1-color" data-aos="fade-up" data-aos-delay="2900">i</p>
                                        </h1>
                                    </div>
                                    <h1 data-aos="fade-right" data-aos-delay="3000" className="font i-like-to-code">Computer Science Student</h1>
                                    <p data-aos="fade-right" data-aos-delay="3000" className="description-container font">
                                        Focused on building intuitive user experiences that drive growth through innovative design and scalable solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="image-container" >
                                <img src={Bharath} alt="Bharath Honakatti" data-aos="fade-left" data-aos-delay="2500" className="image-container" />
                            </div>
                        </div>
                        <div data-aos="fade-up" className={`home-navbar ${isSticky ? "sticky" : ""}`}>
                            <div className="home-navbar-logo">
                                <img src={Bharath_logo} alt="Bharath Honakatti" />
                            </div>
                            {/* Desktop Navigation */}
                            <div className="home-navbar-links">
                                <a href="#home" className={`home-navbar-links-item ${activeSection === "home" ? "active" : ""}`}>
                                    Home
                                </a>
                                <a href="#about" className={`home-navbar-links-item ${activeSection === "about" ? "active" : ""}`}>
                                    About
                                </a>
                                <a href="#project" className={`home-navbar-links-item ${activeSection === "project" ? "active" : ""}`}>
                                    Projects
                                </a>
                                <a href="#contact" className={`home-navbar-links-item ${activeSection === "contact" ? "active" : ""}`}>
                                    Contact
                                </a>
                            </div>
                            {/* Desktop Social Icons */}
                            <div className="home-navbar-links-icons">
                                <a href="https://github.com/bharathhonakatti26" target="_blank" rel="noopener noreferrer" className="home-navbar-links-sub-icons">
                                    <RiGithubLine className="home-navbar-links-icons-item" />
                                </a>
                                <a href="https://www.linkedin.com/in/bharathhonakatti26/" target="_blank" rel="noopener noreferrer" className="home-navbar-links-sub-icons">
                                    <CiLinkedin className="home-navbar-links-icons-item" />
                                </a>
                                <a href="https://www.instagram.com/proxy_070/" target="_blank" rel="noopener noreferrer" className="home-navbar-links-sub-icons">
                                    <FaInstagram className="home-navbar-links-icons-item" />
                                </a>
                            </div>
                            {/* Mobile Menu Toggle */}
                            <div className="home-navbar-menu-toggle-container">
                                <div className="home-navbar-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    {isMenuOpen ? (
                                        <IoClose className="menu-toggle-icon" />
                                    ) : (
                                        <RiMenu3Line className="menu-toggle-icon" />
                                    )}
                                </div>
                                {/* Mobile Menu */}
                                <div className={`home-navbar-links ${isMenuOpen ? "open" : ""}`}>
                                    <a onClick={handleLinkClick} href="#home" className={`home-navbar-links-item ${activeSection === "home" ? "active" : ""}`}>
                                        Home
                                    </a>
                                    <a onClick={handleLinkClick} href="#about" className={`home-navbar-links-item ${activeSection === "about" ? "active" : ""}`}>
                                        About
                                    </a>
                                    <a onClick={handleLinkClick} href="#project" className={`home-navbar-links-item ${activeSection === "project" ? "active" : ""}`}>
                                        Projects
                                    </a>
                                    <a onClick={handleLinkClick} href="#contact" className={`home-navbar-links-item ${activeSection === "contact" ? "active" : ""}`}>
                                        Contact
                                    </a>

                                    {/* Mobile Social Icons */}
                                    <div className="home-navbar-links-icons">
                                        <a onClick={handleLinkClick} href="https://github.com/bharathhonakatti26" target="_blank" rel="noopener noreferrer" className="home-navbar-links-sub-icons">
                                            <RiGithubLine className="home-navbar-links-icons-item" />
                                        </a>
                                        <a onClick={handleLinkClick} href="https://www.linkedin.com/in/bharathhonakatti26/" target="_blank" rel="noopener noreferrer" className="home-navbar-links-sub-icons">
                                            <CiLinkedin className="home-navbar-links-icons-item" />
                                        </a>
                                        <a onClick={handleLinkClick} href="https://www.instagram.com/proxy_070/" target="_blank" rel="noopener noreferrer" className="home-navbar-links-sub-icons">
                                            <FaInstagram className="home-navbar-links-icons-item" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about">
                        <h2 className="about-heading">
                            {['A', 'b', 'o', 'u', 't', 'M', 'e'].map((letter, index) => (
                                <p
                                    key={index}
                                    data-aos="fade-right"
                                    data-aos-delay={40 + index * 10}
                                    style={letter === 'M' ? { marginLeft: '20px' } : {}}
                                >
                                    {letter}
                                </p>
                            ))}
                        </h2>

                        <div className="about-container">
                            <div className="about-text">
                                <p data-aos="fade-right" data-aos-delay="50" style={{ 'textAlign': 'left', 'paddingLeft': '20px' }}>👋 Hi, my name is <span style={{ color: '#5241ff' }}>Bharath Honakatti</span> ,</p>
                                <p data-aos="fade-right" data-aos-delay="100" >🎓 I am a second-year Computer Science Engineering student with a growing passion for technology and problem-solving.</p>
                                <p data-aos="fade-right" data-aos-delay="150" >💻 Currently honing my skills in programming, data structures, and algorithms, which are the foundations of computer science.</p>
                                <p data-aos="fade-right" data-aos-delay="200" >🌐 Exploring fields like web development, artificial intelligence, and cybersecurity, aiming to build practical knowledge and hands-on experience.</p>
                                <p data-aos="fade-right" data-aos-delay="300" data-aos-offset="30" >🚀 Ambitious about contributing to innovative projects that solve real-world problems and make a positive impact.</p>
                                <p data-aos="fade-right" data-aos-delay="350" data-aos-offset="30" >Wanna learn more? Here's <a href="">my résumè.</a></p>
                            </div>
                            <div className="about-skills">
                                <div>
                                    <h2 data-aos="fade-left" data-aos-delay="50">Programming Languages</h2>
                                    <p data-aos="fade-left" data-aos-delay="100">Python , C </p>
                                </div>
                                <div>
                                    <h2 data-aos="fade-left" data-aos-delay="200">Web Development</h2>
                                    <p data-aos="fade-left" data-aos-delay="250">HTML5, CSS3, JavaScript, Reactjs , Next.js, React Query, React Hook Form , Expressjs </p>
                                </div>
                                <div>
                                    <h2 data-aos="fade-left" data-aos-delay="350">Database</h2>
                                    <p data-aos="fade-left" data-aos-delay="400">MongoDB , MySQL</p>
                                </div>
                                <div>
                                    <h2 data-aos="fade-left" data-aos-delay="500">Operating Systems</h2>
                                    <p data-aos="fade-left" data-aos-delay="550">Windows , Linux</p>
                                </div>
                                <div>
                                    <h2 data-aos="fade-left" data-aos-delay="650" data-aos-offset="30">Tools</h2>
                                    <p data-aos="fade-left" data-aos-delay="700" data-aos-offset="30">Git/GitHub , Postman , Figma , Canva</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="project" className="projects">
                        <h2 className="project-heading">
                            {['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((letter, index) => (
                                <p
                                    key={index}
                                    data-aos="fade-right"
                                    data-aos-delay={40 + index * 10}
                                >
                                    {letter}
                                </p>
                            ))}
                        </h2>
                        <div className="total-project-layer">
                            <div className="projects-layer" data-aos="flip-left">
                                {projects.slice(0, 3).map((project, index) => (
                                    <div className="zoomout" key={index} onClick={() => handleOpenModal(project)}>
                                        <Project
                                            image={project.image}
                                            title={project.title}
                                            description={project.description}
                                        />
                                    </div>
                                ))}
                            </div>
                            {showAll && (
                                <div className="projects-layer" data-aos="flip-right">
                                    {projects.slice(3).map((project, index) => (
                                        <div className="zoomout" key={index + 3} onClick={() => handleOpenModal(project)}>
                                            <Project
                                                image={project.image}
                                                title={project.title}
                                                description={project.description}
                                            />
                                        </div>
                                    ))}
                                    {/* If u need to add something like Explore my all project  */}
                                </div>
                            )}
                            <div className="show-more-container" data-aos="fade-up" data-aos-once="true" data-aos-offset="10">
                                <button className="show-more-button" onClick={handleShowMore}>
                                    {showAll ? "Show Less" : "Show More"}
                                </button>
                            </div>
                        </div>
                    </section>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={handleCloseModal}
                        />
                    )}
                    <section id="contact" className="contact">
                        <div className="contact-container">
                            {!showForm ? (
                                <>
                                    <h2>
                                        <div className="align-flex">
                                            <p data-aos="fade-right" data-aos-delay="50">G</p>
                                            <p data-aos="fade-right" data-aos-delay="100">o</p>
                                            <p data-aos="fade-right" data-aos-delay="150">t</p>
                                        </div>
                                        <div>
                                            <p data-aos="fade-right" data-aos-delay="200" style={{ marginLeft: '10px' }} >a</p>
                                        </div>
                                        <div className="align-flex">
                                            <p data-aos="fade-right" data-aos-delay="250" style={{ marginLeft: '10px' }}>P</p>
                                            <p data-aos="fade-right" data-aos-delay="300">r</p>
                                            <p data-aos="fade-right" data-aos-delay="350">o</p>
                                            <p data-aos="fade-right" data-aos-delay="400">j</p>
                                            <p data-aos="fade-right" data-aos-delay="450">e</p>
                                            <p data-aos="fade-right" data-aos-delay="500">c</p>
                                            <p data-aos="fade-right" data-aos-delay="550">t</p>
                                        </div>
                                        <div className="align-flex">
                                            <p data-aos="fade-right" data-aos-delay="600" style={{ marginLeft: '10px' }}>i</p>
                                            <p data-aos="fade-right" data-aos-delay="650">n</p>
                                        </div>
                                        <div className="align-flex">
                                            <p data-aos="fade-right" data-aos-delay="700" style={{ marginLeft: '10px' }}>M</p>
                                            <p data-aos="fade-right" data-aos-delay="750">i</p>
                                            <p data-aos="fade-right" data-aos-delay="800">n</p>
                                            <p data-aos="fade-right" data-aos-delay="850">d</p>
                                        </div>
                                        <p data-aos="fade-right" data-aos-delay="900">?</p>
                                    </h2>
                                    <button data-aos="flip-right" className="contact-button" onClick={handleButtonClick}>
                                        Contact Me
                                    </button>
                                </>
                            ) : (
                                <div className={`form-container ${showForm ? "show" : ""}`}>
                                    <div className="close-button" onClick={handleButtonClick}><IoClose className="close-icon" /></div>
                                    <div data-aos="flip-left" data-aos-offset="-223" data-aos-once="true">
                                        <form className="contact-form" onSubmit={onSubmit}>
                                            <label htmlFor="name">Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                            <label htmlFor="email">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />

                                            <button type="submit" className="submit-button">
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    <section id="footer" className="footer" data-aos="flip-down" data-aos-offset="10">
                        <div className="footer-items">
                            <p className="footer-text-size">© 2025 . BHARATH HONAKATTI . ALL RIGHTS RESERVED</p>
                            <a href="#home" className="footer-text-size"><FaArrowUp className="footer-icon" />SCROLL TO TOP</a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Portfolio;
