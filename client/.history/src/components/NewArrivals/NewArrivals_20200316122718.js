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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m1.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m1.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Formal Blue Shirt</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$45.99</span>
                                            <del>$69.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Formal Blue Shirt" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m1.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m2.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Gabi Full Sleeve Sweatshirt</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$45.99</span>
                                            <del>$69.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Sweatshirt" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m3.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m3.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Dark Blue Track Pants</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$80.99</span>
                                            <del>$89.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Dark Blue Track Pants" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m4.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m4.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Round Neck Black T-Shirt</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$190.99</span>
                                            <del>$159.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Black T-Shirt" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m5.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m5.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Men's Black Jeans</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$60.99</span>
                                            <del>$90.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Men's Black Jeans" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m7.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m7.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Analog Watch</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$160.99</span>
                                            <del>$290.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Analog Watch" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/m6.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/m6.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Reversible Belt</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$30.99</span>
                                            <del>$50.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Reversible Belt" />
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
                            <div className="col-md-3 product-men">
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
                        <div className="tab2">
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w1.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w1.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">A-line Black Skirt</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$130.99</span>
                                            <del>$189.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="A-line Black Skirt" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w2.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w2.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Sleeveless Solid Blue Top</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$140.99</span>
                                            <del>$189.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Sleeveless Solid Blue Top" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w3.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w3.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Skinny Jeans</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$150.99</span>
                                            <del>$189.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Skinny Jeans " />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w4.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w4.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Black Basic Shorts</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$120.99</span>
                                            <del>$189.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Black Basic Shorts" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w5.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w5.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Pink Track Pants</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$220.99</span>
                                            <del>$389.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Pink Track Pants" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w6.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w6.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Analog Watch</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$320.99</span>
                                            <del>$489.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Analog Watch" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w7.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w7.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Ankle Length Socks</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$100.99</span>
                                            <del>$159.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Ankle Length Socks" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/w8.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/w8.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Reebok Women's Tights</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$130.99</span>
                                            <del>$169.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Reebok Women's Tights" />
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
                        <div className="tab3">

                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b1.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b1.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Laptop Messenger Bag</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$140.99</span>
                                            <del>$169.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value=" Laptop Messenger Bag" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b2.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b2.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Puma Backpack</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$127.99</span>
                                            <del>$169.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Puma Backpack" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b3.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b3.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html"> Laptop Backpack</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$120.99</span>
                                            <del>$189.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value=" Laptop Backpack" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b4.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b4.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Travel Duffel Bag </a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$190.99</span>
                                            <del>$259.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Travel Duffel Bag " />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b5.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b5.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html"> Hand-held Bag </a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$190.99</span>
                                            <del>$259.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value=" Hand-held Bag " />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b6.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b6.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Butterflies Bag </a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$190.99</span>
                                            <del>$259.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Butterflies Bag" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b7.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b7.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Costa Swiss Bag </a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$290.99</span>
                                            <del>$359.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Costa Swiss Bag" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/b8.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/b8.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Noble Designs Bag </a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$120.99</span>
                                            <del>$159.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Noble Designs Bag " />
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
                        <div className="tab4">

                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s1.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s1.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Running Shoes</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$80.99</span>
                                            <del>$89.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Running Shoes" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s2.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s2.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Shoetopia Lace Up</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$90.99</span>
                                            <del>$59.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Shoetopia Lace Up" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s3.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s3.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Steemo Casuals(Black)</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$90.99</span>
                                            <del>$59.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Steemo Casuals (Black)" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s4.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s4.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Benetton Flip Flops</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$40.99</span>
                                            <del>$99.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Benetton Flip Flops" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s5.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s5.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Moonwalk Bellies </a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$80.99</span>
                                            <del>$99.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Moonwalk Bellies" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s6.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s6.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Aero Canvas Loafers  </a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$120.99</span>
                                            <del>$199.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Aero Canvas Loafers" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s7.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s7.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Sparx Sporty Canvas Shoes</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$160.99</span>
                                            <del>$199.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Sparx Sporty Canvas Shoes" />
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
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={require("../../assets/images/s8.jpg")} alt="" className="pro-image-front" />
                                        <img src={require("../../assets/images/s8.jpg")} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><a href="single.html">Women BLACK Heels</a></h4>
                                        <div className="info-product-price">
                                            <span className="item_price">$180.99</span>
                                            <del>$199.71</del>
                                        </div>
                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Women BLACK Heels" />
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

expor