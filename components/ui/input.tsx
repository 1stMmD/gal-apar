"use client";

import { cn } from "../../lib/utils";
import React from "react";
interface props extends React.ComponentPropsWithoutRef<"input"> {
  inputClassName?: string;
  variant?: "outlined";
  color?: "primary" | "foreground";
  block?: boolean;
  error?: boolean;
  success?: boolean;
  actions?: React.ReactNode[];
}

const Input = React.forwardRef<React.ElementRef<"input">, props>(
  (
    {
      inputClassName,
      className,
      variant = "outlined",
      color = "primary",
      block = false,
      error = false,
      success = false,
      actions,
      ...props
    },
    ref
  ) => {
    const variants = {
      outlined: {
        shared: "focus-within:shadow-[0_0_0_2px]",
        primary: "focus-within:!border-primary focus-within:shadow-primary/25",
        foreground:
          "focus-within:!border-foreground focus-within:shadow-foreground/25",
        error: "focus-within:!border-error !border-error !shadow-error/25",
        success:
          "focus-within:!border-success !border-success !shadow-success/25",
      },
    };

    return (
      <div
        className={cn(
          "relative flex items-center hover:border-foreground/50 px-3 py-2 border-border border rounded text-[14px] transition-all",
          block ? "w-full" : "",
          variants[variant]["shared"],
          variants[variant][color],
          success ? variants[variant]["success"] : "",
          error ? variants[variant]["error"] : "",
          className
        )}
      >
        <input
          ref={ref}
          className={cn(
            "flex-shrink w-full outline-none text-foreground/75 bg-transparent",
            inputClassName
          )}
          {...props}
        />
        {actions
          ? actions.map((action, idx) => (
              <React.Fragment key={idx}>{action}</React.Fragment>
            ))
          : ""}
      </div>
    );
  }
);

Input.displayName = "@1stMmD/Input";

export default Input;
