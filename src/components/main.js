import mainData from "./mainData";
import React from "react";
import "./main.css"

const Main = () => {
  return (
    <div className="oneBook">
        {mainData.map((onemainData)=>{
            const {id,img,name} = onemainData
            return<div key={id}>
                    <img src={img} />
                    <p>{name}</p>
                 </div>
        })}
    </div>
  )
}

export default Main