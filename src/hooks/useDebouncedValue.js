import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export default function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const setDebouncedValueDebounce = useDebounce(setDebouncedValue, delay);

  useEffect(() => {
    setDebouncedValueDebounce(value);
  }, [value, setDebouncedValueDebounce]);

  return debouncedValue;
}
