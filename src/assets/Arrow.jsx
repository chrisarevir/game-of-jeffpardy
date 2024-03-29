import React from "react";

const Arrow = ({ direction, disabled = false }) => {
  const scaleValue = direction === "right" ? "" : "scale(-1, 1)";

  return (
    <svg
      height="42px"
      id="Capa_1"
      space="preserve"
      transform={scaleValue}
      version="1.1"
      viewBox="0 0 46 46"
      width="42px"
      fill={disabled ? "lightgray" : "black"}
      xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
    >
      <g>
        <g>
          <path
            d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645
        C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872
        L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Arrow;
