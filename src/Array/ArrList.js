import React, {useState} from "react";

const ArrList = () => {

    const [numbers, setNumbers] = useState(['1', '2', '3', '4', '5']);

    return (
        <>
            <p>Hello I'm Array List</p>
            <div>
                <ul>
                    {numbers.map((el, i) =>{
                       return <li key={i} >{el}</li>
                    })}
                </ul>
            </div>

        </>
    )

};

export default ArrList;
