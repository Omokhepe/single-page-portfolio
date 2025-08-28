import React from 'react';
import {profileImg} from '../assets/images';
import './HeroSection.css'
import {projects, techStack} from "../constant/data.js";
import ContactForm from "../constant/ContactForm.jsx";

const HeroSection = () => {
    return (
        <div className="heroSection">
            <section>
                <div className='introSection'>
                    <div className=''>
                        <h2 className='textPresetXL'>Hi, <br/>I’m Omoh Imobu,</h2>
                        <h6 className='intro-text textPreset1Med'>a developer based in the Philippines. I enjoy building modern web applications that are fast, scalable, and user-friendly. Most of my work revolves around React, Next.js, and TypeScript, but I’m always exploring new tools and ways to make the web better. When I’m not coding, I’m usually learning something new, experimenting with design ideas, or improving projects I’ve already built.</h6>
                        <h5>contact me</h5>
                    </div>

                    {/*<Image src='/next.svg' alt='my image' />*/}
                    <img
                        // className="dark:invert"
                        src={profileImg}
                        alt="Next.js logo"
                        className='heroImage'
                        // width={180}
                        // height={38}
                        // priority
                    />
                </div>
            </section>

            <section>
                <div className='stack-section'>
                    {
                        techStack.map((item, index) => {
                            return (
                                <div key={index} className='stackList'>
                                    <h3 className='textPresetL'>{item.stack}</h3>
                                    <h6 className='textPreset1Med'>{item.years} Years Experience</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section>
                <div className='project-Section'>
                    <div className='project-subtitle'>
                        <h2>Project</h2>
                        <h5>Contact Mw</h5>
                    </div>
                    <div className='projectList'>
                        {
                            projects.map((item, index) => {
                                return (
                                    <div key={index} className='project-item'>
                                        <img src={item.image}
                                               alt={item.title}
                                             className='projectImage'
                                        />
                                        <p className='textPresetBold'>{(item.title).toUpperCase()}</p>
                                        <p>{item.language}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className='contact-Section'>
                    <div className='contact-subtitle'>
                        <h2 className='textPresetL'>Contact</h2>
                        <p className='textPreset1Med'>
                            I’d love to hear about your project and how I could help bring it to life. Whether you’re looking for a developer to build something from scratch or improve an existing app, I’m open to working together. Drop your details in the form below, and I’ll get back to you quickly.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>

        </div>

    );
};

export default HeroSection;