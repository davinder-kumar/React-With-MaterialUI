import React from 'react'
import NewArrivalItem from './NewArrivalsItem/NewArrivalItem'
import Spinner from '../UI/Loader/Loader'
const newArrivals = (props) => {
    // console.log(props.products)
    let newArrivalsContent = null
    if (props.loading) {
        newArrivalsContent = <Spinner />
    }
    if (props.products.length) {
        newArrivalsContent = props.products.map((product, index) => {
            return <NewArrivalItem key={index} image={product.image} />
        })
    }

    if(props.isError){
        newArrivalsContent = <p>Items can't loaded</p>
    }


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
                            {newArrivalsContent}
                        </div>
                        <div className="clearfix"></div>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default newArrivals