
import { useState } from "react";
function Buttons(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [mode, setMode] = useState("deg");
    const [invMode, setInvMode] = useState("false");

    const handleClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };
    const handleEvaluate = () => {
        try{
            let evaluatedInput = input;

            if(mode === "rad"){
                evaluatedInput = evaluatedInput.replace(/sin\(([^)]+)\)/g, (match, p1) => `sin(${parseFloat(p1) * Math.PI / 180})`);
                evaluatedInput = evaluatedInput.replace(/cos\(([^)]+)\)/g, (match, p1) => `cos(${parseFloat(p1) * Math.PI / 180})`);
                evaluatedInput = evaluatedInput.replace(/tan\(([^)]+)\)/g, (match, p1) => `tan(${parseFloat(p1) * Math.PI / 180})`);
            }

            evaluatedInput = evaluatedInput.replace(/\^/g, "**");
            setInput(eval(evaluatedInput).toString());
        }
        catch (e) {
            setInput("Error");
        }
    };
    const handleClear = () => {
        setInput("")
        setResult("")
    };
    const toggleInvMode = () => {
        setInvMode((prevMode) => !prevMode);
    }
const toggleMode = () => {
    setMode((prevMode) => (prevMode === "deg" ? "red" : "deg"));
}

    const handleDelete = () => {
        setInput(input.slice(0, -1));
    }
    return (
        <>
        <div className="calculator">
            {/*Display the input */}
        <input type="text" value={input} readOnly/>
        <div className="calc-button">
        <button className="rad" onClick={() => toggleMode("rad")}>Rad | Deg</button>
        <button className="permutation" onClick={() => handleClick("!")}>X!</button>
        <button className="open" onClick={() => handleClick}>(</button>
        <button className="close" onClick={() =>handleClick (")")}>)</button>
        <button className="modulus" onClick={() => handleClick("%")}>%</button>
        <button className="ac"onClick={handleClear}>AC</button>
        <button className="inv" onClick={toggleInvMode}>{invMode ? "Normal1" : "Inv"}</button>
        <button className="sin" onClick={() =>invMode ? handleClick("asin(") : handleClick("sin(")}>sin</button>
        <button className="in">in</button>
        <button className="seven" onClick={() =>handleClick("7")}>7</button>
        <button className="eight" onClick={() =>handleClick("8")}>8</button>
        <button className="nine" onClick={() => handleClick("9")}>9</button>
        <button className="divide" onClick={() => handleClick("/")}>&divide;</button>
        <button onClick={() => handleClick}>&pi;</button>
        <button onClick={() => invMode ? handleClick("acos(") : handleClick("cos(")}>cos</button>
        <button onClick={() => handleClick("log")}>log</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>&times;</button>
        <button onClick={() => handleClick("e")}>e</button>
        <button onClick={() => invMode ? handleClick("atan(") : handleClick("tan(")}>tan</button>
        <button onClick={() => handleClick("/")}>&radic;</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={handleEvaluate}>Ans</button>
        <button onClick={handleDelete}>Del</button>
        <button onClick={() => handleClick("^")}>X<sup>y</sup></button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
        </div>
        </div>
        
        </>
    )
}
export default Buttons