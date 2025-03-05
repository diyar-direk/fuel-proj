import { memo, useCallback } from "react";
import Checkbox from "src/components/inputs/Checkbox";

function StationsRecordViewFilter({ allocations, setAllocations }) {
  const handleAllocationsChange = useCallback(
    (e) => {
      const name = e.target.name;
      const checked = e.target.checked;

      setAllocations({ ...allocations, [name]: checked });
    },
    [allocations, setAllocations]
  );

  return (
    <div className="flex gap-3">
      <Checkbox
        name="vehicle"
        label="آليات"
        onChange={handleAllocationsChange}
        checked={allocations.vehicle}
      />
      <Checkbox
        name="industrial"
        label="صناعي"
        onChange={handleAllocationsChange}
        checked={allocations.industrial}
      />
      <Checkbox
        name="agriculture"
        label="زراعي"
        onChange={handleAllocationsChange}
        checked={allocations.agriculture}
      />
    </div>
  );
}

export default memo(StationsRecordViewFilter);
