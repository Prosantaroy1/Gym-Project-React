import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='mt-16 bg-[#120f1b] font-fontIbm text-white rounded-t-3xl'>
            <footer className="footer container mx-auto py-32   p-10">
                <aside>
                    <h3 className='text-4xl pb-3 font-bold'>Brother  <span className='text-rose-600'>GYM</span></h3>
                    <p className='w-96 text-xl'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.
                    </p>
                    <div className='flex items-center pt-5 gap-5'>
                      <a href="#"><FaFacebook className='text-4xl'/></a>
                      <a href="#"><FaInstagram className='text-4xl'/></a>
                      <a href="#"><FaTwitter className='text-4xl'/></a>
                     <a href="#"> <IoLogoYoutube className='text-4xl'/></a>
                    </div>
                </aside>
                {/* important link */}
                <nav>
                    <h6 className="text-3xl font-semibold text-white pb-4">Important Links</h6>
                    <a href='#' className="link hover:no-underline text-xl link-hover">Home</a>
                    <a href='#' className="link hover:no-underline text-xl link-hover">About</a>
                    <a href='#' className="link hover:no-underline text-xl link-hover">Contact</a>
                    <a href='#' className="link hover:no-underline text-xl link-hover">Blog</a>
                </nav>
                <nav>
                    <h6 className="font-semibold text-3xl pb-4 text-white">Company link</h6>
                    <a href='#' className="link hover:no-underline  text-xl link-hover">About us</a>
                    <a href='#' className="link hover:no-underline  text-xl link-hover">Contact</a>
                    <a href='#' className="link hover:no-underline  text-xl link-hover">Jobs</a>
                    <a href='#' className="link hover:no-underline  text-xl link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="font-semibold pb-4 text-3xl text-white">Legal</h6>
                    <a href='#' className="link hover:no-underline  text-xl link-hover">Terms of use</a>
                    <a href='#' className="link hover:no-underline  text-xl link-hover">Privacy policy</a>
                    <a href='#' className="link hover:no-underline  text-xl link-hover">Cookie policy</a>
                </nav>
            </footer>
            {/* copyright */}
            <footer className="footer footer-center border-t-4 container mx-auto border-spacing-y-5 p-4">
                <aside>
                    <p className='text-xl pt-8'>Copyright © {new Date().getFullYear()} - All right reserved by Brother GYM</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;