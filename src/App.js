import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Conversion from "./Conversion";
import Choice from "./Choice";
import Amount from "./Amount";
import InputArea from "./InputArea";
import Title from "./Title";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [output, setOutput] = useState(0);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getConversion() {
        try {
          setError("");
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
          );
          const data = await res.json();
          setOutput(data.rates[to].toFixed(2));
        } catch (e) {
          setError("some error occured!⛔");
          console.log(e.message);
        }
      }
      if (amount === 0) {
        setOutput(0);
        return;
      }
      if (to === from) {
        setOutput(amount);
        return;
      }
      const timer = setTimeout(getConversion, 500);
      return () => clearTimeout(timer);
    },
    [amount, from, to]
  );
  return (
    <div className="app">
      <Title />
      <InputArea>
        <Amount onSetAmount={setAmount} amount={amount} />
        <Choice onSetValue={setFrom} value={from}>
          <label>From:</label>
        </Choice>
        <Choice onSetValue={setTo} value={to}>
          <label>To:</label>
        </Choice>
      </InputArea>

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <Conversion output={output} to={to} />
      )}
    </div>
  );
}
