import React from "react";
export default function GridIcon(props) {
  const strokeColor = props.strokeColor || "#292929";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="17.828"
      viewBox="0 0 20 17.828"
    >
      <g id="home" transform="translate(0.001 -27.797)">
        <g
          id="Group_407"
          data-name="Group 407"
          transform="translate(-0.001 27.798)"
        >
          <g id="Group_406" data-name="Group 406" transform="translate(0 0)">
            <path
              id="Path_151"
              data-name="Path 151"
              d="M19.787,35.4l-9.48-7.5a.489.489,0,0,0-.614,0L.212,35.4a.591.591,0,0,0-.112.784.5.5,0,0,0,.726.121L10,29.054l9.173,7.254a.492.492,0,0,0,.307.108.507.507,0,0,0,.42-.23A.591.591,0,0,0,19.787,35.4Z"
              transform="translate(0.001 -27.798)"
              fill={strokeColor}
            />
          </g>
        </g>
        <g
          id="Group_409"
          data-name="Group 409"
          transform="translate(2.381 35.009)"
        >
          <g id="Group_408" data-name="Group 408" transform="translate(0 0)">
            <path
              id="Path_152"
              data-name="Path 152"
              d="M71.181,232.543a.537.537,0,0,0-.508.561v8.933H66.61v-4.876a2.552,2.552,0,1,0-5.079,0v4.876H57.468V233.1a.51.51,0,1,0-1.016,0V242.6a.537.537,0,0,0,.508.561h5.079a.531.531,0,0,0,.506-.518c0-.013,0-.027,0-.044v-5.437a1.531,1.531,0,1,1,3.048,0V242.6c0,.016,0,.03,0,.043a.531.531,0,0,0,.506.518h5.079a.537.537,0,0,0,.508-.561V233.1A.537.537,0,0,0,71.181,232.543Z"
              transform="translate(-56.452 -232.543)"
              fill={strokeColor}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
