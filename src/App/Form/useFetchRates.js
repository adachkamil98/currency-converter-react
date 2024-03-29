import { useState, useEffect } from "react";

const currencyDataURL = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(currencyDataURL);

        if (!response.ok) {
          throw new Error(response.StatusText);
        }

        const { rates, date } = await response.json();

        setRatesData({
          state: "succeed",
          rates,
          date,
        });
      } catch (error) {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 500);
  }, []);

  return ratesData;
};
