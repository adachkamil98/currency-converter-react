import { useState } from "react";
import { currencies } from "../currencies";
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
} from "./styled";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Clock />
      <Fieldset>
        <Legend>Przelicznik walut</Legend>
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
            <Select value={currency} onChange={({ target }) => setCurrency(target.value)}>
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </Select>
          </label>
        </Paragraph>
        <AdditionalInfo italic>Kursy NBP na dzień 19.12.2022r.</AdditionalInfo>
        <Paragraph>
          <Button>Oblicz</Button>
        </Paragraph>

        <Result result={result} />
      </Fieldset>
      <Footer>© Copyright 2022 by Kamil Adach - wszelkie prawa zastrzeżone</Footer>
    </StyledForm>
  );
};

export default Form;
