import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    // setResult(result.slice(0, result.length - 1));
    // An alternate piece of code...
    setResult(result.slice(0, -1));
  };

  const showResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <section className="main-container">
      <div className="input-container">
        <form>
          <input type="text" value={result} />
        </form>
      </div>

      <div className="keypad">
        <button onClick={clear} id="clear">
          Clear
        </button>
        <button className="special-btn" onClick={backspace} id="backspace">
          DEL
        </button>
        
        <button className="special-btn" name="/" onClick={handleClick}>
          &divide;
        </button>

        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="special-btn" name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button className="special-btn" name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button className="special-btn" name="+" onClick={handleClick}>
          +
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        
        <button className="special-btn" onClick={showResult} id="equality-btn">
          =
        </button>
      </div>
    </section>
  );
};

export default App;
