import React from "react";

export const Text = (props) => {
  const { size, weight, color, children } = props;

  const classes = {
    sizes: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    weights: {
      normal: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
    },
    colors: {
      primary: "text-black",
      secondary: "text-gray-700",
      accent: "text-blue-500",
      danger: "text-red-500",
    },
  };

  return (
    <span
      className={`${classes.sizes[size]} ${classes.weights[weight]} ${classes.colors[color]}`}
    >
      {children}
    </span>
  );
};