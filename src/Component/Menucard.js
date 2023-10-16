import React from "react";
import "./Card.css"
import { useNavigate } from "react-router-dom";

const Menucard = ({menuapi})=>{
    const navigate = useNavigate()
    // console.log(menuapi,"menucarddata")
    return<div>
        <div className="container" >
            {menuapi && menuapi.map((item)=>{
                return<div className="card" key={item.id}>

                    <div><img className="img" src={item.image} alt="food_picture" height="300px" width="100%"></img> </div>
                    <div className="titleContainer">
                        <div>
                            <div>Name: {item.name}</div>
                            <div> Category: {item.category}</div>
                            <div> Price: {item.price}</div>
                        </div>
                        <div>
                        <button className="order"
                            onClick={()=>navigate(`ItemDetails/${item.id}`)}
                        >Order</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}
export default Menucard