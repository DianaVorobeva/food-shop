import { useState } from 'react';
import { dataSlides } from './dataSlides';
import SlidesSeason from './SlidesSeason'



function Home() {
    const [slides, setSlides] = useState(0);
    const {image,title,sign} = dataSlides[slides];

    const previousSlide = () => {
      setSlides((slides => {
        slides--;
        if(slides < 0) {
          return dataSlides.length-1
        }
        return slides
      }))
    }
  
    const nextSlide = () => {
      setSlides( slides => {
        slides++;
        if(slides > dataSlides.length-1) {
          return slides = 0
        }
        return slides
      }
      )
    }
return(
  <div>

    <div className='wrapper2'>
        <div onClick={previousSlide}>
          <img src="https://img.icons8.com/offices/512/chevron-left.png" width="40px" alt='arrow'/>
          </div>
      <div className='contSlides'>
        <img src={image} alt="slides" className='slideImage'/>
        <img src={sign} alt="sign" className='sign'/>
        <p className='title'>{title}</p>
      </div>
      <div onClick={nextSlide}>
        <img src="https://img.icons8.com/office/512/chevron-right.png" width="40px" alt='arrow'/>
      </div>
    </div>

    <div className='wrapper3'>
      <div className='contDelivery'>
        <div>
          <p className='text'>Get your favorite products the way you want</p>
          </div>
          <div className='box'>
           <img src="https://img.icons8.com/ios-filled/512/deliver-food.png" alt="delivery" width="30px" height="30px"/>
           <div className='desc'>
            <p>Delivery</p>
           <p className='narrow'>60 min - $10</p>
           </div>
          </div>
         <div className='box'>
            <img src="https://img.icons8.com/ios-filled/512/shop-local.png" alt="delivery" width="30px" height="30px"/>
            <div className='desc'>
              <p>Pick it up</p>
            <p className='narrow'>free</p>
            </div>
        </div>
      </div>
    </div>

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
    <div>
      <SlidesSeason/>
    </div> 
    </div>
)
}

export default Home;