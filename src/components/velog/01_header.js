import React, { useState } from "react";

const Header = () => {
    let [hedaer, changeFun] = useState(['남자 헤어 추천', '동탄 맛잡 추천', '파이썬 독학 추천'])

    return(
        <div className="list">
            <h3>{hedaer[]}</h3>
            <p>11월 24일 발행</p>
            <hr/>
        </div>
    )
};

export default Header;

