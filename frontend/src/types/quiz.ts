export interface QuizFormI {
  passMark: string;
  instructions: string;
  questions: {
    id: number;
    question: string;
    options: {
      id: number;
      option: string;
      correct: boolean;
    }[];
  }[];
}