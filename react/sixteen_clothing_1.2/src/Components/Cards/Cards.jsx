import Cardproduct from './Cardproduct';
import './Cards.css'

function Cards() {
    return ( 

        <> 
        {
        Cardproduct.map((item)=>
            <div className="card">
                <div className="cardimage">
                    <img src={item.image} alt="" />
                </div>
                <div className="innercard">  
                  <div className="cardtitle">
                    <div className='title'><p>{item.title}</p></div>
                    <div className='rate'><p>{item.rate}</p></div>

                  </div>
                  <div className="carddiscription"> 
                    <p>{item.content}</p>
                  </div>
                  <div className="cardreviews">
                    <div className='innerreview'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                   
                    </div>
                    <div className='innerreview'><p id='review'>{item.reviews}</p></div>
                  </div>
                </div>
          </div>
          )
        }

       
          
              
        </> 
        
     );
}

export default Cards;