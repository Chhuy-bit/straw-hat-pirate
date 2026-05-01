import React from "react";

function Button({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass = "",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      id={id}
      {...props}
      className={`group flex gap-2 z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass} ${className}`}
    >
      {leftIcon}
      {children ? <span>{children}</span> : title ? <span>{title}</span> : null}
      {rightIcon}
    </button>
  );
}

export default Button;
