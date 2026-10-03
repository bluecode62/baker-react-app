import { useState } from "react";

function BreadCard({name,price,image}){
  const [isAdded, setIsAdded] = useState(false);
  return(
    <div className="w-80 p-4 m-5 border border-gray-300 rounded-md">
      <img src={image}alt="흑임자 베이글 이미지" />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-xl text-gray-500 font-medium">{price}</p>
      <button className="w-28 h-10 rounded-xl bg-blue-600 text-white" onClick={() => setIsAdded(!isAdded)}>
        {isAdded ?  "♥ 담김" : "♡ 담기"}
      </button>
    </div>
  )
}

export default BreadCard;