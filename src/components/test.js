import React, { useEffect, useState } from "react";

const Test = () => {
    const [click_num, setClickNum] = useState(0);

    useEffect(() =>{
        setInterval(() => {
            setClickNum(click_num +1);
        }, 500);
    })

    const onButtonClick = () => {
        setClickNum(click_num + 1);
    }
    
    return(
        <div>
            <p>This is Test element. clicked {click_num}</p>
            <button onClick={onButtonClick}>Click Me!!</button>
        </div>
    )
};

export default Test;