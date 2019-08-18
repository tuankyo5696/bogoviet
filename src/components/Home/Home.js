import React from "react";
import "./_Home.scss";
import Carousel from './../../components/UI/Slider/Carousel';

const Home = props => {
  return (
    <div className = "menu">
     <div className="container1">
        <div className="row no-gutters">
          <Carousel />
        
        </div>
      </div>
    </div>
  )
}
 

export default Home;
