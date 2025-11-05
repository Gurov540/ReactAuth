import React from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

export type InputVariant = "primary" | "secondary" | "outline";
export type InputSize = "sm" | "md" | "lg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  inputSize?: InputSize;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  children,
  variant = "primary",
  inputSize = "md",
  fullWidth = false,
  disabled,
  className,
  ...props
}) => {
  return (
    <input
      className={clsx(
        styles.input,
        styles[variant],
        styles[inputSize],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </input>
  );
};
