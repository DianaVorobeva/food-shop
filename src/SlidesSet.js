import { useState } from "react";

function SlidesSet({group}) {
const [slides, setSlides] = useState(0);

const {name,weight,image,price} = group[slides];



const previousSlide = () => {
    setSlides((slides => {
      slides--;
      if(slides < 0) {
        return group.length-1
      }
      return slides
    }))
  }

  const nextSlide = () => {
    setSlides( slides => {
      slides++;
      if(slides > group.length-1) {
        return slides = 0
      }
      return slides
    }
    )
  }

return (
        <div className="wrapper4"> 
            <div onClick={previousSlide}>
                <img src="https://img.icons8.com/offices/512/chevron-left.png" width="20px" alt='arrow'/>
            </div>
            <div className='group'>
                <img src={image} alt="set" className="productImg"/>
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
        
)
}

export default SlidesSet;