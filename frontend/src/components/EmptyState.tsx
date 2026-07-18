import type { LucideIcon } from "lucide-react";

function EmptyState({
  icon,
  title,
  description,
  actions,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  const Icon = icon;

  return (
    <div className="flex flex-col items-center justify-center gap-2 col-span-full min-h-40 h-[30vh] w-full">
      <div className="p-2 bg-background-secondary rounded-xl">
        <Icon />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h5 className="text-xl font-semibold tracking-tight">{title}</h5>
        <p className="text-muted text-sm">{description}</p>
      </div>
      <div className="mt-2">{actions}</div>
    </div>
  );
}

export default EmptyState;
