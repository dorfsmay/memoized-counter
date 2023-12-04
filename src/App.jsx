import { useState, useRef, useEffect, memo } from "react";
import "./App.css";

const MDisplay = memo(function MDisplay({ counter, hiddenCurrent }) {
  useEffect(() => {
    const now = new Date();
    console.log(`${now.toISOString()}: rendering`);
  });

  return (
    <>
      <div>{counter}</div>
      <div>{hiddenCurrent}</div>
    </>
  );
});

/*
 * Renders every time "render" is clicked, because it renders
 * every time parent renders
 *

function MDisplay({ counter, hiddenCurrent }) {
  useEffect(() => {
    const now = new Date();
    console.log(`${now.toISOString()}: rendering`);
  });

  return (
    <>
      <div>{counter}</div>
      <div>{hiddenCurrent}</div>
    </>
  );
}
*/

function App() {
  const [counter, setCounter] = useState(0);
  const [, setRerender] = useState(false);
  const hidden = useRef(0);

  return (
    <main>
      <div className="counters">
        <MDisplay counter={counter} hiddenCurrent={hidden.current} />
      </div>
      <div className="buttons">
        <button onClick={() => setCounter((x) => x + 1)}>counter</button>
        <button onClick={() => setRerender((x) => !x)}>render</button>
        <button onClick={() => (hidden.current = hidden.current + 1)}>
          hidden
        </button>
      </div>
    </main>
  );
}

export default App;
