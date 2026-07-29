import { cn } from "@heroui/styles";
import { BookOpen } from "lucide-react";

function Logo({className =""}: {className?: string}) {
  return (
    <span className={cn("p-1.5 bg-linear-to-b from-blue-300 to-blue-700 rounded-2xl text-white", className)}>
      <BookOpen size={28} />
    </span>
  );
}

export default Logo;
