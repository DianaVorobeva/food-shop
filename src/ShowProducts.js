import { useState } from "react";

function ShowProducts({group}) {
    const [showText, setShowText] = useState(false);

    const showTextClick = (element) => {
        element.showMore = !element.showMore;
        setShowText(!showText)
      }

    return (
        <div className="container2">
        {group.map((element => {
       const {id,name,weight,description,price,image,showMore} = element;
        return (
            <div key={id} className='product-cart'>
                <img src={image} alt="clothes" width="400px" height="500px" className="productImage"/>
                <div className="product-info">
                    <h3>{name}</h3>
                    <p className="description">description: {showMore ? description : description.substring(0,30) + "...."}</p>
                    <button onClick={()=> showTextClick(element)} className="description btnShowMore">{showMore ? "Show less" : "Show more"}</button>
                    <h5>Weight: {weight}g</h5>
                    <h4 className="price">$ {price}</h4>
                </div>
            </div>
        )
    }))}
        </div>
    )
}

export default ShowProducts;