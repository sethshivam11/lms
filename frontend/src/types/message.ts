export interface MessageI {
  id: number;
  name: string;
  avatar: string;
  message: string;
  user: number;
  attachment: null | {
    type: "image" | "video" | "audio" | "document";
    url: string;
  };
  created_at: string;
}
