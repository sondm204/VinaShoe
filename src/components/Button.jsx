"use client"

import { Link } from "react-router-dom"

const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  onClick,
  type = "button",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full transition-colors transition-all duration-300 ease-in-out"

  const variantClasses = {
    primary: "bg-[#df6724] hover:bg-black text-white text-sm",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline: "border border-accent text-accent hover:bg-accent/10",
    link: "text-accent hover:text-accent/80 underline",
  }

  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-6",
    lg: "py-3 px-14 text-lg",
  }

  const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
