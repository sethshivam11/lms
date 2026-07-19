export interface Course {
  id: number;
  name: string;
  cover: string;
  price: number;
  owner: number;
  status: "draft" | "published" | "archived";
  level: "beginner" | "intermediate" | "advanced";
  category: string;
  rating_sum: number;
  is_banned: boolean;
  ban_reason: string | null;
  created_at: string;
  skills: string[] | null;
  duration: number;
  students_enrolled: number;
  rating_count: number;
  subDescription: string;
  lessons: number;
}

export interface CourseSlice {
  loading: false;
  pagination: {
    page: number;
    pages: number;
    total: number;
    setPage: (page: number) => void;
    limit: number;
  };
  sort: "latest" | "popularity" | "price+" | "price-";
  setSort: (sort: CourseSlice["sort"]) => void;
  search: string;
  setSearch: (value: string) => void;
  filters: {
    price: number | number[];
    categories: string[];
    duration: Set<string>;
    rating: number;
    lessons: number[];
  };
  setFilters: (filters: CourseSlice["filters"]) => void;
  courses: Course[];
  course: Course & {
    description: string;
    owner_name: string;
    owner_avatar: string;
  };
  recentCourses: Course[];
  suggestedCourses: Course[];
}

export interface CourseDetailsFormI {
  name: string;
  subDescription: string;
  description: string;
  category: string;
  level: string;
  skills: string[];
  price: string;
}