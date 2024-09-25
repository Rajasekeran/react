import React,{useState} from "react";

const App = () => {
  const  [num, setNum] = useState(1);
  
  const  handleAdd = () =>{
    
    setNum((currentvalue) =>{
      return currentvalue+1;
    });
  };
    return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default App;