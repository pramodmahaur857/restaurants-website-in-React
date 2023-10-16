import React from "react";
import "./Card.css"

const Header =({list,filteritem})=>{
    console.log("list",list)
    return<>
    <div className="con">
        <div className="head">
            <div className="header">
                {list.map((curEle,ind)=><div className="hbtn" onClick={()=>filteritem(curEle)} key={ind}>{curEle}</div>)}
            </div>
        </div>
    </div>
    </>
}
export default Header;