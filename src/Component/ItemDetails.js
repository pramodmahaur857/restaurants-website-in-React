import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Card.css"
const ItemDetails = ({menuapi})=>{
    const {userid} = useParams()
    const data = menuapi.find((item)=>item.id==userid)
    // console.log(userid,"useparam",data,"menuapi")

    return<div>
      <div className="homelinkdiv">
        <Link className="Homelink" to="/">  Home</Link>
      </div>
    <div className="itemDelcontainer">
        { Object.keys(data).length>0 && <div className="itemdetails">
            <div><img src={data.image} alt="foodpicture" height="400px" width="600px"></img></div>
            <div className="titleContainer">
                <div>
                    <div> Nmae: {data.name}</div>
                    <div> Category: {data.category}</div>
                    <div> Price: {data.price} </div>
                </div>
                <div>
                    <button className="order">Order</button>
                </div>
            </div>
            <div>Description: {data.description}</div>
        </div>}
    </div>
    <div className="ft"></div>
    </div>
}
export default ItemDetails