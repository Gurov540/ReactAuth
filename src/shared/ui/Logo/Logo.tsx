import React from "react";
import clsx from "clsx";
import styles from "./Logo.module.css";

export type LogoVariant = "primary" | "secondary" | "outline";
export type LogoSize = "sm" | "md" | "lg";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LogoVariant;
  size?: LogoSize;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      className={clsx(
        styles.logo,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className
      )}
    >
      {children}
    </a>
  );
};
