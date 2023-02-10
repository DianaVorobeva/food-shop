import { useState } from "react";
import { data } from "./data";


function SlidesSale() {
const [slides, setSlides] = useState(0);

const saleGroup = data.filter(element => element.sale === true);
const {name,weight,image,price} = saleGroup[slides];



const previousSlide = () => {
    setSlides((slides => {
      slides--;
      if(slides < 0) {
        return saleGroup.length-1
      }
      return slides
    }))
  }

  const nextSlide = () => {
    setSlides( slides => {
      slides++;
      if(slides > saleGroup.length-1) {
        return slides = 0
      }
      return slides
    }
    )
  }

return (
        <div className="block">
         <h2 className="heading2">Tasty sales <img src={"https://img.icons8.com/3d-fluency/512/discount.png"} alt="arrow" width="40px" /></h2>
        <div className="wrapper4"> 
            <div onClick={previousSlide}>
                <img src="https://img.icons8.com/offices/512/chevron-left.png" width="20px" alt='arrow'/>
            </div>
            <div className='group'>
                <img src={image} alt="season" className="productImg"/>
                <div className="product-info">
                    <h3>{name}</h3>
                    <h5>Weight: {weight}g</h5>
                    <h4 className="price">$ {price}</h4>
                </div>
            </div>
        
            <div onClick={nextSlide}>
                <img src="https://img.icons8.com/office/512/chevron-right.png" width="20px" alt='arrow'/>
            </div>
        </div>
        </div>
)
}

export default SlidesSale;