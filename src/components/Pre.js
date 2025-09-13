import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
        {/* V outline */}
        <text
          x="40"
          y="100"
          fontFamily="Arial, sans-serif"
          fontSize="80"
          fontWeight="bold"
          fill="none"
          stroke="#E30613"
          strokeWidth="2"
          strokeDasharray="500"
          strokeDashoffset="500"
        >
          V
          <animate
            attributeName="stroke-dashoffset"
            from="500"
            to="0"
            dur="1.5s"
            fill="freeze"
          />
        </text>

        {/* V fill (red final) */}
        <text
          x="40"
          y="100"
          fontFamily="Arial, sans-serif"
          fontSize="80"
          fontWeight="bold"
          fill="#E30613"
          opacity="0"
        >
          V
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            begin="1.5s"
            dur="1s"
            fill="freeze"
          />
        </text>

        {/* M outline */}
        <text
          x="105"
          y="100"
          fontFamily="Arial, sans-serif"
          fontSize="80"
          fontWeight="bold"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="500"
          strokeDashoffset="500"
        >
          M
          <animate
            attributeName="stroke-dashoffset"
            from="500"
            to="0"
            begin="0.5s"
            dur="1.5s"
            fill="freeze"
          />
        </text>

        {/* M fill (white final) */}
        <text
          x="105"
          y="100"
          fontFamily="Arial, sans-serif"
          fontSize="80"
          fontWeight="bold"
          fill="white"
          opacity="0"
        >
          M
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            begin="2s"
            dur="1s"
            fill="freeze"
          />
        </text>

        {/* Dot outline */}
        <text
          x="190"
          y="100"
          fontFamily="Arial, sans-serif"
          fontSize="80"
          fontWeight="bold"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="100"
        >
          .
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            begin="1s"
            dur="1s"
            fill="freeze"
          />
        </text>

        {/* Dot fill (white final) */}
        <text
          x="190"
          y="100"
          fontFamily="Arial, sans-serif"
          fontSize="80"
          fontWeight="bold"
          fill="white"
          opacity="0"
        >
          .
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            begin="2.5s"
            dur="1s"
            fill="white"
          />
        </text>
      </svg>
    </div>
  );
}

export default Pre;
