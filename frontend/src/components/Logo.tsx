import { cn } from "@heroui/styles";

function Logo({ className = "" }: { className?: string }) {
  return (
    <img src="/logo.png" className={cn("w-10 object-contain", className)} />
  );
}

export default Logo;
