import { memo } from "react";
import Arrow from "./Arrow";

function ShowSchema({ title, children = [] }) {
  return (
    <div className="flex flex-col mt-6 max-md:mt-4">
      <span className="text-base">{title}</span>
      <div className="mr-6 max-md:mr-4">
        {children.map(({ arrowProps = {}, ...props }, i) => (
          <div key={i} className="flex gap-2">
            <Arrow {...arrowProps} />
            <ShowSchema {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ShowSchema);
