import "./style.css";
import Footer from "./Footer";
import Result from "./Result";

const Form = (props) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Przelicznik walut</legend>
      <p>
        <label>
          <span>Kwota w PLN: *</span> <input className="form__inputValue"
            type="number"
            required
            min="0"
            step="0.01"
            placeholder="Wpisz wartość"
            autoFocus />
        </label>
      </p>
      <p className="form__paragraph">Wymagane pola oznaczone są gwiazdką *</p>
      <p>
        <label>
          <span> Wybierz walutę: </span>
          <select className="form__select">
            <option selected>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>AUD</option>
            <option>CAD</option>
            <option>CHF</option>
            <option>UAH</option>
            <option>SEK</option>
            <option>NZD</option>
          </select>
        </label>
      </p>
      <p className="form__rateSource">
        Kursy NBP na dzień 19.12.2022r.
      </p>
      <p>
        <button className="form__button" type="submit">Oblicz</button>
      </p>
      <Result />
    </fieldset>
    <Footer />
  </form>

)

export default Form;