import { useState } from "react";
import { dataAddresses } from "./dataAddresses";

function Contact() {
    const [address, setAddress] = useState(dataAddresses);

    const removeAddress = (id) => {
      const newList = address.filter(item => item.id !== id);
       setAddress(newList)
        
    }
return (
    <div>
        <div className='wrapper3'>
      <div className='contPocket'>
      <div className='pocket'>
          <h1>Shopping in a pocket</h1>
          <p>Download the mobile app</p>
          <div className='boxPosition'>
          <div className='box'>
           <img src="https://img.icons8.com/ios-filled/512/deliver-food.png" alt="delivery" width="30px" height="30px"/>
           <div className='desc2'>
            <p>Express delivery in 60 minutes</p>
           </div>
          </div>
          <div className='box'>
           <img src="https://img.icons8.com/ios-filled/512/discount.png" alt="delivery" width="30px" height="30px"/>
           <div className='desc2'>
            <p>Assortment, prices and promotions of the supermarket in your phone</p>
           </div>
          </div>
          <div className='box'>
           <img src="https://img.icons8.com/ios-filled/512/online-store.png" alt="delivery" width="30px" height="30px"/>
           <div className='desc2'>
            <p>Pickup - order in advance and pick up at your favorite store</p>
           </div>
          </div>
          <div className='box'>
           <img src="https://img.icons8.com/glyph-neue/512/coin-wallet.png" alt="delivery" width="30px" height="30px"/>
           <div className='desc2'>
            <p>Information about points balance, available coupons and purchase history</p>
           </div>
          </div>
          </div>

      </div>
      <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80" alt="phone" className='phone'/>
    </div>
    </div>
    <div className="header">
        <h1 className="heading3">Call us in need - 8 800 260 3788</h1>
    </div>
     <div className="cont4">
    <div className='wrapper5'>
        
    <h2 className="heading4">List of offline shops ({address.length})</h2>
    <div>
    {address.map(item => {
        const {id,address,city,state} = item;
        return (
            
                <div className='box2' key={id}>
                    <div><p>{address}, {city}, {state}</p></div>
                    <div>
                    <button onClick={() => removeAddress(id)} className="deleteBtn" ><img src={"https://img.icons8.com/parakeet/512/delete-sign.png"} alt="delete" width="20px"/></button>
                    </div>
                </div>
          
        )
    })}
    </div>
    </div>
    </div>

    <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="shop" className="deliveryman"/>
    </div>
)

}

export default Contact;