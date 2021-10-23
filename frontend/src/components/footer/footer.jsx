import logo from './footer-logo.png';
import arrow from './arrow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Doctors, Patients } from './footerContent';
import './footer.css'

export default function Footer() {

    function FooterListLi(props) {
        return (
            <>
                <li><img src={arrow} className="arrow-svg" alt="" /><span>{props.content}</span></li>
            </>
        );
    }

    function FooterListUl(props) {
        return (
            <>
                <h2 class="footer-title">For {props.title}</h2>
                <ul className="footer-content-list">
                    {props.navItems.map(FooterListLi)}
                </ul>
            </>
        );
    }

    return (
        <>
            <footer className='Footer'>
                <div className='FooterTop'>
                    <div className='row'>
                        <div className='col'>
                            <img src={logo} className="logoImgFoot" alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul className="social-list-footer">
                                <li><FontAwesomeIcon icon={faFacebookF} className="social-icon-footer" /></li>
                                <li><FontAwesomeIcon icon={faTwitter} className="social-icon-footer" /></li>
                                <li><FontAwesomeIcon icon={faLinkedinIn} className="social-icon-footer" /></li>
                                <li><FontAwesomeIcon icon={faInstagram} className="social-icon-footer" /></li>
                                <li><FontAwesomeIcon icon={faDribbble} className="social-icon-footer" /></li>
                            </ul>
                        </div>
                        <div className='col'>
                            {Patients.map(FooterListUl)}
                        </div>
                        <div className='col'>
                            {Doctors.map(FooterListUl)}
                        </div>
                        <div className='col'>
                            <h2 class="footer-title">Contact Us</h2>
                            <ul className="footer-contact">
                                <li>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="social-icon-footer" />
                                    <p>3556 Beech Street, San Francisco,<br/>California, CA 94108</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} size="1x" className="social-icon-footer" />
                                    <p>+1 315 369 5943</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" className="social-icon-footer" />
                                    <p>doccure@example.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='FooterBottom'>
                    <div className='copyright'>
                        &copy; 2020 Doccure. All rights reserved.
                    </div>
                    <div className='policyContent'>
                        <div className="tnc">Terms and Conditions</div>
                        <span> | </span>
                        <div className="policy">Policy</div>
                    </div>
                </div>
            </footer>
        </>
    );
}