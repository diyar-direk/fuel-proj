import { memo, useEffect, useRef, useState } from "react";
import ShowSchema from "./ShowSchema";
import { getDistance } from "../../utils/getDistance";
import Arrow from "./Arrow";
/**
 * @typedef utils
 * @property {React.Ref<HTMLDivElement> | undefined} containerArrowsRef
 * @property {import("./Arrow").arrowProps} arrowProps
 */

/**
 * @typedef schemaProps
 * @type {import("./ShowSchema").showSchemaProps & utils}
 */

/**
 * @param {schemaProps} props
 */
function Schema({
  arrowProps = {},
  arrowHeight,
  containerArrowsRef,
  i,
  ...props
}) {
  const [style, setStyle] = useState({});
  const arrowRef = useRef(null);

  useEffect(() => {
    /**
     * @type {HTMLDivElement}
     */
    const containerArrows = containerArrowsRef.current;
    /**
     * @type {HTMLDivElement}
     */
    const arrow = arrowRef.current;

    if (containerArrows && arrow) {
      const prevSchema = containerArrows.childNodes.item(i - 1);
      /**
       * @type {HTMLDivElement}
       */
      const prevArrow = prevSchema?.firstChild;

      if (prevArrow) {
        const prevArrowRect = prevArrow.getBoundingClientRect();
        const arrowRect = arrow.getBoundingClientRect();

        arrowRect.x += arrowRect.width;

        prevArrowRect.x += prevArrowRect.width;
        prevArrowRect.y += prevArrowRect.height;

        const distance = getDistance(
          prevArrowRect.x,
          prevArrowRect.y,
          arrowRect.x,
          arrowRect.y
        );

        if (distance > 0) {
          setStyle({
            marginTop: `-${distance + arrowHeight * 0.375}px`,
            height: `${distance + arrowHeight * 1.325}px`,
          });
        }
      }
    }
  }, [containerArrowsRef, arrowRef, i, arrowHeight]);

  return (
    <div className="flex gap-0.5">
      <Arrow
        {...arrowProps}
        ref={arrowRef}
        style={style}
        arrowHeight={arrowHeight}
      />
      <ShowSchema {...props} arrowHeight={arrowHeight} />
    </div>
  );
}

export default memo(Schema);
