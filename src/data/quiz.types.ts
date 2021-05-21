export type Option = {
  /**
   * Text to show the player
   */
  text: string;

  /**
   * For the right answer make this true
   */
  isRight: boolean;
};

export type Question = {
  question_id: number;
  question: string;
  points: number;
  options: Option[];
  negativePoint?: number;
};

export type Quiz = {
  quiz_id: number;
  quizName: string;
  playTime: string;
  totalQuestions: number;
  questions: Question[];
};
