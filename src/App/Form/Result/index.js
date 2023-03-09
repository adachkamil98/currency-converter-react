export const Result = ({ result }) => (
  <p>
    {!!result && (
      <>
        {result.fromAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
        <strong>
          {result.toAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);
