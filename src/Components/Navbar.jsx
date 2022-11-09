import React from 'react'
import Logo from "../assets/logo-myntra-41466.png";
import { Link } from "react-router-dom";
import './Navbar.css';
import "./all.css";

const Navbar = () => {
  return (
    <div className="header">
        <div className="container">
            <div className='row v-center'>
                <div className='header-item item-left'>
                     <div className='logo'>
                        <img src={Logo} alt="logo" className="logo_img" />
                     </div>
                </div>
                {/* Menu Start here */}
                <div className='header-item item-center'>
                    <nav className='menu'>
                       <ul>
                           <li className='menu-item-has-children'>
                               <Link to='/men' className="">MEN</Link>
                               <div className='sub-menu mega-menu-column-5'>
                                <div className='list-item'>
                                    <h4 className='title'>Topwear</h4>
                                    <ul>
                                        <li><Link>T-Shirts</Link></li>
                                        <li><Link>Casual Shirts</Link></li>
                                        <li><Link>Formal Shirts</Link></li>
                                        <li><Link>Sweatshirts</Link></li>
                                        <li><Link>Sweaters</Link></li>
                                        <li><Link>Jackets</Link></li>
                                        <li><Link>Blazers & Coats</Link></li>
                                        <li><Link>Suits</Link></li>
                                        <li><Link>Rain Jackets</Link></li>
                                    </ul>
                                    <h4 className='title'>Indian & Festive Wear</h4>
                                    <ul>
                                        <li><Link>Kurtas & Kurta Sets </Link></li>
                                        <li><Link>Sherwanis</Link></li>
                                        <li><Link>Nehru jackets</Link></li>
                                        <li><Link>Dhotis</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Bottomwear</h4>
                                    <ul>
                                        <li><Link>Jeans</Link></li>
                                        <li><Link>Casual Trousers</Link></li>
                                        <li><Link>Formal Trousers</Link></li>
                                        <li><Link>Shorts</Link></li>
                                        <li><Link>Track Pants & Joggers</Link></li>
                                        <li><Link>Jackets</Link></li>                                       
                                    </ul>
                                    <h4 className='title'>Indian & Sleep Wear</h4>
                                    <ul>
                                        <li><Link>Briefs & Trunks </Link></li>
                                        <li><Link>Boxers</Link></li>
                                        <li><Link>Vests</Link></li>
                                        <li><Link>Sleepwears & Loungewears</Link></li>
                                        <li><Link>Thermals</Link></li>
                                    </ul>
                                    <h4 className='title'>Plus Sizes</h4>
                                </div>

                                <div className='list-item'>
                                    <h4 className='title'>Footwear</h4>
                                    <ul>
                                       
                                        <li><Link>Casual Shoes</Link></li>
                                        <li><Link>Formal Shoes</Link></li>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sneakers</Link></li>
                                        <li><Link>Sandals & Flotters</Link></li>
                                        <li><Link>Flip Flops</Link></li>
                                        <li><Link>Socks</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Personal Care & Groomings</h4>
                                    <h4 className='title'>Sunglasses & Frames</h4>
                                    <h4 className='title'>Watches</h4>
                                    
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Sports and Active wear</h4>
                                    <ul>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sports Sandals</Link></li>
                                        <li><Link>Active T-Shirts</Link></li>
                                        <li><Link>Track Pants & Shorts</Link></li>
                                        <li><Link>Tracksuits</Link></li>
                                        <li><Link>Jackets & Sweatshirts</Link></li>
                                        <li><Link>Sports Accessories</Link></li>
                                        <li><Link>Swimwears</Link></li>
                                       
                                    </ul>
                                    <h4 className='title'>Gadgets</h4>
                                    <ul>
                                        <li><Link>Smart Wearables</Link></li>
                                        <li><Link>Fitness Gadgets</Link></li>
                                        <li><Link>Headphones</Link></li>
                                        <li><Link>Speakers</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                <h4 className='title'>Fashion Accessories</h4>
                                <ul>
                                        <li><Link>Wallets</Link></li>
                                        <li><Link>Belts</Link></li>
                                        <li><Link>Perfumes & Body Mist</Link></li>
                                        <li><Link>Trimmers</Link></li>
                                        <li><Link>Deodrants</Link></li>
                                        <li><Link>Ties, Cufflinks & Pockets Squares</Link></li>
                                        <li><Link>Accessories Gift Sets</Link></li>
                                        <li><Link>Caps & Hats</Link></li>
                                        <li><Link>Mufflers, Scaves & Gloves</Link></li>
                                        <li><Link>Phone Cases</Link></li>
                                        <li><Link>Rings & Wristwears</Link></li>
                                        <li><Link>Helmets</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Bags & Bagpacks</h4>
                                    <ul>
                                        <li><Link>Luggages & Trolleys</Link></li>
                                                                              
                                    </ul>
                                </div>                     

                               </div>
                               
                           </li>
                           <li className='menu-item-has-children'>
                               <Link to='/women' className="">WOMEN </Link>
                               <div className='sub-menu mega-menu-column-5'>
                               <div className='list-item'>
                                    <h4 className='title'>Topwear</h4>
                                    <ul>
                                        <li><Link>T-Shirts</Link></li>
                                        <li><Link>Casual Shirts</Link></li>
                                        <li><Link>Formal Shirts</Link></li>
                                        <li><Link>Sweatshirts</Link></li>
                                        <li><Link>Sweaters</Link></li>
                                        <li><Link>Jackets</Link></li>
                                        <li><Link>Blazers & Coats</Link></li>
                                        <li><Link>Suits</Link></li>
                                        <li><Link>Rain Jackets</Link></li>
                                    </ul>
                                    <h4 className='title'>Indian & Festive Wear</h4>
                                    <ul>
                                        <li><Link>Kurtas & Kurta Sets </Link></li>
                                        <li><Link>Sherwanis</Link></li>
                                        <li><Link>Nehru jackets</Link></li>
                                        <li><Link>Dhotis</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Bottomwear</h4>
                                    <ul>
                                        <li><Link>Jeans</Link></li>
                                        <li><Link>Casual Trousers</Link></li>
                                        <li><Link>Formal Trousers</Link></li>
                                        <li><Link>Shorts</Link></li>
                                        <li><Link>Track Pants & Joggers</Link></li>
                                        <li><Link>Jackets</Link></li>                                       
                                    </ul>
                                    <h4 className='title'>Indian & Sleep Wear</h4>
                                    <ul>
                                        <li><Link>Briefs & Trunks </Link></li>
                                        <li><Link>Boxers</Link></li>
                                        <li><Link>Vests</Link></li>
                                        <li><Link>Sleepwears & Loungewears</Link></li>
                                        <li><Link>Thermals</Link></li>
                                    </ul>
                                    <h4 className='title'>Plus Sizes</h4>
                                </div>

                                <div className='list-item'>
                                    <h4 className='title'>Footwear</h4>
                                    <ul>
                                       
                                        <li><Link>Casual Shoes</Link></li>
                                        <li><Link>Formal Shoes</Link></li>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sneakers</Link></li>
                                        <li><Link>Sandals & Flotters</Link></li>
                                        <li><Link>Flip Flops</Link></li>
                                        <li><Link>Socks</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Personal Care & Groomings</h4>
                                    <h4 className='title'>Sunglasses & Frames</h4>
                                    <h4 className='title'>Watches</h4>
                                    
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Sports and Active wear</h4>
                                    <ul>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sports Sandals</Link></li>
                                        <li><Link>Active T-Shirts</Link></li>
                                        <li><Link>Track Pants & Shorts</Link></li>
                                        <li><Link>Tracksuits</Link></li>
                                        <li><Link>Jackets & Sweatshirts</Link></li>
                                        <li><Link>Sports Accessories</Link></li>
                                        <li><Link>Swimwears</Link></li>
                                       
                                    </ul>
                                    <h4 className='title'>Gadgets</h4>
                                    <ul>
                                        <li><Link>Smart Wearables</Link></li>
                                        <li><Link>Fitness Gadgets</Link></li>
                                        <li><Link>Headphones</Link></li>
                                        <li><Link>Speakers</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                <h4 className='title'>Fashion Accessories</h4>
                                <ul>
                                        <li><Link>Wallets</Link></li>
                                        <li><Link>Belts</Link></li>
                                        <li><Link>Perfumes & Body Mist</Link></li>
                                        <li><Link>Trimmers</Link></li>
                                        <li><Link>Deodrants</Link></li>
                                        <li><Link>Ties, Cufflinks & Pockets Squares</Link></li>
                                        <li><Link>Accessories Gift Sets</Link></li>
                                        <li><Link>Caps & Hats</Link></li>
                                        <li><Link>Mufflers, Scaves & Gloves</Link></li>
                                        <li><Link>Phone Cases</Link></li>
                                        <li><Link>Rings & Wristwears</Link></li>
                                        <li><Link>Helmets</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Bags & Bagpacks</h4>
                                    <ul>
                                        <li><Link>Luggages & Trolleys</Link></li>                                                                              
                                    </ul>
                                </div>              

                               </div>

                           </li>

                           <li className='menu-item-has-children'>
                               <Link to='/kids' className="">KIDS</Link>
                               <div className='sub-menu mega-menu-column-5'>
                               <div className='list-item'>
                                    <h4 className='title'>Topwear</h4>
                                    <ul>
                                        <li><Link>T-Shirts</Link></li>
                                        <li><Link>Casual Shirts</Link></li>
                                        <li><Link>Formal Shirts</Link></li>
                                        <li><Link>Sweatshirts</Link></li>
                                        <li><Link>Sweaters</Link></li>
                                        <li><Link>Jackets</Link></li>
                                        <li><Link>Blazers & Coats</Link></li>
                                        <li><Link>Suits</Link></li>
                                        <li><Link>Rain Jackets</Link></li>
                                    </ul>
                                    <h4 className='title'>Indian & Festive Wear</h4>
                                    <ul>
                                        <li><Link>Kurtas & Kurta Sets </Link></li>
                                        <li><Link>Sherwanis</Link></li>
                                        <li><Link>Nehru jackets</Link></li>
                                        <li><Link>Dhotis</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Bottomwear</h4>
                                    <ul>
                                        <li><Link>Jeans</Link></li>
                                        <li><Link>Casual Trousers</Link></li>
                                        <li><Link>Formal Trousers</Link></li>
                                        <li><Link>Shorts</Link></li>
                                        <li><Link>Track Pants & Joggers</Link></li>
                                        <li><Link>Jackets</Link></li>                                       
                                    </ul>
                                    <h4 className='title'>Indian & Sleep Wear</h4>
                                    <ul>
                                        <li><Link>Briefs & Trunks </Link></li>
                                        <li><Link>Boxers</Link></li>
                                        <li><Link>Vests</Link></li>
                                        <li><Link>Sleepwears & Loungewears</Link></li>
                                        <li><Link>Thermals</Link></li>
                                    </ul>
                                    <h4 className='title'>Plus Sizes</h4>
                                </div>

                                <div className='list-item'>
                                    <h4 className='title'>Footwear</h4>
                                    <ul>
                                       
                                        <li><Link>Casual Shoes</Link></li>
                                        <li><Link>Formal Shoes</Link></li>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sneakers</Link></li>
                                        <li><Link>Sandals & Flotters</Link></li>
                                        <li><Link>Flip Flops</Link></li>
                                        <li><Link>Socks</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Personal Care & Groomings</h4>
                                    <h4 className='title'>Sunglasses & Frames</h4>
                                    <h4 className='title'>Watches</h4>
                                    
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Sports and Active wear</h4>
                                    <ul>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sports Sandals</Link></li>
                                        <li><Link>Active T-Shirts</Link></li>
                                        <li><Link>Track Pants & Shorts</Link></li>
                                        <li><Link>Tracksuits</Link></li>
                                        <li><Link>Jackets & Sweatshirts</Link></li>
                                        <li><Link>Sports Accessories</Link></li>
                                        <li><Link>Swimwears</Link></li>
                                       
                                    </ul>
                                    <h4 className='title'>Gadgets</h4>
                                    <ul>
                                        <li><Link>Smart Wearables</Link></li>
                                        <li><Link>Fitness Gadgets</Link></li>
                                        <li><Link>Headphones</Link></li>
                                        <li><Link>Speakers</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                <h4 className='title'>Fashion Accessories</h4>
                                <ul>
                                        <li><Link>Wallets</Link></li>
                                        <li><Link>Belts</Link></li>
                                        <li><Link>Perfumes & Body Mist</Link></li>
                                        <li><Link>Trimmers</Link></li>
                                        <li><Link>Deodrants</Link></li>
                                        <li><Link>Ties, Cufflinks & Pockets Squares</Link></li>
                                        <li><Link>Accessories Gift Sets</Link></li>
                                        <li><Link>Caps & Hats</Link></li>
                                        <li><Link>Mufflers, Scaves & Gloves</Link></li>
                                        <li><Link>Phone Cases</Link></li>
                                        <li><Link>Rings & Wristwears</Link></li>
                                        <li><Link>Helmets</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Bags & Bagpacks</h4>
                                    <ul>
                                        <li><Link>Luggages & Trolleys</Link></li>                                                                              
                                    </ul>
                                </div>
                                
                               </div>
                               
                           </li>

                           <li className='menu-item-has-children'>
                               <Link to='/homeandliving' className="">HOME & LIVING</Link>
                               <div className='sub-menu mega-menu-column-5'>
                               <div className='list-item'>
                                    <h4 className='title'>Topwear</h4>
                                    <ul>
                                        <li><Link>T-Shirts</Link></li>
                                        <li><Link>Casual Shirts</Link></li>
                                        <li><Link>Formal Shirts</Link></li>
                                        <li><Link>Sweatshirts</Link></li>
                                        <li><Link>Sweaters</Link></li>
                                        <li><Link>Jackets</Link></li>
                                        <li><Link>Blazers & Coats</Link></li>
                                        <li><Link>Suits</Link></li>
                                        <li><Link>Rain Jackets</Link></li>
                                    </ul>
                                    <h4 className='title'>Indian & Festive Wear</h4>
                                    <ul>
                                        <li><Link>Kurtas & Kurta Sets </Link></li>
                                        <li><Link>Sherwanis</Link></li>
                                        <li><Link>Nehru jackets</Link></li>
                                        <li><Link>Dhotis</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Bottomwear</h4>
                                    <ul>
                                        <li><Link>Jeans</Link></li>
                                        <li><Link>Casual Trousers</Link></li>
                                        <li><Link>Formal Trousers</Link></li>
                                        <li><Link>Shorts</Link></li>
                                        <li><Link>Track Pants & Joggers</Link></li>
                                        <li><Link>Jackets</Link></li>                                       
                                    </ul>
                                    <h4 className='title'>Indian & Sleep Wear</h4>
                                    <ul>
                                        <li><Link>Briefs & Trunks </Link></li>
                                        <li><Link>Boxers</Link></li>
                                        <li><Link>Vests</Link></li>
                                        <li><Link>Sleepwears & Loungewears</Link></li>
                                        <li><Link>Thermals</Link></li>
                                    </ul>
                                    <h4 className='title'>Plus Sizes</h4>
                                </div>

                                <div className='list-item'>
                                    <h4 className='title'>Footwear</h4>
                                    <ul>
                                       
                                        <li><Link>Casual Shoes</Link></li>
                                        <li><Link>Formal Shoes</Link></li>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sneakers</Link></li>
                                        <li><Link>Sandals & Flotters</Link></li>
                                        <li><Link>Flip Flops</Link></li>
                                        <li><Link>Socks</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Personal Care & Groomings</h4>
                                    <h4 className='title'>Sunglasses & Frames</h4>
                                    <h4 className='title'>Watches</h4>
                                    
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Sports and Active wear</h4>
                                    <ul>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sports Sandals</Link></li>
                                        <li><Link>Active T-Shirts</Link></li>
                                        <li><Link>Track Pants & Shorts</Link></li>
                                        <li><Link>Tracksuits</Link></li>
                                        <li><Link>Jackets & Sweatshirts</Link></li>
                                        <li><Link>Sports Accessories</Link></li>
                                        <li><Link>Swimwears</Link></li>
                                       
                                    </ul>
                                    <h4 className='title'>Gadgets</h4>
                                    <ul>
                                        <li><Link>Smart Wearables</Link></li>
                                        <li><Link>Fitness Gadgets</Link></li>
                                        <li><Link>Headphones</Link></li>
                                        <li><Link>Speakers</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                <h4 className='title'>Fashion Accessories</h4>
                                <ul>
                                        <li><Link>Wallets</Link></li>
                                        <li><Link>Belts</Link></li>
                                        <li><Link>Perfumes & Body Mist</Link></li>
                                        <li><Link>Trimmers</Link></li>
                                        <li><Link>Deodrants</Link></li>
                                        <li><Link>Ties, Cufflinks & Pockets Squares</Link></li>
                                        <li><Link>Accessories Gift Sets</Link></li>
                                        <li><Link>Caps & Hats</Link></li>
                                        <li><Link>Mufflers, Scaves & Gloves</Link></li>
                                        <li><Link>Phone Cases</Link></li>
                                        <li><Link>Rings & Wristwears</Link></li>
                                        <li><Link>Helmets</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Bags & Bagpacks</h4>
                                    <ul>
                                        <li><Link>Luggages & Trolleys</Link></li>                                                                              
                                    </ul>
                                </div>
                                
                               </div>
                           </li>
                           <li className='menu-item-has-children'>
                               <Link to='/beuty' className="">BEAUTY</Link>
                               <div className='sub-menu mega-menu-column-5'>
                               <div className='list-item'>
                                    <h4 className='title'>Topwear</h4>
                                    <ul>
                                        <li><Link>T-Shirts</Link></li>
                                        <li><Link>Casual Shirts</Link></li>
                                        <li><Link>Formal Shirts</Link></li>
                                        <li><Link>Sweatshirts</Link></li>
                                        <li><Link>Sweaters</Link></li>
                                        <li><Link>Jackets</Link></li>
                                        <li><Link>Blazers & Coats</Link></li>
                                        <li><Link>Suits</Link></li>
                                        <li><Link>Rain Jackets</Link></li>
                                    </ul>
                                    <h4 className='title'>Indian & Festive Wear</h4>
                                    <ul>
                                        <li><Link>Kurtas & Kurta Sets </Link></li>
                                        <li><Link>Sherwanis</Link></li>
                                        <li><Link>Nehru jackets</Link></li>
                                        <li><Link>Dhotis</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Bottomwear</h4>
                                    <ul>
                                        <li><Link>Jeans</Link></li>
                                        <li><Link>Casual Trousers</Link></li>
                                        <li><Link>Formal Trousers</Link></li>
                                        <li><Link>Shorts</Link></li>
                                        <li><Link>Track Pants & Joggers</Link></li>
                                        <li><Link>Jackets</Link></li>                                       
                                    </ul>
                                    <h4 className='title'>Indian & Sleep Wear</h4>
                                    <ul>
                                        <li><Link>Briefs & Trunks </Link></li>
                                        <li><Link>Boxers</Link></li>
                                        <li><Link>Vests</Link></li>
                                        <li><Link>Sleepwears & Loungewears</Link></li>
                                        <li><Link>Thermals</Link></li>
                                    </ul>
                                    <h4 className='title'>Plus Sizes</h4>
                                </div>

                                <div className='list-item'>
                                    <h4 className='title'>Footwear</h4>
                                    <ul>
                                       
                                        <li><Link>Casual Shoes</Link></li>
                                        <li><Link>Formal Shoes</Link></li>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sneakers</Link></li>
                                        <li><Link>Sandals & Flotters</Link></li>
                                        <li><Link>Flip Flops</Link></li>
                                        <li><Link>Socks</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Personal Care & Groomings</h4>
                                    <h4 className='title'>Sunglasses & Frames</h4>
                                    <h4 className='title'>Watches</h4>
                                    
                                </div>
                                <div className='list-item'>
                                    <h4 className='title'>Sports and Active wear</h4>
                                    <ul>
                                        <li><Link>Sport Shoes</Link></li>
                                        <li><Link>Sports Sandals</Link></li>
                                        <li><Link>Active T-Shirts</Link></li>
                                        <li><Link>Track Pants & Shorts</Link></li>
                                        <li><Link>Tracksuits</Link></li>
                                        <li><Link>Jackets & Sweatshirts</Link></li>
                                        <li><Link>Sports Accessories</Link></li>
                                        <li><Link>Swimwears</Link></li>
                                       
                                    </ul>
                                    <h4 className='title'>Gadgets</h4>
                                    <ul>
                                        <li><Link>Smart Wearables</Link></li>
                                        <li><Link>Fitness Gadgets</Link></li>
                                        <li><Link>Headphones</Link></li>
                                        <li><Link>Speakers</Link></li>                                        
                                    </ul>
                                </div>
                                <div className='list-item'>
                                <h4 className='title'>Fashion Accessories</h4>
                                <ul>
                                        <li><Link>Wallets</Link></li>
                                        <li><Link>Belts</Link></li>
                                        <li><Link>Perfumes & Body Mist</Link></li>
                                        <li><Link>Trimmers</Link></li>
                                        <li><Link>Deodrants</Link></li>
                                        <li><Link>Ties, Cufflinks & Pockets Squares</Link></li>
                                        <li><Link>Accessories Gift Sets</Link></li>
                                        <li><Link>Caps & Hats</Link></li>
                                        <li><Link>Mufflers, Scaves & Gloves</Link></li>
                                        <li><Link>Phone Cases</Link></li>
                                        <li><Link>Rings & Wristwears</Link></li>
                                        <li><Link>Helmets</Link></li>
                                        
                                    </ul>
                                    <h4 className='title'>Bags & Bagpacks</h4>
                                    <ul>
                                        <li><Link>Luggages & Trolleys</Link></li>                                                                              
                                    </ul>
                                </div>
                                
                               </div>
                           </li>
                           <li className='menu-item-has-children'>
                               <Link to='/studio' className="">STUDIO</Link>
                               <div className='sub-menu single-column-menu'>
                                <ul>
                                    <li><Link>Standard Layout</Link></li>
                                    <li><Link>Grid Layout</Link></li>
                                    <li><Link>Single Layout</Link></li>
                                </ul>
                               </div>
                           </li>
                       </ul>

                       
                    </nav>
                </div>
                {/* Menu ends here */}
                <button><Link><i className='fas fa-search'></i></Link></button>
                <input placeholder='Search for product,brand and more'  className='search-bar'/>

                <div className='header-item item-right'>
                                        

                        <Link to=""><i className='fa-solid fa-user'></i></Link>
                        <Link to=""><i className='far fa-heart'></i></Link>
                        <Link to=""><i className='fas fa-shopping-bag'></i></Link>
                </div>

            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar