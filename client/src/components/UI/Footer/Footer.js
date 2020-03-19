import React from 'react'

const footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_agile_inner_info_w3l">
                    <div className="col-md-3 footer-left">
                        <h2><a href="index.html"><span>E</span>lite Shoppy </a></h2>
                        <p>Lorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora.</p>
                        <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
                            <li><a href="/" className="facebook">
                                <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                            <li><a href="/" className="twitter">
                                <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                            <li><a href="/" className="instagram">
                                <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                            <li><a href="/" className="pinterest">
                                <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                        </ul>
                    </div>
                    <div className="col-md-9 footer-right">
                        <div className="sign-grds">
                            <div className="col-md-4 sign-gd">
                                <h4>Our <span>Information</span> </h4>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="mens.html">Men's Wear</a></li>
                                    <li><a href="womens.html">Women's wear</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="typography.html">Short Codes</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>

                            <div className="col-md-5 sign-gd-two">
                                <h4>Store <span>Information</span></h4>
                                <div className="w3-address">
                                    <div className="w3-address-grid">
                                        <div className="w3-address-left">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </div>
                                        <div className="w3-address-right">
                                            <h6>Phone Number</h6>
                                            <p>+1 234 567 8901</p>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="w3-address-grid">
                                        <div className="w3-address-left">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </div>
                                        <div className="w3-address-right">
                                            <h6>Email Address</h6>
                                            <p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="w3-address-grid">
                                        <div className="w3-address-left">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div className="w3-address-right">
                                            <h6>Location</h6>
                                            <p>Broome St, NY 10002,California, USA.</p>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 sign-gd flickr-post">
                                <h4>Flickr <span>Posts</span></h4>
                                <ul>
                                    <li><a href="single.html"><img src="images/t1.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t3.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t4.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t1.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t3.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t2.jpg" alt=" " className="img-responsive" /></a></li>
                                    <li><a href="single.html"><img src="images/t4.jpg" alt=" " className="img-responsive" /></a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="agile_newsletter_footer">
                        <div className="col-sm-6 newsleft">
                            <h3>SIGN UP FOR NEWSLETTER !</h3>
                        </div>
                        <div className="col-sm-6 newsright">
                            <form action="/" method="post">
                                <input type="email" placeholder="Enter your email..." name="email" required="" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                    <p className="copy-right">&copy 2017 Elite shoppy. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
            </div>

            <div className="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-info">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body modal-spa">
                            <div className="login-grids">
                                <div className="login">
                                    <div className="login-bottom">
                                        <h3>Sign up for free</h3>
                                        <form>
                                            <div className="sign-up">
                                                <h4>Email :</h4>
                                                <input type="text" value="Type here" onFocus="this.value = '';" onBlur="if (this.value == '') {
                                                this.value = 'Type here';
                                            }" required="" />
                                            </div>
                                            <div className="sign-up">
                                                <h4>Password :</h4>
                                                <input type="password" value="Password" onFocus="this.value = '';" onBlur="if (this.value == '') {
                                                this.value = 'Password';}" required="" />

                                            </div>
                                            <div className="sign-up">
                                                <h4>Re-type Password :</h4>
                                                <input type="password" value="Password" onFocus="this.value = '';" onBlur="if (this.value == '') {
                                                this.value = 'Password';
                                            }" required="" />

                                            </div>
                                            <div className="sign-up">
                                                <input type="submit" value="REGISTER NOW" />
                                            </div>

                                        </form>
                                    </div>
                                    <div className="login-right">
                                        <h3>Sign in with your account</h3>
                                        <form>
                                            <div className="sign-in">
                                                <h4>Email :</h4>
                                                <input type="text" value="Type here" onFocus="this.value = '';" onBlur="if (this.value == '') {
                                                this.value = 'Type here';
                                            }" required="" />
                                            </div>
                                            <div className="sign-in">
                                                <h4>Password :</h4>
                                                <input type="password" value="Password" onFocus="this.value = '';" onBlur="if (this.value == '') {
                                                this.value = 'Password';
                                            }" required="" />
                                                <a href="/">Forgot password?</a>
                                            </div>
                                            <div className="single-bottom">
                                                <input type="checkbox" id="brand" value="" />
                                                <label for="brand"><span></span>Remember Me.</label>
                                            </div>
                                            <div className="sign-in">
                                                <input type="submit" value="SIGNIN" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <p>By logging in you agree to our <a href="/">Terms and Conditions</a> and <a href="/">Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/home" className="scroll" id="toTop" style={{ display: 'block'}}> <span id="toTopHover" style={{ opacity: "1"}} > </span></a>

        </>
    )
}

export default footer