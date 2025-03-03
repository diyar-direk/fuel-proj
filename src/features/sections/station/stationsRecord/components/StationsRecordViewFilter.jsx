import { memo, useCallback } from "react";
import Button from "src/components/buttons/Button";

function StationsRecordViewFilter({ allocations, setAllocations }) {
  const handleAllocationsChange = useCallback(
    (e) => {
      const name = e.target.name;
      setAllocations({ ...allocations, [name]: !allocations[name] });
    },
    [allocations, setAllocations]
  );

  return (
    <div className="flex gap-3">
      <ButtonFilter
        onClick={handleAllocationsChange}
        checked={allocations.vehicle}
        name="vehicle"
      >
        آليات
      </ButtonFilter>
      <ButtonFilter
        onClick={handleAllocationsChange}
        checked={allocations.industrial}
        name="industrial"
      >
        صناعي
      </ButtonFilter>
      <ButtonFilter
        onClick={handleAllocationsChange}
        checked={allocations.agriculture}
        name="agriculture"
      >
        زراعي
      </ButtonFilter>
    </div>
  );
}

export default memo(StationsRecordViewFilter);

/**
 *
 * @param {import("src/components/buttons/Button").buttonProps} props
 * @returns
 */
const ButtonFilter = ({ checked, ...props }) => (
  <Button
    color={checked ? "primary" : "secondary"}
    variant={"outlined"}
    className="rounded-[35px] px-10 max-sm:px-5"
    {...props}
  />
);
