import React from "react";
import Item from "../Components/item";
import Carousel from "react-elastic-carousel";
import Video2 from "../Components/Video2.mp4";
import {brands,breakPoints,prod,cat} from "../data";

function Home(){
    return(
        <div className="app__home">
            <div className="search__bar">
                
            </div>
            <video className="app__video" autoPlay muted loop>
                <source src={Video2} type="video/mp4"/>
            </video>
            
            <div className="sections">
            <div className="section__category">
                    <h2>Shop by Category</h2>
                    <div className="brand__cat">
                    <Carousel breakPoints={breakPoints}>
                    {cat.map((photo)=>{
                        return( 
                        <div>
                            <Item>
                                <img width="100%" src={photo.url} alt="myimage"/>
                            </Item>
                        </div>)
                        })}
                    </Carousel>
                    </div>
                </div>
                <div className="section__product">
                    <h2>Shop by Product</h2>
                    <div className="brand__prod">
                    <Carousel breakPoints={breakPoints}>
                    {prod.map((photo)=>{
                        return( 
                        <div>
                            <Item>
                                <img width="100%" src={photo.url} alt="myimage"/>
                            </Item>
                        </div>)
                        })}
                    </Carousel>
                    </div>
                </div>
                <div className="section__brand">
                    <h2>Shop by Brand</h2>
                    <div className="brand__car">
                    <Carousel breakPoints={breakPoints}>
                    {brands.map((photo)=>{
                        return( 
                        <div>
                            <Item>
                                <img width="100%" src={photo.url} alt="myimage"/>
                            </Item>
                        </div>)
                        })}
                    </Carousel>
                    </div>
                </div>
            </div> 
        </div>
    )  
}

export default Home;