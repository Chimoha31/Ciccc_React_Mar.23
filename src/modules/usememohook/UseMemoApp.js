import React, { useState, useMemo } from "react";

const fibonacci = num => num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2)

const Fibo = ({ value }) => {
    const result = useMemo(() => fibonacci(value), [value])

    return(
        <p>
            {value}: {result}
        </p>
    )
}

const UseMemoApp = () => {
    const [values, setValues] = useState([]);

  const handleKeyUp = (e) => {
    const { key, target: { value } } = e;

    if(key === 'Enter'){
        if(value > 40 || value < 1) return alert('Invalid Input')
    }

    setValues((prevState) => prevState.concat(value));
  };

  return (
    <>
      <h1>Usememoapp</h1>
      <input type="number" min={1} max={40} onKeyUp={handleKeyUp} />
      {values.map((val, idx) => (
        <Fibo value={val} key={idx} />
      ))}
    </>
  );
};

export default UseMemoApp;