import './app.css';
import React, { useState } from "react";

const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const backspace = () => {
        setResult(result.slice(0, -1));
    };
    return (
        <body>
            <header>
                <h1>calc.sh</h1>
                <h2>#!/bin/bash</h2>
            </header>

            <main>
                <form>
                    <input type="text" value={result}/>
                </form>
                <div id="numpad_box">
                    <div id="num_box">
                        <div>
                            <button name="9" onClick={handleClick}>9</button>
                            <button name="8" onClick={handleClick}>8</button>
                            <button name="7" onClick={handleClick}>7</button>
                        </div>
                        <div>
                            <button name="6" onClick={handleClick}>6</button>
                            <button name="5" onClick={handleClick}>5</button>
                            <button name="4" onClick={handleClick}>4</button>
                        </div>
                        <div>
                            <button name="3" onClick={handleClick}>3</button>
                            <button name="2" onClick={handleClick}>2</button>
                            <button name="1" onClick={handleClick}>1</button>
                        </div>
                        <div>
                            <button id="n0" name="0" onClick={handleClick}>0</button>
                        </div>
                    </div>

                    <div id="operation_box">
                        <button name="+" onClick={handleClick}>&#43;</button>
                        <button name="-" onClick={handleClick}>&minus;</button>
                        <button name="*" onClick={handleClick}>&times;</button>
                        <button name="/" onClick={handleClick}>&divide;</button>
                        <button id="backspace_btn" name="CE" onClick={backspace}>CE</button>
                        <button id="equals_btn" name="=" onClick={calculate}>=</button>
                        
                    </div>
                </div>
            </main>

            <footer><a href="https://tapusik.eu">Home</a></footer>          
        </body>
    )
}

export default App;