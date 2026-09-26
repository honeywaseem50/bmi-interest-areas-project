 import { useState } from "react";

function App() {

  // BMI
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function CalculateBMI(e) {
    e.preventDefault();

    const calculateBMI =
      Number(weight) / (Number(height) * Number(height));

    setBmi(calculateBMI);
  }


  // Interest
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [interest, setInterest] = useState(0);

  function CalculateInterest(e) {
    e.preventDefault();

    const calculateInterest =
      (Number(principal) * Number(rate) * Number(time)) / 100;

    setInterest(calculateInterest);
  }


  // Area
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [area, setArea] = useState(0);

  function CalculateArea(e) {
    e.preventDefault();

    const calculateArea =
      Number(length) * Number(width);

    setArea(calculateArea);
  }


  return (
    <div>

      <h1>BMI Calculator</h1>

      <form onSubmit={CalculateBMI}>

        <input
          type="number"
          placeholder="Enter Weight in kg"
          onChange={(e) => setWeight(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter Height in meters"
          onChange={(e) => setHeight(e.target.value)}
        />

        <br /><br />

        <button type="submit">Calculate BMI</button>

        <br /><br />

      </form>

      <p>Your BMI is {bmi.toFixed(2)}</p>


      <hr />


      <h1>Interest Calculator</h1>

      <form onSubmit={CalculateInterest}>

        <input
          type="number"
          placeholder="Enter Principal"
          onChange={(e) => setPrincipal(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter Rate"
          onChange={(e) => setRate(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter Time"
          onChange={(e) => setTime(e.target.value)}
        />

        <br /><br />

        <button type="submit">Calculate Interest</button>

        <br /><br />

      </form>

      <p>Your Interest is {interest.toFixed(2)}</p>

      


      <hr />


      <h1>Area Calculator</h1>

      

      <form onSubmit={CalculateArea}>

        <input
          type="number"
          placeholder="Enter Length"
          onChange={(e) => setLength(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter Width"
          onChange={(e) => setWidth(e.target.value)}
        />

        <br /><br />

        <button type="submit">Calculate Area</button>

        <br /><br />

      </form>

      <p>Your Area is {area.toFixed(2)}</p>

    </div>
  );
}

export default App;