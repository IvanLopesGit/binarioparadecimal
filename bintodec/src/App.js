import React, { useState, useEffect } from "react";
import Display from "./component/Display";
import Input from "./component/Input";

import "./App.css";

function App() {
  const [inputBin, setInputBin] = useState({
    value: "",
    binary: false,
  });
  const [decNum, setDecNum] = useState();

  useEffect(() => {
    if (inputBin.value.length > 0 && inputBin.binary) {
      setDecNum(convertToDec(inputBin.value));
    } else if (inputBin.value.length === 0) {
      setDecNum("");
    }
  }, [inputBin]);

  const regExpNotBin = /[^01]/;

  const handleBinaryInput = (e) => {
    const { value } = e.target;
    setInputBin({ value, binary: !regExpNotBin.test(value) });
  };

  const convertToDec = (num) => {
    let convertedNum = 0;
    num
      .split("")
      .reverse()
      .map((item, index) => {
        return item === "1" && (convertedNum += Math.pow(2, index));
      });
    return convertedNum;
  };

  const Alert = () => {
    if (inputBin.value.length > 0) {
      if (!inputBin.binary) {
        return (
          <span style={{ color: "#0059ff", fontWeight: "bold" }}>
            Você digitou um digito não binário (Digite apenas 0 ou 1).
          </span>
        );
      } else if (inputBin.binary) {
        return (
          <span style={{ color: "#0059ff", fontWeight: "bold" }}>
            Conversão para número Decimal!
          </span>
        );
      } else {
        return " ";
      }
    }
    return null;
  };

  return (
    <div className="App">
      <div>
        <span className="attenuated">000</span>
        <h1>Conversor Binário para Decimal</h1>
        <span className="attenuated">000</span>
      </div>
      <p>
        Digite um{" "}
        <a
          href="https://en.wikipedia.org/wiki/Binary_number"
          target="_blank"
          rel="noopener noreferrer"
        >
          número binário
        </a>
        , converta{" "}
        <a
          href="https://en.wikipedia.org/wiki/Decimal"
          target="_blank"
          rel="noopener noreferrer"
        >
          para um número
        </a>{" "}
        decimal.
        <br />
        <Alert />
      </p>
      <Input inputBin={inputBin} handleBinaryInput={handleBinaryInput} />
      <Display inputBin={inputBin} decNum={decNum} />
      <footer>
        Criado por{" "}
        <a
          href="https://github.com/IvanLopesGit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ivan Lopes
        </a>
        <br />
      </footer>
    </div>
  );
}

export default App;
