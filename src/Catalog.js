
import { useState } from 'react';
import { data } from './data';
import Products from './Products';
import SearchTerms from './SearchTerms';

function Catalog() {
    const [products, setProducts] = useState(data);
    const chosenCategory = (category) => {
    const newList = data.filter(element => element.category === category);
    setProducts(newList);
    
    }

    return (
        <div>
            <SearchTerms chosenCategory={chosenCategory}/>
            <Products products={products}/>
        </div>

    )

}

export default Catalog;