import React from 'react'

const newArrivalItem = (props) => {
    return (
        <div className="col-md-3 product-men">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                    <img src={require("../../../assets/images/")} alt="" className="pro-image-front" />
                    <img src={require("../../../assets/images/m1.jpg")} alt="" className="pro-image-back" />
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
    )
}

export default newArrivalItem