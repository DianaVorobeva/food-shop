import { useState } from "react";
import { data } from "./data";
import SlidesFitness from "./SlidesFitness";
import SlidesSale from "./SlidesSale";


function SlidesSeason() {
const [slides, setSlides] = useState(0);

const seasonGroup = data.filter(element => element.season === true);
const {name,weight,image,price} = seasonGroup[slides];



const previousSlide = () => {
    setSlides((slides => {
      slides--;
      if(slides < 0) {
        return seasonGroup.length-1
      }
      return slides
    }))
  }

  const nextSlide = () => {
    setSlides( slides => {
      slides++;
      if(slides > seasonGroup.length-1) {
        return slides = 0
      }
      return slides
    }
    )
  }

return (
    <div className="evenly">
        <div className="block">
        <h2 className="heading2">Season is now! <img src={"https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-fruit-plants-flaticons-flat-flat-icons-2.png"} alt="arrow" width="40px"/></h2>
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
        <SlidesFitness/>
        <SlidesSale/>
    </div>
)
}

export default SlidesSeason;