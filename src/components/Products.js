import one from "../perfumeimg/1.png";
import two from "../perfumeimg/2.png";
import three from"../perfumeimg/3.png";
function Products(){
    return(
      <div className="images">
      <div className="img">
        <img src={one} alt="loading..."></img>
      <p>EV Eve Fragrances</p>
      <p>$30/-</p>
      </div>
      <div className="img">
        <img src={two} alt="loading..."></img>
      <p>Bailey Perfume</p>
      <p>$40/-</p>
      </div>
      <div className="img">
        <img src={three} alt="loading..."></img>
      <p>EV Eve Fragrances</p>
      <p>$60/-</p>
      </div>
    </div>
    )
    
    }
    export default Products