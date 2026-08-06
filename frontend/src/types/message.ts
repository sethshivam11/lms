export interface MessageI {
  id: number;
  name: string;
  avatar: string;
  message: string;
  role: "instructor" | "student";
  user: number;
  attachment: null | {
    type: "image" | "video" | "audio" | "document";
    url: string;
  };
  created_at: string;
}
