import Filters from "../components/Filters";
import useBoundStore from "../store";
import SearchCourses from "../components/SearchCourses";
import Sort from "../components/Sort";
import ExploreCard from "../components/ExploreCard";
import { Pagination } from "@heroui/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Explore() {
  const { courses, search, setSearch, pagination } = useBoundStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    pagination.setPage(page);
  }, [searchParams]);

  return (
    <div className="flex gap-6 py-6">
      <Filters />
      <div className="flex flex-1 flex-col gap-4 w-full">
        <h3 className="tracking-tighter sm:text-3xl text-2xl font-bold">
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
        {courses.map((item, index) => (
          <ExploreCard course={item} key={index} />
        ))}
        <Pagination className="mt-4 justify-center">
          <Pagination.Content className="max-sm:w-full">
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={pagination.page === 1}
                onClick={() =>
                  setSearchParams({ page: (pagination.page - 1).toString() })
                }
              >
                <Pagination.PreviousIcon />
                <span>Back</span>
              </Pagination.Previous>
            </Pagination.Item>
            <div className="flex gap-1 overflow-auto">
              {Array.from({
                length: pagination.pages,
              }).map((_, index) => (
                <Pagination.Item key={index}>
                  <Pagination.Link
                    isActive={index + 1 === pagination.page}
                    onClick={() =>
                      setSearchParams({ page: (index + 1).toString() })
                    }
                  >
                    {index + 1}
                  </Pagination.Link>
                </Pagination.Item>
              ))}
            </div>
            <Pagination.Item>
              <Pagination.Next
                onClick={() =>
                  setSearchParams({ page: (pagination.page + 1).toString() })
                }
                isDisabled={pagination.page === pagination.pages}
              >
                <span>Next</span>
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
