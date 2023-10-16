import React, { useState } from "react";
import Menucard from "./Component/Menucard"
import Menuapi from "./Component/Menuapi"
import Header from "./Component/Header";
import ItemDetails from "./Component/ItemDetails";
import {BrowserRouter, Route, Routes} from "react-router-dom"

const unikelist = [...new Set(Menuapi.map((curEle)=>curEle.category)),"All"]
console.log(unikelist,"unikelist")

const App=()=>{
  const [Apidata, setApidata] = useState(Menuapi)
  const [list, setlist] = useState(unikelist)
  const filteritem = (category)=>{
    if(category==="All"){
      return setApidata(Menuapi)
    }
    const updatedlist = Menuapi.filter((item)=>{
      return item.category===category
    })
    setApidata(updatedlist)
  }

  return<div className="appdiv">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>
              <Header filteritem={filteritem} list ={list} />
              <Menucard menuapi = {Apidata} />
            </div>}></Route>
            <Route path="ItemDetails/:userid" element={<ItemDetails menuapi = {Apidata} />}></Route>
        </Routes>
    </BrowserRouter>
  </div>
}
export default App;