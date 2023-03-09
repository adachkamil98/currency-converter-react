import { StyledClock } from "./styled";
import useCurrentDate from "./useCurrentDate.js";

export const Clock = () => {
  const date = useCurrentDate();

  return (
    <StyledClock>
      {date.toLocaleString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })}
    </StyledClock>
  );
};
