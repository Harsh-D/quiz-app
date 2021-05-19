import { Quiz } from "./quiz.types";

const quizOne: Quiz = {
  quiz_id: 1,
  quizName: "Marvel Cinematic Universe",
  playTime: "5 minutes",
  questions: [
    {
      question_id: 1,
      question:
        "How many avengers were there in first Avengers movie released in 2012?",
      points: 5,
      negativePoint: 2,
      options: [
        {
          text: "22",
          isRight: false,
        },
        {
          text: "6",
          isRight: true,
        },
        {
          text: "3",
          isRight: false,
        },
        {
          text: "12",
          isRight: false,
        },
      ],
    },
    {
      question_id: 2,
      question:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 15,
      negativePoint: 22,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false,
        },
        {
          text: "performing surgery as a real doctor",
          isRight: true,
        },
        {
          text: "eating burgers",
          isRight: false,
        },
        {
          text: "driving his lamborghini",
          isRight: false,
        },
      ],
    },
    {
      question_id: 3,
      question: "who's the love interest for Wanda in MCU?",
      points: 5,
      options: [
        {
          text: "Clint",
          isRight: false,
        },
        {
          text: "Vision",
          isRight: true,
        },
        {
          text: "Thor",
          isRight: false,
        },
        {
          text: "Bruce Banner",
          isRight: false,
        },
      ],
    },
  ],
};

//console.log(quizOne.questions[2].negativePoint);

export { quizOne };
