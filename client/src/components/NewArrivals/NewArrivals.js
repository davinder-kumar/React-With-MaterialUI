import React from 'react'
import NewArrivalItem from './NewArrivalsItem/NewArrivalItem'

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
                            <NewArrivalItem image="m1.jpg" />
                            <NewArrivalItem image="m2.jpg" />
                            <NewArrivalItem image="m3.jpg" />
                            <NewArrivalItem image="m4.jpg" />
                            <NewArrivalItem image="m5.jpg" />
                            <NewArrivalItem image="m6.jpg" />
                            <NewArrivalItem image="m7.jpg" />
                            <NewArrivalItem image="m8.jpg" />

                        </div>
                        <div className="clearfix"></div>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default newArrivals