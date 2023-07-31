import React, { Component } from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';




const Footer = () => {
  return (
    <footer className="footer-distributed">

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