import Filters from "../components/Filters";
import useBoundStore from "../store";
import SearchCourses from "../components/SearchCourses";
import Sort from "../components/Sort";
import ExploreCard from "../components/ExploreCard";
import { Button, Pagination } from "@heroui/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import EmptyState from "../components/EmptyState";
import { BookOpen } from "lucide-react";

function Explore() {
  const { courses, search, setSearch, pagination, setFilters } =
    useBoundStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (pagination.pages <= 7) {
      for (let i = 1; i <= pagination.pages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (pagination.page > 3) {
        pages.push("ellipsis");
      }
      const start = Math.max(2, pagination.page - 1);
      const end = Math.min(pagination.pages - 1, pagination.page + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (pagination.page < pagination.pages - 2) {
        pages.push("ellipsis");
      }
      pages.push(pagination.pages);
    }
    return pages;
  };

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    pagination.setPage(page);
  }, [searchParams]);

  return (
    <div className="flex gap-6 py-6">
      <Filters />
      <div className="flex flex-1 flex-col gap-4 w-full">
        <h3 className="tracking-tighter sm:text-3xl text-2xl font-bold font-outfit">
          Explore Courses
        </h3>
        <div className="flex max-sm:flex-col items-center gap-2 w-full">
          <SearchCourses value={search} setValue={setSearch} />
          <div className="flex gap-2 max-sm:w-full">
            <Sort isDrawer />
            <Filters isDrawer />
          </div>
        </div>
        <Sort />
        {courses.length > 0 ? (
          courses.map((item, index) => (
            <ExploreCard course={item} key={index} />
          ))
        ) : (
          <EmptyState
            icon={BookOpen}
            title="No Courses Found"
            description={
              search.length > 0
                ? "Try refining your search"
                : "Try adjusting your filters"
            }
            actions={
              search.length > 0 ? (
                <Button variant="outline" onClick={() => setSearch("")}>
                  Clear Search
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() =>
                    setFilters({
                      price: [0, -1],
                      categories: [],
                      duration: new Set(),
                      rating: 0,
                      lessons: [0, -1],
                    })
                  }
                >
                  Clear Filters
                </Button>
              )
            }
          />
        )}
        <Pagination className="mt-4 justify-center">
          <Pagination.Content className="max-sm:mx-auto">
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={pagination.page === 1}
                onClick={() =>
                  setSearchParams({ page: (pagination.page - 1).toString() })
                }
              >
                <Pagination.PreviousIcon />
                <span className="max-sm:hidden">Back</span>
              </Pagination.Previous>
            </Pagination.Item>
            <div className="flex gap-1">
              {getPageNumbers().map((page, i) =>
                page === "ellipsis" ? (
                  <Pagination.Item key={`ellipsis-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={page}>
                    <Pagination.Link
                      isActive={page === pagination.page}
                      onPress={() => pagination.setPage(page)}
                    >
                      {page}
                    </Pagination.Link>
                  </Pagination.Item>
                ),
              )}
            </div>
            <Pagination.Item>
              <Pagination.Next
                onClick={() =>
                  setSearchParams({ page: (pagination.page + 1).toString() })
                }
                isDisabled={pagination.page === pagination.pages}
              >
                <span className="max-sm:hidden">Next</span>
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </div>
    </div>
  );
}

export default Explore;
