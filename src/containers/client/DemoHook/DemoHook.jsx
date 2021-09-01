import React, { useState, useMemo } from "react";
import Counter from "./Counter";

export default function DemoHook() {
  const [showCounter, setShowCounter] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);

  // const renderBigChart = () => {};

  //useCallBack : dùng để cache function,
  //[] dùng mảng rỗng là sẽ kbh tạo lại func mới
  // const renderBigChartMemoized = useCallback(()=>{}, []);
  // const renderBigChartMemoized = useCallback(() => {}, [randomNumber]);


  //useMemo: tương tự useCallback nhưng chỉ cache giá trị return từ function thay vì cả func dù k cần biết giá trị như useCallback
  const student = useMemo(
    () => ({
      fullName: "Thuan",
      class: "BC12",
      random: randomNumber,
    }),
    [randomNumber]
  );

  console.log("DEMO HOOK");
  return (
    <div>
      <h1>DEMOHOOK</h1>
      <p>Random number is {randomNumber} </p>
      <button
        className="btn btn-success"
        onClick={() => setRandomNumber(Math.random())}
      >
        RANDOM
      </button>
      <button className="btn btn-danger" onClick={() => setShowCounter(false)}>
        REMOVE COUNTER
      </button>
      {showCounter && (
        <Counter
          //  renderBigChart={renderBigChartMemoized}
          student={student}
        />
      )}
    </div>
  );
}
