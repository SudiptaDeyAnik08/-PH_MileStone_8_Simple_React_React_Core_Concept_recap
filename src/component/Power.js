import React from "react";
import { useState } from "react";
import './Power.css';

const Power = ()=>{
    const [charge,setCharge] = useState(10)

    function BoostUp(){
        if(charge <100){
            const newCharge = charge + 10;
            setCharge(newCharge);
         }
         else{
            const newCharge =100;
            setCharge(newCharge);
         }

        }

    function BoostDown(){
        if(charge <= 0 ){
            const newCharge =0;
            setCharge(newCharge);
        }else{
            const newCharge = charge - 10;
            setCharge(newCharge);
        }
    }

    return(
        <div className="Power">
            <h1>Power: {charge} </h1>
            <button onClick={BoostUp}>Boost UP</button>
            <button onClick={BoostDown}>Boost Down</button>
        </div>
    )
}

export default Power;