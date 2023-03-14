import { useState } from "react";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      fromAmount: +amount,
      toAmount: amount / rate,
      currency,
    });
  };

  return <Form result={result} calculateResult={calculateResult} />;
}

export default App;
