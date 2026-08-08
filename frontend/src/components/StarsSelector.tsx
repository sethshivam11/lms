import { cn } from "@heroui/styles";
import { Star } from "lucide-react";
import React from "react";

function StarsSelector({
  value,
  setValue,
  className = "",
  buttonClassName = "",
  starClassName = "",
  size = 24,
  strokeWidth = 1.6,
}: {
  value: number;
  setValue: (value: number) => void;
  className?: string;
  buttonClassName?: string;
  starClassName?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      return;
    }

    const items = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>("button"),
    );

    if (!items.length) return;

    const current = (document.activeElement as HTMLElement)?.closest(
      "button",
    ) as HTMLElement | null;

    if (!current) return;

    const index = items.indexOf(current);

    if (index === -1) return;

    e.preventDefault();

    let nextIndex = index;

    switch (e.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % items.length;
        break;

      case "ArrowLeft":
        nextIndex = (index - 1 + items.length) % items.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = items.length - 1;
        break;
    }

    items.forEach((item) => (item.tabIndex = -1));

    const next = items[nextIndex];
    next.tabIndex = 0;
    next.focus();
  };

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label="stars"
      onKeyDown={handleKeyDown}
    >
      {[1, 2, 3, 4, 5].map((item, index) => (
        <button
          className={cn(
            "text-warning ring-visible rounded-lg",
            buttonClassName,
          )}
          onClick={() => {
            if (value === 0 || item !== value) {
              setValue(item);
            } else {
              setValue(0);
            }
          }}
          tabIndex={index === 0 ? 0 : -1}
          key={index}
        >
          <Star
            fill={item <= value ? "currentColor" : "transparent"}
            className={starClassName}
            size={size}
            strokeWidth={strokeWidth}
          />
        </button>
      ))}
    </div>
  );
}

export default StarsSelector;
