import { useEffect,useState } from "react";
const Countereffect=()=>{
    const[count, setcount]=useState(0);
    useEffect(()=>{
        document.title=count;'${count}'
    },[count]);
    return(
        <div>
            <h1>count;{count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
        </div>
    );
};
export default Countereffect;