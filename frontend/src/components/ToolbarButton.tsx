import { cn } from "@heroui/styles";

function ToolbarButton({
  title,
  value,
  type = "button",
  separator = false,
  tabIndex,
  className = "",
}: {
  title?: string;
  value?: HTMLButtonElement["value"];
  type?: HTMLButtonElement["type"];
  separator?: boolean;
  tabIndex?: HTMLButtonElement["tabIndex"];
  className?: HTMLButtonElement["className"];
}) {
  return (
    <button
      className={cn(
        "bg-default! p-2.5! size-fit! z-0 focus-visible:z-10 focus-visible:ring-2 focus-visible:outline-none ring-accent hover:bg-default-hover! aria-pressed:bg-accent-soft! relative!",
        className,
      )}
      type={type}
      value={value}
      title={title}
      tabIndex={tabIndex}
    >
      {separator && (
        <span className="inline-block bg-muted w-0.25 opacity-50 h-4 -translate-y-1/2 right-0 rounded-full top-1/2 absolute" />
      )}
    </button>
  );
}

export { ToolbarButton };
