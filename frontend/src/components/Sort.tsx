import { Button, cn, Drawer } from "@heroui/react";
import { ArrowUpDown } from "lucide-react";
import useBoundStore from "../store";
import type { CourseSlice } from "../types/course";

const sorting: { id: CourseSlice["sort"]; title: string }[] = [
  { id: "latest", title: "Latest" },
  { id: "popularity", title: "Popularity" },
  { id: "price+", title: "Price - Low to High" },
  { id: "price-", title: "Price - High to Low" },
];

function Sorting({ className = "" }: { className?: string }) {
  const { sort, setSort } = useBoundStore();

  return (
    <div className={cn("flex items-center gap-4 w-full text-sm relative max-w-full font-lora", className)}>
      <h5 className="text-muted whitespace-nowrap max-sm:text-lg max-sm:font-bold max-sm:tracking-tight max-sm:text-black">Sort by</h5>
      <div className="flex items-center overflow-auto max-sm:flex-col max-sm:w-full max-sm:gap-2">
        {sorting.map(({ id, title }, index) => (
          <button
            className={`px-4 py-2 ${sort === id ? "border-accent text-accent" : "border-muted/10"} sm:border-b-2 cursor-pointer whitespace-nowrap max-sm:w-full max-sm:py-3 max-sm:rounded-lg max-sm:hover:bg-background-secondary max-sm:text-left`}
            onClick={() => setSort(id)}
            key={index}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}

function Sort({ isDrawer = false }: { isDrawer?: boolean }) {
  if (!isDrawer) {
    return <Sorting className="max-sm:hidden" />;
  }

  return (
    <Drawer>
      <Button variant="tertiary" className="w-full sm:hidden">
        <ArrowUpDown /> Sort
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content>
          <Drawer.Dialog>
            <Drawer.Handle />
            <Drawer.Body>
              <Sorting className="flex-col" />
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}

export default Sort;
