import React, { Component, useEffect, useState } from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';




const Footer = () => {

	const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen size and update the state
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 1080);
    };

    // Initial check when the component mounts
    checkScreenSize();

    // Add a listener to update the state when the window is resized
    window.addEventListener('resize', checkScreenSize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  return (
    <footer className={`footer-distributed ${isLargeScreen ? 'red-background' : ''}`}>

			<div className="footer-right">

				<a href="#"><i className="fa fa-facebook"><BiLogoFacebook /></i></a>
				<a href="#"><i className="fa fa-twitter"><BiLogoTwitter /></i></a>
				<a href="#"><i className="fa fa-linkedin"><BiLogoLinkedin /></i></a>
				<a href="#"><i className="fa fa-github"><BiLogoGithub /></i></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p>Company Name &copy; 2023</p>
			</div>

		</footer>
  );
};

export default Footer;