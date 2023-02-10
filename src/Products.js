import { useState } from "react";
import arrow from './arrow.png';



function Products({products}) {
    const [showText, setShowText] = useState(false);
  

    const breadGroup = products.filter(element => element.category === "bread and pastry");
    const groceryGroup = products.filter(element=> element.category === "grocery");
    const vegetablesGroup = products.filter(element=> element.category === "vegetables");
    const fruitGroup = products.filter(element=> element.category === "fruit and berries");
    const sweetsGroup = products.filter(element=> element.category === "sweets");
    const dairyGroup = products.filter(element=> element.category === "dairy");
    const meatGroup = products.filter(element=> element.category === "meat");
    const fishGroup = products.filter(element=> element.category === "fish and seafood");
    const mealGroup = products.filter(element=> element.category === "meal");
    const drinksGroup = products.filter(element=> element.category === "drinks");

    const showTextClick = (element) => {
        element.showMore = !element.showMore;
        setShowText(!showText)
      }



    return (
    <div>
        <h2 className="heading">Bread and pastry <img src={arrow} alt="arrow" className="arrow"/></h2>
        <div className="container2">
        {breadGroup.map((element => {
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
        <h2 className="heading">Grocery</h2>
        <div className="container2">
        {groceryGroup.map((element => {
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
        <h2 className="heading">Vegetables</h2>
        <div className="container2">
        {vegetablesGroup.map((element => {
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
        <h2 className="heading">Fruit and berries</h2>
        <div className="container2">
        {fruitGroup.map((element => {
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
        <h2 className="heading">Sweets</h2>
        <div className="container2">
        {sweetsGroup.map((element => {
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
        <h2 className="heading">Dairy</h2>
        <div className="container2">
        {dairyGroup.map((element => {
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
        <h2 className="heading">Meat</h2>
        <div className="container2">
        {meatGroup.map((element => {
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
        <h2 className="heading">Fish and seafood</h2>
        <div className="container2">
        {fishGroup.map((element => {
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
        <h2 className="heading">Lunch</h2>
        <div className="container2">
        {mealGroup.map((element => {
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
        <h2 className="heading">Drinks</h2>
        <div className="container2">
        {drinksGroup.map((element => {
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
    </div>
    )

}

export default Products;