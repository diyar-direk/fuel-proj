import React, { memo, Suspense } from "react";
import Loading from "./skeleton/Loading";

/**
 * @typedef utils
 * @property {string} height
 */

/**
 * @typedef pageFallbackProps
 * @type {React.SuspenseProps & utils}
 */
/**
 * @param {pageFallbackProps} props
 */
function PageFallback({ children, height = "65vh", ...props }) {
  return (
    <Suspense
      fallback={
        <div
          className="flex justify-center items-center"
          style={{
            height,
          }}
        >
          <Loading />
        </div>
      }
      {...props}
    >
      {children}
    </Suspense>
  );
}

export default memo(PageFallback);
