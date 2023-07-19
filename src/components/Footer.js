import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from "react-icons/fa"

function Footer(){

    const year = new Date().getFullYear();

    return(
        <div>
            <div className="footer">
                <div className="footer-icons">
                    <p>FAMIYLYSHOME</p>
                    <div>
                        <div><a href="https://web.facebook.com/meshack.ohwoevwo"><FaFacebookF className="footer-link-icon"/></a></div>
                        <div><a href="https://www.instagram.com/familys_home/"><FaInstagram className="footer-link-icon"/></a></div>
                        <div><a href="https://twitter.com/iamom1234"><FaTwitter className="footer-link-icon"/></a></div>
                        <div><a href="https://www.linkedin.com/in/ohwoevwo-meshack-1544121b5/"><FaLinkedinIn className="footer-link-icon"/></a></div>
                    </div>
                </div>
                <div className="footer-links-1">
                    <h3>DISCOVER</h3>
                    <div>
                        <a href="/about">About</a>
                        <a href="/#">Links</a>
                        <a href="/about">Certificate</a>
                    </div>
                </div>
                <div className="footer-links-2">
                        <h3>DISCOVER</h3>
                        <div>
                            <a href="/about">Contact Me</a>
                        </div>
                    </div>
            </div>
            <div className="footer-copyright">
                <p>© {year} familyshome, All right reserved</p>
                <p><a href="/#">Privacy Policy</a><a href="/#"> Accessibility</a><a href="/#"> Terms & Conditions</a><a href="/#"> C.A Transperency</a></p>
            </div>
        </div>
    )
}

export default Footer;