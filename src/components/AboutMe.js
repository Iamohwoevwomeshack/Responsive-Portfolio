import Footer from "./Footer";
import Header from './Header';
import myPicture from "../images/my_profile_pic.png";
import graphics2 from "../images/graphics-2.png";
import graphics from "../images/graphics.png";
import photoshop from "../images/photoshop.jpg";
import sidehustle from "../images/sidehustle.png";
import webdev from "../images/webdev.jpg";

function AboutMe(){
    return(
        <div>
            <Header/>
            <div className="aboutpage-container">
                <h3>About Me</h3>
                <p>The less i know, the more the world opens up wide and waiting
                This is how i know there are lots of possible opportunities
                every step of the way.
                </p>
                <h6>I took advantage.</h6>
            </div>

            <div className="aboutpage-content">
                <div className="aboutpage-content-heading">
                    <div className="aboutpage-content-heading-1">
                        <h3>FRONTEND WEB DEVELOPER, GRAPHICS DESIGNER, DIGITAL PAINTER</h3>
                        <p>It's been a long ride acquiring all these skills. I had to keep pushing with hopes of 
                        being better and becoming financially stable to provide for my needs and also help those around me.</p>
                    </div>
                    <div className="aboutpage-content-img"><img src={myPicture} alt="myPicture"/></div>
                </div>
                <div className="content-write-up">
                    <p>Growing up wasn't really fun for me. I was distracted with needs i couldn't get so i had to find a way because i couldn't steal (Kudos to my parents). At age 14, i started going out for local jobs such as mixing cement for buildings, fetching of water, arranging of blocks at construction sites, clearing farms for people etc. it wasn't a proud job but it was fetching me money until my parents found out. To be honest i had great parents, they felt i was too young for that kind of job so they had to stop me.</p>
                    <p>I wasn't really happy they stopped me because i already felt what it was like to earn your own mony. I couldn't go back to that job but i had to do something else, something new.  i went into art since i have passion for it though i novice in it. As a dummy in art i dare a friend of mine who i belive to be an artist that i could draw better than him; we picked a date and he gave me Chris Brown picture to draw and i did my best. To me it was a great work (it's so unfortunate that i don't have the art anymore). I and my friend started working together and did a couple of jobs together aswell. (We made samps, did sign writing, art works like drawing etc) but it wasn't enough for me; i wanted to do more.</p>
                    <p>I told my parents about learning graphics design and art which i started learning after finishing High School (Senior Secondary School). I learnt a lot from my boss including painting.
                    </p>
                    <p>When i got to the university, i made money with my skills but it wasn't easy being both a student and a hustler. As a Computer Science student, i didn't want to remain a graphics designer after learning about programming. it was interesting to see a friend of mine working from home and making good money. I approached my friend about my interest in programming and he was humble enough to explain to me and adviced me to learn frontend web development.
                    </p>
                    <p>Like the adage "the journey of a thousand miles begins with a single step: the journey began Feb 2022. I started learning from youtube videos and for Hamoye and Zuri online intership to learn more. After four months i had to buy a course on udemy because learning all by myself was getting more difficult than i expected, i needed to understant the rudiment of web development: learn from scratch.
                    </p>
                    <p>I bought a React JS course on udemy and got a certificate of completion. I also got another React JS certificate from a website called sidehustle (https://internship.sidehustle.ng)</p>
                    <p>Thanks of Reading</p>
                </div>
            </div>

            <div className="aboutpage-certificate-main">
                <div className="aboutpage-certificate-container">
                    <h1 className="aboutpage-certification">My Certificates</h1>
                    <div className="aboutpage-certificate">
                        <img src={webdev} alt="certificate"/>
                        <img src={sidehustle} alt="certificate"/>
                        <img src={graphics2} alt="certificate"/>
                        <img src={photoshop} alt="certificate"/>
                        <img src={graphics} alt="certificate"/>
                    </div>
                </div>
                <div className="contact-container">
                    <h3>Contact Me</h3>
                    <form action="https://formsubmit.co/ohwoevwomeshack@gmail.com" method="POST" className="computer-science-form" >
                        <label>Full Name</label>
                        <input type="text" name="Name" placeholder="Name"/>
                        <label>Email</label>
                        <input type="text" name="Email" placeholder="Name"/>
                        <label>Message</label>
                        <textarea name="Message" cols="30" rows="5" placeholder="Message..."></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default AboutMe;