import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

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
