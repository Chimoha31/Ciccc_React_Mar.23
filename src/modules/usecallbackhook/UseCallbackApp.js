import React, { useState, useCallback, memo } from "react";

const FancyInput = memo(({ name, onChange }) => {
  console.log("Rendering fancy input...");
  return <input type="text" name={name} onChange={onChange} />;
});

const UseCallbackApp = () => {
  const [values, setValues] = useState({});
  const [toggle, setToggle] = useState(false);

  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  return (
    <>
      <h1>Form</h1>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <FancyInput name="example" onChange={changeHandler} />
      <button onClick={() => setToggle((prev) => !prev)}>
        Toggle: {toggle ? "True" : "False"}
      </button>
    </>
  );
};

export default UseCallbackApp;