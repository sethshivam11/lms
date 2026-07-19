export interface QuizFormI {
  passMark: string;
  instructions: string;
  questions: {
    id: number;
    question: string;
    type: "mcq" | "true_false";
    options: {
      id: number;
      option: string;
      correct: boolean;
    }[];
  }[];
}