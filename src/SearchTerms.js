import bread from './bread.webp';


function SearchTerms({chosenCategory}) {
    
    return (
        <div className='wrapper'>
<div className='container'>
    <div className='searchTerm' onClick={()=>chosenCategory("bread and pastry")}>
        <img src={bread} alt="bread" className='image'/>
        <h2>Bread and pastry</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("grocery")}>
        <img src={"https://images.unsplash.com/photo-1627485937980-221c88ac04f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvdXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"} alt="grocery" className='image'/>
        <h2>Grocery</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("vegetables")}>
        <img src={"https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnZXRhYmxlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60"} alt="vegetables" className='image'/>
        <h2>Vegetables</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("fruit and berries")}>
        <img src={"https://images.unsplash.com/photo-1628689469838-524a4a973b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"} alt="fruit" className='image'/>
        <h2>Fruit and berries</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("sweets")}>
        <img src={"https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dlZXRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"} alt="sweets" className='image'/>
        <h2>Sweets</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("dairy")}>
        <img src={"https://images.unsplash.com/photo-1596633605700-1efc9b49e277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRhaXJ5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"} alt="dairy" className='image'/>
        <h2>Dairy</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("meat")}>
        <img src={"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60"} alt="meat" className='image'/>
        <h2>Meat</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("fish and seafood")}>
        <img src={"https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"} alt="Fish and seafood" className='image'/>
        <h2>Fish and seafood</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("meal")}>
        <img src={"https://images.unsplash.com/photo-1594998893017-36147cbcae05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"} alt="Lunch" className='image'/>
        <h2>Lunch</h2>
    </div>
    <div className='searchTerm' onClick={()=>chosenCategory("drinks")}>
        <img src={"https://images.unsplash.com/photo-1551198297-094dd136d3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60"} alt="drinks" className='image'/>
        <h2>Drinks</h2>
    </div>
</div>
</div>
    )

}

export default SearchTerms;