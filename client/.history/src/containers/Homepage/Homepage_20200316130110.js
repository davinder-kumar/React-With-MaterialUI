import React, { Fragment } from 'react'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Coupons from '../../components/Coupons/Coupons'
const Homepage = () => {
    return (
        <div>

            <div className="banner_bottom_agile_info">

                <div className="container">
                    <div className="banner_bottom_agile_info_inner_w3ls">
                        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                            <figure className="effect-roxy">
                                <img src={require("../../assets/images/bottom1.jpg")} alt=" " className="img-responsive" />
                                <figcaption>
                                    <h3><span>F</span>all Ahead</h3>
                                    <p>New Arrivals</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                            <figure className="effect-roxy">
                                <img src={require("../../assets/images/bottom2.jpg")} alt=" " className="img-responsive" />
                                <figcaption>
                                    <h3><span>F</span>all Ahead</h3>
                                    <p>New Arrivals</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>


            <div className="schedule-bottom">
                <div className="col-md-6 agileinfo_schedule_bottom_left">
                    <img src={require("../../assets/images/mid.jpg")} alt=" " className="img-responsive" />
                </div>
                <div className="col-md-6 agileits_schedule_bottom_right">
                    <div className="w3ls_schedule_bottom_right_grid">
                        <h3>Save up to <span>50%</span> in this week</h3>
                        <p>Suspendisse varius turpis efficitur erat laoreet dapibus.
					Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
                        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <h4>Customers</h4>
                            <h5 className="counter">653</h5>
                        </div>
                        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            <h4>Events</h4>
                            <h5 className="counter">823</h5>
                        </div>
                        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                            <i className="fa fa-shield" aria-hidden="true"></i>
                            <h4>Awards</h4>
                            <h5 className="counter">45</h5>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>




            <div className="banner-bootom-w3-agileits">
                <div className="container">
                    <h3 className="wthree_text_info">What's <span>Trending</span></h3>

                    <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
                        <a href="womens.html">
                            <div className="bb-left-agileits-w3layouts-inner grid">
                                <figure className="effect-roxy">
                                    <img src={require("../../assets/images/bb1.jpg")} alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3><span>S</span>ale </h3>
                                        <p>Upto 55%</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
                        <a href="mens.html">
                            <div className="bb-middle-agileits-w3layouts grid">
                                <figure className="effect-roxy">
                                    <img src={require("../../assets/images/bottom3.jpg")} alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3><span>S</span>ale </h3>
                                        <p>Upto 55%</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </a>
                        <a href="mens.html">
                            <div className="bb-middle-agileits-w3layouts forth grid">
                                <figure className="effect-roxy">
                                    <img src={require("../../assets/images/bottom4.jpg")} alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3><span>S</span>ale </h3>
                                        <p>Upto 65%</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </a>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>


            <div className="agile_last_double_sectionw3ls">
                <div className="col-md-6 multi-gd-img multi-gd-text ">
                    <a href="womens.html"><img src={require("../../assets/images/bot_1.jpg")} alt=" " /><h4>Flat <span>50%</span> offer</h4></a>


                </div>
                <div className="col-md-6 multi-gd-img multi-gd-text ">
                    <a href="womens.html"><img src={require("../../assets/images/bot_2.jpg")} alt=" " /><h4>Flat <span>50%</span> offer</h4></a>
                </div>
                <div className="clearfix"></div>
            </div>
           
           
           <NewArrivals />
           

            <div className="sale-w3ls">
                <div className="container">
                    <h6>We Offer Flat <span>40%</span> Discount</h6>

                    <a className="hvr-outline-out button2" href="single.html">Shop Now </a>
                </div>
            </div>
            <Coupons />

        </div>

    )
}
export default Homepage