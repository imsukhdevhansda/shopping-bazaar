import React from 'react'
import style from "./Footer.module.css";
import GImage from "../../assets/google_play.png"
import AImage from "../../assets/apple_store.png"
import {RiSendPlanFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'


const Footer = () => {
  return (        
    <div className={style.footer}>
        <div className={style.footer_box}>
            <div className={style.footer_box_onlineShopping}>
                <h4>Online Shipping</h4>
            <ul>
                <li><Link>Men</Link></li>
                <li><Link>Women</Link></li>
                <li><Link>Kids</Link></li>
                <li><Link>Home & LIving</Link></li>
                <li><Link>Beauty</Link></li>
                <li><Link>Gift Cards</Link></li>
                <li><Link>Myntra Insider</Link></li>

            </ul>
            <div>
                <h4>USEFUL LINKS</h4>
                <ul>
                    <li><Link>Blog</Link></li>
                    <li><Link>Careers</Link></li>
                    <li><Link>Site Map</Link></li>
                    <li><Link>Corporate Information</Link></li>
                    <li><Link>Whitehat</Link></li>


                </ul>

            </div>

            </div>
            <div className={style.footer_box_customerPolicy}>
                <h4>Customer Policy</h4>
            <ul>
                <li><Link>Men</Link></li>
                <li><Link>Women</Link></li>
                <li><Link>Kids</Link></li>
                <li><Link>Home & LIving</Link></li>
                <li><Link>Beauty</Link></li>
                <li><Link>Gift Cards</Link></li>
                <li><Link>Myntra Insider</Link></li>

            </ul>

            </div>
            <div className={style.footer_box_icons}>
                <h4>EXPERIENCE MYNTRA</h4>
                {/* <img src={GImage} alt='gimage'/>
                <img src={AImage} alt='aimage'/> */}
                <img src={GImage} alt="" />
                 <img src={AImage} alt="" />
                <div className={style.icons}>
                    <h4>KEEP IN TOUCH</h4>
                    <Link><FaFacebookSquare/></Link>
                    <Link><FaTwitterSquare/></Link>
                    <Link><FaYoutubeSquare/></Link>
                    <Link><FaInstagramSquare/></Link>
                </div>
            </div>
            <div className={style.footer_box_original}>
                <h2>100% Original </h2>
                <h2>return within 30 days</h2>
            </div>


        </div>
    </div>
  )
}

export default Footer
