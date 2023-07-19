import hero from "../images/HeroBkg.jpeg"
import bkg1 from "../images/bkg-1.jpg";
import bkg4 from "../images/bkg-4.jpg";
import bkg5 from "../images/bkg-5.jpg";
import bkg2 from "../images/bkg-2.jpg";
import bkg3 from "../images/bkg-3.jpg";
import Carousel1 from "./Carousel1";
import { hobbyData } from './hobbydata';
import Footer from "./Footer";
import Header from './Header';

function Homepage(){
    return(
        <div className="homepage">
            <Header/>
            <div className="homepage-hero-bkg">
            <img src={hero} alt="img"></img>
            </div>
            
            <div className="homepage-hero">            
                <p>Hi, I'm Meshack</p>
                <h3>Explore my Website I'm in for Hire</h3>
                <button><a href="/about">EXPLORE</a></button>
            </div>

            <div>
                <Carousel1/>
            </div>

            <div className="homepage-grid-container">
            <div className="homepage-grid">
                <div className="work-from-home">
                <img src={bkg1} alt="bkg1" className="grid-image-one"/>
                <p>WORK FROM <span className="style-home">HOME</span></p>
                </div>
                <div>
                    <div className="top-grid">
                        <img src={bkg4} alt="bkg4"/>
                        <h3>REWARDS</h3>
                        <p>DO MORE, GET MORE.</p>
                    </div>
                    <div className="buttom-grid">
                    <img src={bkg5} alt="bkg5"/>
                    <p>I'm one call away.</p>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="hidden-grid">
                <div className="top-grid-1">
                        <img src={bkg3} alt="bkg3" id="grid-image-two"/>
                        <h3>REWARDS</h3>
                        <p>DO MORE, GET MORE.</p>
                </div>
                <div className="top-grid-2">
                        <img src={bkg2} alt="bkg2" id="grid-image-three"/>
                        <p>I'm one call away.</p>
                </div>
                </div>

            <div className="homepage-efficiency">
                <h6><a href="/about">ABOUT</a></h6>
                <h3>Born from Efficiency.</h3>
                <p>Sure enough to Win.</p>
                <div><button><a href="/about">Learn More</a></button></div>
            </div>

            <div className="hobbies-container">
                <p>Hobbies</p>
                <div className="hobbies-container-1">
                    {hobbyData.map((item) => (
                        <div className="hobby-data-container-p">
                            <div className="hobby-data-container">
                                <img src={item.linkImg} alt={item.title}/>
                            </div>
                        <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="interest-remote">
                <div className="interest-remote-container">
                    <img src="https://cdn.shopify.com/s/files/1/1520/4366/files/Screen_Shot_2021-01-13_at_9.02.05_AM_1024x.png?v=1614392579" alt="remote"/>
                    <div>
                        <h3>Remote</h3>
                        <p>I'm interested in a Remote Job Frontend Dev</p>
                        <div className="remote-link"><a href="/about">Explore...</a></div>
                    </div>
                </div>
            </div>

            <div className="press-container">
                <h3> IN THE PRESS</h3>
                <p><span className="press-color">" </span>I am proficient and put in effort to everything i do. Hire me and you will be proud and boastful<span className="press-color"> "</span></p>
                <h6>family'shome</h6>
            </div>

            <div className="homepage-pictures">
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/1520/4366/files/2022_01_11_img5_768x768@2x.jpg?v=1648675522" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/1520/4366/files/2022_02_03_img4_768x768@2x.jpg?v=1648675008" alt=""/>
                </div>
                <div className="homepage-pictures-buttom">
                    <img src="https://cdn.shopify.com/s/files/1/1520/4366/files/2022_02_03_img3_rev1_768x768@2x.jpg?v=1648665675" alt=""/>
                    <img src="https://cdn.shopify.com/s/files/1/1520/4366/files/2022_01_20_img4_768x768@2x.jpg?v=1648665998" alt=""/>
                </div>
            </div>

            <div className="get-to-know-me">
                <p>Get to know me.</p>
                <div className="get-to-know-me-signup">
                <input type="email" placeholder="Email address" />
                <button><a href="/#">Sign up</a></button>
                </div>
                
            </div>

            <Footer/>
        </div>
    )
}

export default Homepage;