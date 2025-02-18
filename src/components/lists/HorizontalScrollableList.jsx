import { useRef } from "react";
import { Link } from "react-router-dom";

const HorizontalScrollableList = ({ items = [], className = "" }) => {
  const scrollRef = useRef(null);

  const handleWheelScroll = (event) => {
    if (scrollRef.current) {
      event.preventDefault();
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div
      ref={scrollRef}
      onWheel={handleWheelScroll}
      className={`overflow-x-auto whitespace-nowrap custom-scrollbar ${className}`}
    >
      <div className="flex flex-nowrap min-w-full">
        {items.map((item, index) => (
          <Link
            key={index}
            to="#"
            className="inline-block text-gray-main p-2 rounded-lg"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollableList;
