import React, { useState } from 'react'

const Calculator = () => {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [result,setResult] = useState(null);

  const handleAdd =()=>{
    setResult(Number(num1)+Number(num2));
  };
  const handleMultiply =()=>{
    setResult(Number(num1)*Number(num2));
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Calcutetor</h1>
      <div>

        <input type='number'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder='Enter first number'/>
      </div>
      <div style={{marginTop:"10px"}}>
      <input type='number'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder='Enter second number'/>
      </div>
      <div style={{marginTop:"20px"}}>
<button onClick={handleAdd}>Add</button>
<button onClick={handleMultiply} style={{marginLeft:"10px"}}>Muitiply</button>
      </div>
      {result !== null && (
        <div style={{marginTop:"20px"}}>
          <h2>Result :{result}</h2>
          </div>
      )};

    </div>
  );
}

export default Calculator