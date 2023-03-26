import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import {
  Fieldset,
  Legend,
  AdditionalInfo,
  StyledForm,
  Select,
  AmountInput,
  Label,
  Paragraph,
  Button,
  Footer,
  Loading,
  Failure,
} from "./styled";

import { useRatesData } from "./useFetchRates";

const Form = () => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
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

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Clock />
      <Fieldset>
        <Legend>Przelicznik walut</Legend>
        {ratesData.state === "loading" ? (
          <Loading>Za chwilę zostaną załadowane kursy walut 😉</Loading>
        ) : ratesData.state === "error" ? (
          <Failure>
            Ups, coś poszło nie tak. Odśwież stronę lub sprawdź połączenie z Internetem.
            Jeśli to nie pomoże, to spróbuj ponownie później.
          </Failure>
        ) : (
          <>
            <Paragraph>
              <label>
                <Label>* Kwota w PLN:</Label>
                <AmountInput
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  placeholder="Wpisz wartość"
                  autoFocus
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                />
              </label>
            </Paragraph>
            <AdditionalInfo>Wymagane pola oznaczone są gwiazdką *</AdditionalInfo>
            <Paragraph>
              <label>
                <Label> Wybierz walutę:</Label>
                <Select
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Select>
              </label>
            </Paragraph>
            <AdditionalInfo italic>
              Kursy z Europejskiego Banku Centralnego z dnia {ratesData.date}
            </AdditionalInfo>
            <Paragraph>
              <Button>Oblicz</Button>
            </Paragraph>

            <Result result={result} />
          </>
        )}
      </Fieldset>
      <Footer>© Copyright 2022 by Kamil Adach - wszelkie prawa zastrzeżone</Footer>
    </StyledForm>
  );
};

export default Form;
