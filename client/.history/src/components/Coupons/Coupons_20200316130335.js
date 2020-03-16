import React from 'react'
import Coupon from './Coupon/Coupon'
const coupons = (props) => {
    return(
        <div className="coupons">
                <div className="coupons-grids text-center">
                    <div className="w3layouts_mail_grid">
                        <Coupon />
                        <Coupon />
                        <Coupon />
                        <Coupon />
                        <div className="clearfix"> </div>
                    </div>

                </div>
            </div>
    )
}

export default coupons