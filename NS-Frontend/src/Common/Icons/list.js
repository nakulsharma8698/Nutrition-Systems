import React from "react";
export default function ListIcon(props) {
  const strokeColor = props.strokeColor || "#0e0e0e";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="17"
      viewBox="0 0 22 17"
      onClick={props.onClick}
    >
      <g id="Group_927" data-name="Group 927" transform="translate(-828 -555)">
        <g id="Group_926" data-name="Group 926">
          <g id="Group_924" data-name="Group 924">
            <g id="Group_925" data-name="Group 925">
              <g
                id="Rectangle_164"
                data-name="Rectangle 164"
                transform="translate(828 555)"
                fill="#fff"
                stroke={strokeColor}
                strokeWidth="1"
                opacity={props.strokeColor ? 1 : 0.15}
              >
                <rect width="22" height="17" stroke="none" />
                <rect x="0.5" y="0.5" width="21" height="16" fill="none" />
              </g>
            </g>
          </g>
        </g>
        <g
          id="Group_284"
          data-name="Group 284"
          transform="translate(-4721.5 -931.5)"
          opacity={props.strokeColor ? 1 : 0.15}
        >
          <line
            id="Line_41"
            data-name="Line 41"
            x2="14"
            transform="translate(5553.5 1490.5)"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
          />
          <line
            id="Line_42"
            data-name="Line 42"
            x2="14"
            transform="translate(5553.5 1493.5)"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
          />
          <line
            id="Line_43"
            data-name="Line 43"
            x2="14"
            transform="translate(5553.5 1496.5)"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
          />
          <line
            id="Line_44"
            data-name="Line 44"
            x2="14"
            transform="translate(5553.5 1499.5)"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
}
