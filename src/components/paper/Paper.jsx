import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

/**`
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 */
function Paper(props = { children: <></>, className: "" }) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        "shadow-product-card-button bg-white rounded-[12px] ",
        props.className
      ),
    [props.className]
  );

  return (
    <div {...props} className={classNameMemo}>
      {props.children}
    </div>
  );
}

export default Paper;
