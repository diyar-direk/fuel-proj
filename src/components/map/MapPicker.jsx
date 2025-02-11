import { Map, Marker } from "pigeon-maps";
import { memo, useCallback, useEffect, useState } from "react";
import { EventTarget } from "../../utils/EventTarget";
import Input from "../inputs/Input";

/**
 * @typedef utils
 * @property {function} onChange
 */

/**
 * @typedef mapPickerProps
 * @type {import("pigeon-maps").MapProps & utils}
 */

/**
 * @param {mapPickerProps} props
 */
function MapPicker({
  onChange = () => {},
  name = "",
  latitude,
  longitude,
  error,
  ...otherProps
}) {
  const [position, setPosition] = useState([latitude, longitude]);
  const [zoom, setZoom] = useState(8);
  const handleClick = useCallback(
    (e) => {
      setPosition(e.latLng);
      onChange(new EventTarget(name, e.latLng));
      setZoom(undefined);
    },
    [name, onChange]
  );

  useEffect(() => {
    if (
      latitude &&
      longitude &&
      (position[0] !== latitude || position[1] !== longitude)
    ) {
      setPosition([latitude, longitude]);
      setZoom(15);
    }
  }, [latitude, longitude, position]);

  const isPositionExist = !!(position[0] && position[1]);

  return (
    <div>
      <div>
        <Map
          boxClassname={
            error ? "border-danger-main border-[1px] border-solid" : ""
          }
          height={500}
          defaultCenter={isPositionExist ? position : [36, 40]}
          defaultZoom={isPositionExist ? 15 : 8}
          center={position}
          zoom={zoom}
          onClick={handleClick}
          {...otherProps}
        >
          {isPositionExist && <Marker width={50} anchor={position} />}
        </Map>
      </div>
      <Input error hidden helperText={error} />
    </div>
  );
}

export default memo(MapPicker);
