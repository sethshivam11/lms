import { Button, Input } from "@heroui/react";
import { Search } from "lucide-react";

function SearchCourses({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 w-full">
      <Input
        name="course search"
        placeholder="Search for Courses"
        className="bg-background/50 md:w-3/5 w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>
        <Search />
        <span className="max-sm:hidden">Search</span>
      </Button>
    </div>
  );
}

export default SearchCourses;
