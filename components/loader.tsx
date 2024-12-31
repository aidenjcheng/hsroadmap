import * as React from "react";

const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-8 w-8 animate-spin  ease-linear repeat-infinite duration-500 text-contrast"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      className="opacity-25"
    ></circle>
    <path
      fill="currentColor"
      d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12zm2 5.291A7.96 7.96 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938z"
      className="opacity-75"
    ></path>
  </svg>
);

export default Loader;
