import { memo } from "react";

function PagePath({ paths }) {
  const length = paths.length;
  return (
    <div className="h-28 flex overflow-auto bg-secondary-main">
      {paths.map((path = { className: "" }, i) => {
        return (
          <div
            key={path.children}
            className={`h-full flex justify-end pl-12 items-center ${
              (i & 1) === 0 ? "text-black" : "text-white"
            } ${
              (i & 1) === 0 ? "bg-secondary-main" : "bg-primary-main"
            } rounded-l-full text-2xl   ${path.className || ""} ${
              length - 1 === i
                ? "shadow-[-15px_4px_50px_0px_rgba(0,0,0,0.26)]"
                : ""
            }`}
            style={{
              paddingRight: `80px`,
              marginRight: "-50px",
              zIndex: (length - i) * 1,
            }}
          >
            {path.children}
          </div>
        );
      })}
    </div>
  );
}

export default memo(PagePath);
