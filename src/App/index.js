import { useState } from "react";
import Form from "./Form";
import { useRatesData } from "./Form/useFetchRates";

function App() {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      fromAmount: +amount,
      toAmount: amount * rate,
      currency,
    });
  };

  return <Form result={result} calculateResult={calculateResult} />;
}

export default App;
