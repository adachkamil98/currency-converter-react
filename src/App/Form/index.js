import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import { Result } from "./Result";

const Form = ({ calculateResult, result }) => {

  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form
      className="form"
      onSubmit={onSubmit}
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznik walut</legend>
        <p>
          <label>
            <span>* Kwota w PLN: </span>
            <input
              className="form__inputValue"
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
        </p>
        <p className="form__paragraph">Wymagane pola oznaczone są gwiazdką *</p>
        <p>
          <label>
            <span> Wybierz walutę: </span>
            <select
              className="form__select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </label>
        </p>
        <p className="form__rateSource">
          Kursy NBP na dzień 19.12.2022r.
        </p>
        <p>
          <button className="form__button"
          >
            Oblicz
          </button>
        </p>

        <Result result={result} />
      </fieldset>
      <footer className="form__footer">
        © Copyright 2022 by Kamil Adach - wszelkie prawa zastrzeżone
      </footer>
    </form>
  )
};

export default Form;