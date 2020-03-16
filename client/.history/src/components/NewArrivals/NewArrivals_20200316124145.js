import React from 'react'
import NewArrivalItem from './NewArrivals/NewArrivalItem'

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
                            <NewArrivalItem />

                        </div>
                        <div className="clearfix"></div>
                    </div>


                </div>
            </div>
        </div>
        </div >


    )
}

export default newArrivals