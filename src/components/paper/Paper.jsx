import { twMerge } from "tailwind-merge";

/**`
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 */
function Paper(props = { children: <></>, className: "" }) {
  return (
    <div
      {...props}
      className={twMerge(
        "shadow-product-card-button bg-white rounded-[12px] ",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default Paper;
