import React, { useState, useEffect, memo } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //componentDidMount+componentDidUpdate
  useEffect(() => {
    console.log("chay lan dau va tat ca nhung lan rerender");
  });
  // cos them tham so thu 2,[ ] mang dependencies
  //componentDidMount
  useEffect(() => {
    console.log("chi chay 1 lan duy nhat");
    //componentWillUnmount
    return () => {
      console.log("chi chay khi component mat khoi DOM");
    };
  }, []);

  //
  useEffect(() => {
    console.log("chay lan dau va tat ca nhung lan count thay doi");
  }, [count]);

  console.log("counter>render");

  return (
    <>
      {/* <p>{student.fullName}</p> */}
      <h1>Counter</h1>
      <p>Current number is {count}</p>
      <button
        className="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default memo(Counter);
//memo HOC: sư dụng kĩ thuật memoization
//giong PureComponent cuar class
