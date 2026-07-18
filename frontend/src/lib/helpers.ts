import {
  intervalToDuration,
  formatDuration as formatDurationFns,
} from "date-fns";

export function formatDuration(seconds: number | string) {
  if (typeof seconds === "string") {
    seconds = parseInt(seconds);
  }

  const { hours = 0, minutes = 0 } = intervalToDuration({
    start: 0,
    end: seconds * 1000,
  });

  return formatDurationFns({ hours, minutes }, { delimiter: ", " });
}
