import React from "react";
import PropTypes from "prop-types";

const FaceNormalIcon = ({ isActive = false }) => {
  if (isActive) {
    return (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="14" r="14" fill="#FFD234" />
        <g filter="url(#filter0_f_86_83)">
          <path
            d="M27.8969 14.8297C27.8969 13.5209 26.8359 12.46 25.5271 12.46C24.2183 12.46 23.1574 13.5209 23.1574 14.8297V14.9029C23.1574 16.2117 24.2183 17.2726 25.5271 17.2726C26.8359 17.2726 27.8969 16.2117 27.8969 14.9029V14.8297Z"
            fill="#FF469F"
          />
        </g>
        <g filter="url(#filter1_f_86_83)">
          <path
            d="M4.09985 14.8282C4.09985 13.5202 5.16014 12.46 6.46807 12.46C7.776 12.46 8.83628 13.5202 8.83628 14.8282V14.9044C8.83628 16.2123 7.776 17.2726 6.46807 17.2726C5.16014 17.2726 4.09985 16.2123 4.09985 14.9044V14.8282Z"
            fill="#FF469F"
          />
        </g>
        <path
          d="M10.2886 19.22C10.2886 18.8334 10.602 18.52 10.9886 18.52H20.9986C21.3852 18.52 21.6986 18.8334 21.6986 19.22C21.6986 19.6066 21.3852 19.92 20.9986 19.92H10.9886C10.602 19.92 10.2886 19.6066 10.2886 19.22Z"
          fill="#111111"
        />
        <path
          d="M19.2148 11.5369C19.2148 13.042 20.0849 14.2621 21.1581 14.2621C22.2314 14.2621 23.1014 13.042 23.1014 11.5369C23.1014 10.0319 22.2314 8.81177 21.1581 8.81177C20.0849 8.81177 19.2148 10.0319 19.2148 11.5369Z"
          fill="#111111"
        />
        <path
          d="M21.1588 11.5372C21.1588 11.9199 20.8483 12.2301 20.4654 12.2301C20.0824 12.2301 19.772 11.9199 19.772 11.5372C19.772 11.1545 20.0824 10.8442 20.4654 10.8442C20.8483 10.8442 21.1588 11.1545 21.1588 11.5372Z"
          fill="white"
        />
        <path
          d="M12.7726 11.5369C12.7726 13.042 11.9031 14.2621 10.8305 14.2621C9.75792 14.2621 8.88843 13.042 8.88843 11.5369C8.88843 10.0319 9.75792 8.81177 10.8305 8.81177C11.9031 8.81177 12.7726 10.0319 12.7726 11.5369Z"
          fill="#111111"
        />
        <path
          d="M10.8302 11.5372C10.8302 11.9199 11.1404 12.2301 11.5231 12.2301C11.9058 12.2301 12.2161 11.9199 12.2161 11.5372C12.2161 11.1545 11.9058 10.8442 11.5231 10.8442C11.1404 10.8442 10.8302 11.1545 10.8302 11.5372Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_f_86_83"
            x="19.1573"
            y="8.45996"
            width="12.7395"
            height="12.8127"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_86_83" />
          </filter>
          <filter
            id="filter1_f_86_83"
            x="0.0998535"
            y="8.45996"
            width="12.7365"
            height="12.8127"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_86_83" />
          </filter>
        </defs>
      </svg>
    );
  }
  return (
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="14" r="14" fill="black" />
      <g filter="url(#filter0_f_86_83)">
        <path
          d="M27.8969 14.8297C27.8969 13.5209 26.8359 12.46 25.5271 12.46C24.2183 12.46 23.1574 13.5209 23.1574 14.8297V14.9029C23.1574 16.2117 24.2183 17.2726 25.5271 17.2726C26.8359 17.2726 27.8969 16.2117 27.8969 14.9029V14.8297Z"
          fill="#FF469F"
        />
      </g>
      <g filter="url(#filter1_f_86_83)">
        <path
          d="M4.09985 14.8282C4.09985 13.5202 5.16014 12.46 6.46807 12.46C7.776 12.46 8.83628 13.5202 8.83628 14.8282V14.9044C8.83628 16.2123 7.776 17.2726 6.46807 17.2726C5.16014 17.2726 4.09985 16.2123 4.09985 14.9044V14.8282Z"
          fill="#FF469F"
        />
      </g>
      <path
        d="M10.2886 19.22C10.2886 18.8334 10.602 18.52 10.9886 18.52H20.9986C21.3852 18.52 21.6986 18.8334 21.6986 19.22C21.6986 19.6066 21.3852 19.92 20.9986 19.92H10.9886C10.602 19.92 10.2886 19.6066 10.2886 19.22Z"
        fill="#111111"
      />
      <path
        d="M19.2148 11.5369C19.2148 13.042 20.0849 14.2621 21.1581 14.2621C22.2314 14.2621 23.1014 13.042 23.1014 11.5369C23.1014 10.0319 22.2314 8.81177 21.1581 8.81177C20.0849 8.81177 19.2148 10.0319 19.2148 11.5369Z"
        fill="#111111"
      />
      <path
        d="M21.1588 11.5372C21.1588 11.9199 20.8483 12.2301 20.4654 12.2301C20.0824 12.2301 19.772 11.9199 19.772 11.5372C19.772 11.1545 20.0824 10.8442 20.4654 10.8442C20.8483 10.8442 21.1588 11.1545 21.1588 11.5372Z"
        fill="white"
      />
      <path
        d="M12.7726 11.5369C12.7726 13.042 11.9031 14.2621 10.8305 14.2621C9.75792 14.2621 8.88843 13.042 8.88843 11.5369C8.88843 10.0319 9.75792 8.81177 10.8305 8.81177C11.9031 8.81177 12.7726 10.0319 12.7726 11.5369Z"
        fill="#111111"
      />
      <path
        d="M10.8302 11.5372C10.8302 11.9199 11.1404 12.2301 11.5231 12.2301C11.9058 12.2301 12.2161 11.9199 12.2161 11.5372C12.2161 11.1545 11.9058 10.8442 11.5231 10.8442C11.1404 10.8442 10.8302 11.1545 10.8302 11.5372Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_f_86_83"
          x="19.1573"
          y="8.45996"
          width="12.7395"
          height="12.8127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_86_83" />
        </filter>
        <filter
          id="filter1_f_86_83"
          x="0.0998535"
          y="8.45996"
          width="12.7365"
          height="12.8127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_86_83" />
        </filter>
      </defs>
    </svg>
  );
};

export default FaceNormalIcon;

FaceNormalIcon.propTypes = {
  isActive: PropTypes.bool,
};
