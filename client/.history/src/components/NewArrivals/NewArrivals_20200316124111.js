import React from 'react'

const newArrivals = (props) => {
    return (
        <div className="new_arrivals_agile_w3ls_info">
            <div className="container">
                <h3 className="wthree_text_info">New <span>Arrivals</span></h3>
                <div id="horizontalTab">
                    <ul className="resp-tabs-list">
                        <li> Men's</li>
                        <li> Women's</li>
                        <li> Bags</li>
                        <li> Footwear</li>
                    </ul>
                    <div className="resp-tabs-container">
                        <div className="tab1">
                           
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m8.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m8.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Party Men's Blazer</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$260.99</span>
                                            <del>$390.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Party Men's Blazer" />
                                                    <input type="hidden" name="amount" value="30.99" />
                                                    <input type="hidden" name="discount_amount" value="1.00" />
                                                    <input type="hidden" name="currency_code" value="USD" />
                                                    <input type="hidden" name="return" value=" " />
                                                    <input type="hidden" name="cancel_return" value=" " />
                                                    <input type="submit" name="submit" value="Add to cart" className="button" />
                                                </fieldset>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>


                    </div>
                </div>
            </div>
        </div>


    )
}

export default newArrivals