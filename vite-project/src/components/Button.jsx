import React from "react";

export const Button = ({ size, color, title, onClick }) => {
  const baseClass = "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2 cursor-pointer";
  
  const colorStyles = {
    primary: {
      container: "bg-amber-700",
      text: "text-red-500" // Исправлено на text-red-500 (предполагая, что вы хотели красный текст)
    },
    secondary: {
      container: "bg-red-500",
      text: "text-white"
    },
    danger: { // Добавим danger вариант для кнопки "Отмена"
      container: "bg-gray-500",
      text: "text-white"
    }
  };

  const sizeStyles = {
    small: "rounded-[100px] text-sm",
    medium: "rounded-[14px] text-base",
    large: "rounded-[16px] text-base min-h-[56px]"
  };

  return (
    <div 
      className={`${baseClass} ${colorStyles[color]?.container || ''} ${sizeStyles[size] || ''}`}
      onClick={onClick}
    >
      <div className={colorStyles[color]?.text || ''}>{title}</div>
    </div>
  );
};