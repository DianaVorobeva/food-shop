import arrow from './arrow.png';
import ShowProducts from './ShowProducts';



function Products({products}) {
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




    return (
    <div>
        <h2 className="heading">Bread and pastry <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={breadGroup}/>
        <h2 className="heading">Grocery <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={groceryGroup}/>
        <h2 className="heading">Vegetables <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={vegetablesGroup}/>
        <h2 className="heading">Fruit and berries <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={fruitGroup}/>
        <h2 className="heading">Sweets <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={sweetsGroup}/>
        <h2 className="heading">Dairy <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={dairyGroup}/>
        <h2 className="heading">Meat <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={meatGroup}/>
        <h2 className="heading">Fish and seafood <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={fishGroup}/>
        <h2 className="heading">Lunch <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={mealGroup}/>
        <h2 className="heading">Drinks <img src={arrow} alt="arrow" className="arrow"/></h2>
        <ShowProducts group={drinksGroup}/>
    </div>
    )

}

export default Products;