import { useState } from "react";

function BreadCard(){
  const [isAdded, setIsAdded] = useState(false);
  return(
    <div className="w-80 p-4 m-5 border border-gray-300 rounded-md">
      <img src="https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/07/%ED%9D%91%EC%9E%84%EC%9E%90%EB%B2%A0%EC%9D%B4%EA%B8%80-%EB%8B%A8%EB%A9%B4.png" alt="흑임자 베이글 이미지" />
      <h2 className="text-2xl font-bold">흑임자 베이글</h2>
      <p className="text-xl text-gray-500 font-medium">4,900원</p>
      <button className="w-28 h-10 rounded-xl bg-blue-600 text-white" onClick={() => setIsAdded(!isAdded)}>
        {isAdded ?  "♥ 담김" : "♡ 담기"}
      </button>
    </div>
  )
}

export default BreadCard;